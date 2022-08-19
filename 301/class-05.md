# Putting it all together

## [React Docs - Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

**1. What is the `single responsibility principle` and how does it apply to components??**

Components should be limited to a single 'thing'.

**2. What does it mean to build a ‘static’ version of your application?**

It means to build out a skeleton that renders your page, without worrying about the functionality at that phase.

**3. Once you have a static application, what do you need to add?**

We'd need to add the functionality of the page to make it interactive.

**4. What are the three questions you can ask to determine if something is state?**

1. Is it passed in from a parent via props? If so, it probably isn’t state.

2. Does it remain unchanged over time? If so, it probably isn’t state.

3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

**5. How can you identify where state needs to live?**

- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

## [Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)

**1. What is a “higher-order function”?**

It's a function that accepts other functions as parameters and may return a function.

**2. Explore the `greaterThan` function as defined in the reading. In your own words, what is line 2 of this function doing?**

Line 2 is 

**3. Explain how either `map` or `reduce` operates, with regards to higher-order functions.?**
`map` accepts an array as an argument, and uses a callback function to traverse through each index, do some code with each index, and return a new array.

## Things I Want To Know More About

- I want to know more about how JavaScript has doing these things in the background without us knowing about it in 201.

[Previous Reading](./class-04.md)

[Next Reading](./class-06.md)
