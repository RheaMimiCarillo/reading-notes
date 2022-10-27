# Advanced State with Reducers

## [useReducer hook](https://reactjs.org/docs/hooks-reference.html#usereducer){:target="_blank"}

**1. Name an alternative to the `useState` Hook.**

`useReducer`

**2. Why might the `useReducer` Hook**

`useReducer` might hook in cases where there is complex logic that requires multiple-sub values, or where one state relies on a previous one. `useReducer` allows us to optimize performance, because we can pass DOWN logic instead of being forced to do callbacks.

**3. What are two ways to set the initial state?**

1. pass initial state as the second argument
2. pass an `init` function as the third argument, to initialize the state from outside of the reducer

## [Ultimate Guide to useReducer](https://blog.logrocket.com/guide-to-react-usereducer-hook/){:target="_blank"}

**1. In terms of state, what does `useReducer` expect to receive as a parameter?**

a reducer

**2. What does `useReducer` return?**

`useReducer` returns an array that holds the current value of state, as well as a dispatch function

**3. Explain `dispatch` to a non-technical recruiter.**



## Things I Want To Know More About

- How similar is this reducer to the array reduce function that we know and love?

[Previous Reading](./class-28.md)

[Next Reading](./class-31.md)
