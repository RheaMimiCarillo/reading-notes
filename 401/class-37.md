# Redux - Combined Reducers

## [Multiple Reducers Example](https://www.youtube.com/watch?v=gBER4Or86hE){:target="_blank"}

**1. Why create multiple reducers?**

To simplify the maintenance of complex reducers. One giant reducer can be a pain to maintain.

**2. How would you combine multiple reducers?**

We can pull in `combineReducers` from redux to create an instance of combineReducers and specify which reducer to use in the combineReducer's initial state. The actual initial state will like in each individual reducer's block of code.

**3. How will you manage state as an immutable object?  why?**

We can manage state as an immutable object by returning a brand-new state instance from the reducer, instead of mutating the original state object. We will destructure the original state and only overwrite our action's target (`{...state, newThing: action.payload}`).

## [Redux Docs: Using Combined Reducers](https://redux.js.org/recipes/structuring-reducers/using-combinereducers/){:target="_blank"}

**1. `combineReducers` is a utility function to simplify the most common use case when writing _______ _________ .**

when writing `Redux reducers`.

**2. Explain how `combineReducers` assembles the new state tree.**

"In order to assemble the new state tree, `combineReducers` will call each slice reducer with its current slice of state and the current action, giving the slice reducer a chance to respond and update its slice of state if needed. ""

**3. How would you define initial state in an app using `combineReducers`?**

You could define the initial state in the root reducer.

## [Redux Docs: Combined Reducer Syntax](https://redux.js.org/api/combinereducers/){:target="_blank"}

**1. Why will you want to split your reducing functions as your app becomes more complex?**

As the app gets more complex, having more reducing functions allows for more straight forward logical division between reducers. 

**2. The _______________ helper function turns an object whose values are different reducing functions into a single reducing function you can pass to __________.**

The `combineReducers` helper function turns an object whose values are different reducing functions into a single reducing function you can pass to `createStore`.

**3. What is a popular convention when naming reducers?**

"A popular convention is to name reducers after the state slices they manage."

## Things I Want To Know More About

- I'd like to know more about the ES6 property shorthand notation and how it works.

[Previous Reading](./class-36.md)

[Next Reading](./class-38.md)
