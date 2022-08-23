# Make a request from our front end to an API

## REST

REpresentational
State
Transfer

- Get
- Post
- Delete
- Put


## 3 things to be aware of when using `axios`

1. async
2. await
3. .data
  - to access data that axios returns in the JSON

## .env note:

whenever making changes to the .env file, I must restart the React server from the terminal (npm start)

## to only get one thing from the data

target the `[0]` index of the .data array

``` JavaScript
// in event handler, to get API data from axios
// this is slow, so we have to tell the browser to wait with `await` and 'async'
handleSubmitRequest = async (event) =>
{
  

  // save requested api data to a variable
  let apiResponse = await axios.get('api url goes here');

  // update state with apiResponse data
  // `axios` returns data in the response in a `data` property
  // this.setState(
  // {
  //   theData: response.data.results
  // });


}

handleSubmitInput = (event) =>
{
  let city = event.target.value;
  this.setState(
  {
    thing: thing
  });

}

// make a form to get the user's input to pass into the API request
<form onSubmit={this.handleSubmitRequest}/>
<input onInput={this.handleSubmitInput}/>


// how to put a reference to my private API key in my .env file
let response = await axios.get(`url key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);



```


## try/catch

``` JavaScript

// hey, computer do this, if this doesn't work, do the stuff in `error`
try 
{

} catch(error)
{
  console.log('error: uh oh, spaghetti-Os: ', error);
  console.log('error.message: ', error.message);

  // set error message to state
  // make sure there are properties for each in state
  // as well as 
  this.setState({
    error: true,
    errorMessage: `uh oh, spaghetti-Os: ${error.response.status}`
  })
};

// ternary to display either an error message, or the data

{this.state.error 
  ?
  <p>this.state.errorMessage</p>
  :
  <ul>
    {/*the variable holding my <li> with data I want to render {swData, for example}*/}
  </ul>
}

```
