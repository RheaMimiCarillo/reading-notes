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

## In-class Notes

- The abstract goal of Redux is to have a truly global, UI-agnostic application state and move closer to the 'single-responsibility-principle'

- reducer in a nutshell: function that return a brand-new-state

``` js
/* basic, vanilla Redux example */
'use strict';

// node way of importing redux
const { createStore } = require('redux');

// creating a store and using our initial state
const initialState = {
  candidates: [
    { name: 'Rhea', votes: 0 },
    { name: 'Bernie', votes: 0 },
    { name: 'Santa', votes: 0 }
  ],
  totalVotes: 0
};

// Vote action
const vote = (payload) => {
  return {
    type: 'VOTE',
    payload: payload // 'Rhea', 'Bernie', 'Santa'
  };
};

// the function that returns a brand `new` state
// when the reducer fires off, it gets two things:
// 1. the current `state`
// 2. and the action
const voteReducer = (state = initialState, action) => {
  // look at the `action.type` to see what we want to do
  // in this case we want to 'VOTE'
  switch (action.type) {
    case 'VOTE':
      // find the candidate in the payuload
      return {
        // declare a new `candidates` thing that we'll make into the brand-new-state
        candidates: state.candidates.map((candidate) => {
          if (candidate.name === action.payload) {
            candidate.votes = candidate.votes + 1;
          }
          // return the brand-new-state
          return candidate;
        }),
        // increment votes
        // increment total votes
        totalVotes: state.totalVotes + 1
      };
    // return the current state if no relevant cases/candidates
    default:
      return state;
  }
  // we're performing the action on this value
  //action.payload
};

const store = createStore(voteReducer);

console.log('store after creating: ', store);

store.dispatch(vote('Rhea'));
store.dispatch(vote('Santa'));
store.dispatch(vote('Bernie'));

// store should be updated with Rhea +1 votes
console.log(store.getState());

```

``` jsx

```

### Installing Redux

`npm i` react react-redux

react-redux: gives us a `provider`

1. create reducer
2. use createReducer function


1. start with the store
  a. think of what initial state to store
  b. what actions to think about
  c. then make the reducer
2. import provider into top level
3. try to get a consumer to see the store data

test: import `store` into jest file
- dispatch a vote to the store
- test if the store updates

[Previous Reading](./class-35.md)

[Next Reading](./class-37.md)
