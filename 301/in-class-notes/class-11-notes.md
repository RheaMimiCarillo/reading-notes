# Databases

Relational Databases (What we won't be using(yay!))

## ODM: Object Document Mapping

It gives our NoSQL database some structure: 'If you wanna push some data to our database, you have to follow these rules'.

## Mongoose: an ODM

- Schema: rules in relational databases.

- Model: what mongoose uses to do stuff. It's nice, because we can just use 
JavaScript to interact with our database.


## MongoAtlas

- the GUI that lets us interact with Mongo

**install Mongoose**

- `npm i mongoose`
- in server.js: `const mongoose = require('mongoose');`
- bring in a schema/models

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
