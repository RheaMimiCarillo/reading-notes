# Modularization

we're refactoring our server code, so that we have our server.js broken into Movies.js and Weather.js

``` JavaScript
let param = {
  key = process.env.WEATHER_API_KEY,
  lat = request.query.lat,
  lon = request.query.lon
}

Promises: try{

} catch(err)
{
  // as long as this promise is unresolved, it can break your code 
  // "a hanging promise"
  // then implies it's a promise
  // Promise means, once  you've done the Promise thing, 'then' do the thing that comes after `then`
  Promise.resolve().then(() => {
    throw new Error(err.message);
  }).catch(next);
}
```
