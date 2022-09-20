# Express

HTTP REST Framework
- what does that mean?

## Routing

Request:
  Includes the:
  1. 'URL' and the 
  2. 'Method' (GET,POST, PUT, DELETE)

The `app` object in the backend server has methods attached to it that we route to endpoints
Ex: `app.get('/query', (req, res) =>{code goes here}`

## Middleware
Middleware is an function that comes between the `request` and the `response`
for example, we can have a request with a string attached, and then we can reverse the words and send it back as a response

the reversing of the words was the middleware

We can pass the data from one middleware to the next one with chaining
ex:

``` JavaScript
app.get('/add', (req,res, next) =>
{
  console.log('middleware hit');
  next(); // we can't directly tell JS which middleware to hit next, so ordering matters v much
}, (req,res)=>
{
  res.send('You made it :)');
});
```

## Error Handling

Express has a lil bit of error handling built in, like 404 and 500 errors.

to define our own error handlers:

we can pass an 'argument' into the next function

If we're doing something in a middleware, and something happens that we don't like, we can pass something into `next()` and it'll automatically trigger an error event

**defining our own error parameters in middleware function:**
 
```JavaScript
// Express just magically knows that if we put this stuff into a function...
app.get('/add', (req,res)=>
{
  // if the header doesn't have a header.authorization property
  if (!req.header.authorization)
  {
    // this next will trigger the `function errorHandler` function
    next('unauthorized');
  }
  res.send('All good');
})

// THIS line of code makes the `app` object know to use the `errorHandler` function for `next`
app.use(errorHandler);

function errorHandler(error,req,res,next)
{
  // log the error
  console.log(error);
  // send status code 401 for the error
  response.status(401);
  // send the error
  response.send(error);
}
```

```javascript
//server.js

// server logic goes here

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


function logger(req,res,next)=>
{
  // log the query
  // logs alll of the thing in the query in the URL
  console.log(req.query);

  // MUST call `next` here, or the server will get stuck on this line, expecting to do more things
  // can attach things from this middleware that gets passed into the callback, down the routing line EX:
  // add a .message key to the `req` object:
  req.message = 'hello from logger~!';
  next();

  // after `next` Express will go to the next callback function
  // in this case, it'll go back into app.get and into the (req,res => res.send('you made it');)
}

// add `logger()` function in this app.get for add
app.get('/add', logger, (req,res)=>
{
  // read the .message from the logger
  console.log(req.message);
  res.send('you made it');
})

```


``` javascript
//index.js

'use strict';

require('dotenv').config();
const app = require('./server.js');
const PORT = process.env.PORT || 3002;

app.listen(PORT, ()=>
{
  console.log(`App is running on port: ${PORT}`);
});
```


**TDD: Test Driven Development**

for `__test__` files:
the convention is to have them named: the name of the thing we're testing then .test, then .js or whatever, EX:
app.test.js to test app object

the test files are essentially calls using the jest framework where we write CRUD stuff and write the output we're expecting
we can write it just as we'd write the request in our front-end react app

`Jest` is a framework with an API used for testing any JS codebase

"jest --verbose

`curry` a function:

a function that returns another function (a higher order function?)
ex: 
``` javascript

// we curry, because passing in a messages into the `(req,res,next)` part would have Express interpret `messages` as an error and this is a way to get around that
const readMessage = (messages) => (req,res,next) =>
{
  for (let message of messages)
  {
    if(messge.id === req.params.id)
    {
      result = message;
    }
  }
  if (!result)
  {
    next('no message found');
  }
  else 
  {
    res.json(result);
  }
}
```
