# Application State with Redux

## [Dan Abramov Redux Tutorials](https://egghead.io/courses/getting-started-with-redux){:target="_blank"}

**1. What is the first principle of Redux?**

Whether your app is a really simple or is a complex one, your app will be represented by a single JS object.
s
**2. What is a store and what do we use our reducers for within that store?**

The store is where we hold the state of our application and we use our reducers to dispatch actions to our store to modify it.

**3. Name three Redux store methods given to us by createStore and describe their use.**

1. getState()
Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.
2. dispatch(action)
Dispatches an action. This is the only way to trigger a state change.
3. subscribe(listener)
Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.

**4. Explain to a non-technical recruiter what `combineReducers()` does and why it is useful.**

`combineReducers()` allows devs to combine many reducing functions into one. It simplifies the organizational aspects of managing state.

## Bookmark and Review

- [worlds easiest guide to redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6){:target="_blank"}

- [testing reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1){:target="_blank"}

- [Redux Docs](https://redux.js.org/){:target="_blank"}

## Additional Questions

**1. Looking ahead at this module’s [course schedule](https://codefellows.github.io/code-401-javascript-guide/curriculum/#module-7), What do you look forward to learning?**

I'm looking forward to getting insight on redux from the instructor during lecture. It feels a bit overwhelming to just read docs.

**2. What are your learning goals after reading and reviewing the class [README](https://codefellows.github.io/code-401-javascript-guide/curriculum/)?**

My learning goal for this lesson is to know the differences in capability Redux and React's own useReducer().

## Things I Want To Know More About

- Is there any penalty to performance from using Redux over managing state the way we've been doing?
- Would we mix regular state management and Redux?

[Previous Reading](./class-35.md)

[Next Reading](./class-37.md)
