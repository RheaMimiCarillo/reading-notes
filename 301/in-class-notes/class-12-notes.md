# Create data

## REST Verbs we use in our database:

C: Model.create() | POST

R: Model.find() | GET | axios.get() | app.get()

U: 

D: Model.findByIdAndDelete() | DELETE

Axios: the package we use to make requests to APIs into our server

Express: it's a flavor if JS? It's how we create `routes` in our server
``` JavaScript
/* server.js */
const mongoose = require('mongoose');


// bring schema
const Cat = require('./models/cat.js');


// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// connect Mongoose to out MongoDB
mongoose.connect(process.env.<my DB_URL>);


// need to import model to interact with DB

// ROUTE for database

app.get('/cats', getCats);
app.get('/cats', postCats);


async function getCats(req,res,next)
{
  try
  {
    // .find() accepts an object as a parameter
    // https://mongoosejs.com/docs/api.html#model_Model-find
    // passing in an empty object will return all cats
    let results = await Cat.find({});
    res.status(200).send(results);

    // get just 'Dot' from the array
    let dot = await Cat.find({name: 'Dot'});
  }
  catch(err)
  {
    next(err);
  }
}

async function postCats(req,res,next)
{
  // req.body() how we send data to our backend
  console.log(req.body);

  try
  {
    res.status(200).send('Data is coming');
  }
  catch (err)
  {
    next(err);
  }
}
```

``` JavaScript
/* cat.js */
'use strict';

const mongoose = require('mongoose');


// bring schema in
// use object deconstruction to extract `Schema` property from `mongoose`
const { Schema } = mongoose;

// define a Schema for cat data
// this is a 'blueprint' for what data must look like
// "define how our cat schema will be structured"
const catSchema = new Schema({
  // cat cats will have:

  // `required: true` means the property must exist in the entry to get added to the database
  name: {type: String, required: true},
  color: {type: String, required: true},
  spayNeuter: {type: Boolean, required: true},
  location: {type: String, required: true}
});

// define a Cat model:
// access the model creator in `mongoose`
// "these gives mongoose functionality and a predefined schema"
// .model() takes a `String` and a `Schema` as arguments
// calling our model 'Cat' in the database and using the catSchema as the Schema
// in the DB, it'll get pluralized as `Cats`
const CatModel = mongoose.model('Cat', catSchema);

module.exports = CatModel;




```

**Create `seed` data to test if our DB is working**

``` JavaScript
/* seed.js*/
// we only need to run this once
// have mongo listen to this once time get the data
// and then stop listening

'use strict';
require('dotenv').config();

const mongoose=require('mongoose');
mongoose.connect(process.env.<my DB_URL>);

// bring in cat model 
const Cat = require('./models/cat.js');
async function seed()
{
  // structure the same as our Cat Schema
/*
  name: {type: String, required: true},
  color: {type: String, required: true},
  spayNeuter: {type: Boolean, required: true},
  location: {type: String, required: true}
*/
  // call the 'create()' method on the model
  await Cat.create({
    name: 'Dot',
    color: 'Tuxedo',
    spayNeuter: true,
    location: 'hammock'
  });
  console.log('Dot was added to the database');

// close mongoose connection, 
  mongoose.disconnect();
}

// invoke the function
seed();



```


**to make a body request from frontend to backend and make a create() request **


``` JavaScript
// makes it so that our backend can interpret JSON files from the front-end
app.use(express.json());

// `BODY` in the query from frontend
/*
{
  "title": "Captain Underpants",
  "description": "Rad Comix",
  "status": "Stinky"
}
*/

// endpoint for books to create a new Book entry to put into the BookData database
app.get('/books', postBooks);

// `:id` is telling the endpoint that whatever's in this spot is the _id of the book
// it declares a variable into the URL with the _id property of the cat
app.delete('/books:id', deleteBooks);

// post
async function postBooks(req,res,next)
{
  // req.body() is how we send data to from the frontend to our backend
  console.log(req.body);

  try
  {
    // Model.create() a `Book` item from the query from the client to put into database
    let createdBook = await Book.create(req.body);
    res.status(200).send('Data is coming');
  }
  catch (err)
  {
    next(err);
  }
}

// delete
async function deleteBooks(req,res,next)
{
  // log the params (`id` in this case) from the URL the client passed to backend
  console.log(req.params.id)
  try
  {
    // use .findByIdAndDelete() to delete an entry in DB
    await Book.findByIdAndDelete(req.params.id);



    // resolution, so that the query isn't 'spinning' forever
    res.status(200).send('Deleted book');
  }
  catch(err)
  {
    next(err)
  }
}

```

``` JavaScript
import React from 'react';
/* front-end*/


componentDidMount()
{
  this.getBooks();
  
}
// make a request to make a new book

handleBookSubmit = e =>
{
  e.preventDefault();

  let book = 
  {
    name: e.target.title.value,
    description: e.target.description.value,
    status: e.target.status.value
    // for checkbox: e.target.checkbox.checked
  }
  this.postBook(book);
}

postBook = async book =>
{
  try
  {
    // make a url to make a request to our backend
    let url = `${SERVER}/books`;

    // pass in the URL and the object we want to add to our books database
    let createdBook = await axios.post(url, book);


    // in the POST backend function, we create the book and then return it back to this front-end

    // log the book that the backend created
    console.log(createdBook.data);

    // update the state, so we can render the updated book

    this.setState({
      // use spread to make a true, 'deep' copy of the books array, so we actually can update our stuff
      books: [...this.state.books, createdBook.data], 
    });
  }
  catch (err)
  {
    console.log('we have an error: ', err.response.data);
  }
}

// pass id of book into deleteBook
// make request using axios to get the book to delete
// pass this deleteBook method down to Books.js and then further down to Book.js
// render a <Button> to invoke the deleteBook method that lives in App.js in each <Book> 
deleteBook = async id =>
{
  try
  {
    // url is server url, then /cats endpoint, then id is from the parameter
    let url = `${SERVER}/cats/${id}`;
    await axios.delete(id);

    // .filter(): for every book in the books array in state, add them to the `updatedBooks` array
    let updatedBooks = this.state.boosk.filter( book => book._id !== id);

    // set the updated array (sans the deleted book) into state
    this.setState({
      books: updatedBooks
    });
  }
  catch(err)
  {
    console.log('we have an error: ', err.response.data);
  }
}


// make a form for user to input properties of each book (title, description, status)

```
