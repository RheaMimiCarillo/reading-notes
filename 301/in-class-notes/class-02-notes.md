shorthand for an if statement:

``` JavaScript
if (condition)
{
    // if true do this
}
else 
{
    // do this
}




// terneraries
// WTF is the acronym to remember
What
True
False

// What ? true : fals;e

```

**why are react components capitalized?**

Be cause they're components, duh. 
But also, because componenets are Classes, and classes are capitalized. 


to add classes to elements in react components:
write `className` instead of `class`
because class is a reserved word in JS

Props:
props are usually written without spaces:
ex: name="peepee" vs name = "peepee"
    - props is technically an 'object' that looks like HTML

``` JavaScript

import React from 'react';

// everything we import into index.js will get inherited to all other children components


// bootstrap for is different than vanilla bootstrap
// react bootstrap is a framework with pre-written, built-in components for React

// run in terminal to add to project
`npm install react-bootstrap bootstrap`

// to add css/link to project:
// import css before local css
import 'bootstrap/dist/css/bootstrap.min.css';


// import individual components we want to use:
// look for components at react-bootstrap.github.io/components
import Button from 'react-bootstrap/Button';

// import many components at once:
import {}


```
steps

run code in terminal to load react bootstrap into project files

import individual boostrap components in index.js

use the thing in the render or whereever
