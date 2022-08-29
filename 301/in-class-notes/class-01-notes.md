# Notes

**hoisting:**
allows functions, variables, and classes to be used before the execution of that line of code they're declared on

therefore, functions

`use strict` constrains the use of the `this` keyword

## code challenges

**npm test:**
to test if my code challenge answer is correct

  *note:* ensure I'm in the 'javascript' folder'

``` JavaScript
// Array.prototype.forEach()

let arr = [1,2,3];
let newArr = [];


// takes in an array and adds 1 to each index in in the array
// valueIPassIn is the value of each index in an array, not the actual array
// valueIPassIn could be named anything, and isn't declared beforehand
let callback = (valueIPassIn) => {
  newArr.push(valueIPassIn + 1);
}

arr.forEach(callback);

console.log(newArr);

// if I only need the function once, use arrow function:

// can't use valueIPassIn++ in this case
arr.forEach(valueIPassIn => newArr.push(valueIPassIn + 1));
```

**forEach()**:
built-in array method to iterate through each item in an array

callback function: function passed as an argument to another function

## React

allows us to make our HTML DRYer
many pages use a lot of the same elements, and in vanilla HTML, we'd have to re-write many of the same elements across each page

in React,

can delete these files:
app.test.js
logo.svg
reportWebVitals
test

NOTE: use kabob-case in React
Capitalization has different implications in React

two types of components:

1. functional
2. class

in 301, we use class components

in 401, we'll use functional ones

### Three things vital to every 301 React project

``` JavaScript
// not using 'use strict'; in React
import React from 'react';
// import other css and js files

// App would be the name of whatever we'd want to call our class 
class App extends React.Component 
{
  render()
  {
    return
    (
      // where we write what looks like HTML
      // called 'jsx': can write JS and HTML in jsx
    )
    
  }
}

export default App;;
```

Example:

``` JavaScript
import React from 'react':

class App extends React.Component 
{
  render()
  {
    // can typically only use code written on one line
    // so we trick it with parenthesis
    // React will only return things in a single parent element
    // in other words, can't have elements nested 3 levels deep, normally
    // so we have yet another hack called: 'frag' <>
    // <>: is an undeclared/unnamed tag to wrap everything in
    return
    (
      <>
        <header>
          <h1>Hey</h1>
        </header>

        <body>

        </body>
      </>
    ) 
  }
}

/* to import js components into Main class: 

  insert an element from another file
  import at top of js react page
  then declare the name of the tag in the return section
  ex: <Header/> (uses old HTML conventions for closing tags)

*/

/* how to give components different data 

  // pass data to the <Person> components
  // configure the <Person> components to use 'props'
  
  <Person name="pooper"> // React assigns <Person> a key/value pair of {name: "pooper"}
  <Person name="peeper">

  to use in return() area:

  this.proper.name
  
*/


export default App;;
```

CSS: to import css to react, use `import './App.css` 
Note: not use a CSS reset

## DEPLOYING APP

use netlify
link to my github
link my repo from github to netlify
all I'd have to do at this point is keep pushing to GH, and netlify will automatically update

## Lab: 01  gallery-of-horn

**make horned-beast component**
- reusable element to make lots of horned beasts
- the intention is to make our React code DRYer
  - like a template

- create a webapp

- create 4 components

- pass props into web app

- header, footer, and main declared in their own .js files

***note***
can't just use LiveServer the old way to see code

to see live server is npm use command `npm start` in the terminal

1. deploy early
2. check console to make sure there are no errors before deploying
3. 15 min rule
4. ask question even when I can't articulate what I want to ask
5. three assignments:
  a. Code Challenge (1hr)
  b. Lab 01
  c. Retro 
    - use what I have in my lab submission as the template for the Retro
