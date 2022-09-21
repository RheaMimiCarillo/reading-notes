# Express REST API

## [Review: ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

**1. Classes are a template for creating ____.**

'Objects'

**2. Can a class declaration be hoisted?**

Class declaration cannot be hoisted. Classes must be declared before an instance of that class can be instantiated.

**3. How would you describe a constructor and contextual “this” to a non-technical friend?**

A 'constructor' is like a template for a thing, with nouns, an adjectives describing that thing as 'properties' of that thing. For example, a car is a thing, and a car 'constructor' may have properties of 'make', 'model', and 'color'.

## [Using Express Routing](https://expressjs.com/en/guide/routing.html)

**1. Within Express, what does routing refer to?**

Within Express, routing refers to the server responding to requests to the server's endpoints.

**2. What is the difference between a route path and a route method?**

A route 'method' are functions, like 'get', 'post', and such.
A route 'path' is the part of the URL that directs the client's request to that section of code.

**3. When is it appropriate to add `next` as a parameter to a route handler and what must you do if `next` has been passed to your middleware as a parameter?**

The `next` parameter comes into play when we want a route to handle more than one function, as middleware. We pass `next`, to just to the next function.

## [Express Routing](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)

**1. What is an Express Router?**

Express Router is a class to create route handlers. It's useful, because it allows us to create more modular routes to handle various kinds of requests.

**2. By what mean do we initialize `express.Router()` in an express server?**

It means we create an instance of the express router class to use.

**3. What do we use route middleware for?**

We can use route middleware to perform processing or validation or more in the routing stack.

## Things I Want To Know More About

- Would there be cases where we'd target the same endpoint, but handle things differently for different cases?

[Previous Reading](./class-02.md)

[Next Reading](./class-04.md)
