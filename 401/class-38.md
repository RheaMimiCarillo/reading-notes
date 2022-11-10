# Redux - Asynchronous Actions

## [async actions](https://redux.js.org/advanced/asyncactions){:target="_blank"}

**1. Why use Redux middleware?**

We don't want a reducer to do `side effects` so we use middleware (that can do anything), so the reducer doesn't have to.

**2. Consider the Redux Async Data Flow Diagram.  Describe the flow in your own words.**

A user hits a button, which sets off a dispatch to a middleware that makes an API request, which triggers a real dispatch action for the reducer, which returns a brand-new state.S

**3. How are we accommodating async in our Redux app?**

We're using Thunk middleware to reuse logic without having to know which redux store we're using beforehand.

## [thunk middleware](https://github.com/reduxjs/redux-thunk){:target="_blank"}

**1. Why would you need `redux-thunk` middleware?**

We use thunk, so we can do side-effects on a dispatch action outside of a reducer.

**2. Redux Thunk middleware allows you to write action creators that return a ________ instead of an action.**

`function`

**3. Describe how any return value from the inner thunk function will be made available.**

Return from inner functions will be available as return values of `dispatch` itself

## Additional Questions

**1. Looking ahead at this module’s [course schedule](https://codefellows.github.io/code-401-javascript-guide/curriculum/#module-7), What do you look forward to learning?**

**2. What are your learning goals after reading and reviewing the class [README](https://codefellows.github.io/code-401-javascript-guide/curriculum/)?**

## Things I Want To Know More About

-

## In-class notes

- `Thunk`: the purpose of this is to re-dispatch `actions` for middleware
  - We're assuming the action is an async function

- step through:

1. categories.jsx mount( useeffect)
2. dispatch: hey redux, can you getCategories?
3. redux: oh yeah, let's see... you sent a function, probably an async one, so thunk is going to have you wait
4. thunk: oh, you've got an async function? we're making an API call to get data
5. okay, we've got the api data, let's set it to state, then re-dispatch the Action, but with a proper object, this time

The `thunk` function can get around the object/function check by currying three times

``` JavaScript
const thunk = (store) => (next) => (action)=>
{
  // so, the thunk does get hit twice, but the second time around, it sees that it's just an object, so it lets the action pass by
  return typeof(action) === 'function'
    ? action(store.dispatch, store,getState)
    : next(action)
}
```

## Virtual Whiteboard

[Previous Reading](./class-37.md)

[Next Reading](./class-39.md)
