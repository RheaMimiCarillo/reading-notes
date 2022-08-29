
# cache is another form of storage

why cache?

- faster
- make fewer requests
- requests cost $$$
- hold backup data in case the API goes down

## questions to ask about cache?

- how long to store data
- how often to update the data (movie releases vs weather changes)

``` JavaScript

// creating a cache

let cache = {};
async function getThings(req,res,next)
{
  try
  {
    let searchQuery = req.query.searchQuery;

    let key = searchQuery + 'Data';

    // declare how many milliseconds before the cache must update
    // 1000 milliseconds in a second, * (60 minutes in an hour * (24 hours in a day) * (30 days in a month))
    // "Please cache it for a month"
    let timeToCache = 1000 * 60 * 24  * 30;

    if (cache[key] && Date.now() - cache[key].timestamp < timeToCache)
    {
      // if the data is already in the cache, and it's recent enough, send the cache
      console.log(`It's in the cache!`);
      res.status(200).send(cache[key]);
    }
    else
    {
      console.log(`It's not in the cache, so let's cache it!`);
      // if it's old or not in cache, make an API request and store it to cache ("`cache` the data")

      let url = 'https://really-cool-url.mom';
      let request = await axios.get(url);

      let requestArr = request.data;


      cache[key] = 
      {
        data: picArray,
        // get the time right NAO
        // use timestamp to see if this data is not toooooo old
        timestamp: Date.now()
      };

      res.status(200).send(requestArr);
    }
  } 
  catch(err)
  {

  }
}



```
