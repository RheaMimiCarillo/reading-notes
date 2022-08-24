

**url dissection**

**http://api-website/search/search?key=value&anotherKey=value**


- http://api-website/ : base URL

- search : endpoint(route)

- ?key=value&anotherKey=value : query string
  - key=value : key/value pair


use express.js to make a server

add dotenv

add cor

deploy server to Heroku

connnect our React app to Netlify to the backend at Heroku

use classes to simplify bulky incoming data

**what is node.js?**
node is a *back-end* javascript runtime environment

before node.js, we used to have a translation layer between javascript in the front-end and whatever language we'd use as the back-end


**NPM** - (NODE PACKAGE MANAGER)
how we install packages (someone else's code that's available to us)

Workspace settings:
set 'Workbench: Color Theme' of backend workspace to a different color

install `nodemon` globally:
`npm i -g nodemon`
the `-g` flag is global


Kill/stop processes:

`npx kill-port 3001`

user inputs a search query
we want to use it to make a request to a json in our files

app.get('/pet', (request,response) => {
  let species = request.query.species;
  // return the very first item in an array that meets the criteria

  // if the value that the user inputs match the .species value in the data.json
  // data was imported from json to an array 
  let dataToSend = data.find(pet => pet.species === species)
  {

  });
  response.send(species);
})


```JavaScript

// asdfasdf
// connect backend to front end

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      cityName: '',
      lat: '',
      lon: '',
      cityData: [],

    }
  }

  render()
  {
    // need to have a form to get city input
    // onSubmit, call a handler function that can handle both an API request from a local machine, as well as the deployed website (not heroku or netlify)
    return (
      <>
        <form onSubmit={this.handleCitySubmit}>
          <label type="text"> Data for a city
            <input onInput={this.handleInput}>{this.cityName}</input>
          </label>
          <button type="submit">Explore</button>
        </form>
      </>
    )
  }
}

// url for axios request:
let requestData = await axios.get(`${process.env.REACT_APP_SERVER}/city?cityName=${this.state.cityName}`);

this.setState{
  cityData = cityData.data,
}

// can separate the `url` and the actual request from axios


// use a ternary to only display something after a search
{
  // if this flag in state is true, then also show the <p>
  this.state.showElement
  &&
  <p>hi there</p>
}


```
idea: throw an error if they search for a city that's not in the json file
