when setting up a server:

`touch` all of the files I want before initiating from the terminal
`init -y`
the `-y` flag accepts all of the defaults

then: `npm i dotenv cors cors express axios`: to install all of these packages all at once

then: go to the package.json in the vs code and make sure the dependencies are correct, (make sure `server.js` is set as the default)


``` JavaScript
// SCAFFOLD FOR SERVER.JS

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios);

// USE
const app = express();
app.use(cors());

// define port and get proof of life
const PORT = process.env.PORT || 3002;
// ensure PORT is setup in the .env file of the server repo

// ROUTES 
// app is an instance of `express`
// so, .get() is a method of the `express` instance
app.get('/', (req, res) => 
{
  res.status(200).send('Hello there!');
});

// set a 'star' route to handle some bad routes
app.get('*', (req,res => 
{
  req.status(404).send('They took my fucking eyes');
}))


// CLASSES

// ERRORS

// internal server error 
app.use((err,req,res,next) =>
{
  console.log(err.message);
  res.status(500).send('You dun fucked up, A-A-ron: ', err.message);
})


// LISTEN
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
```
