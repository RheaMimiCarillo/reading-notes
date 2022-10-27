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
- How appropriate is useReducer for API calls? 

## In-class notes

- Reducer: a function that takes in 'state' and an 'action' as parameters, and returns a brand-new state object
  - State - values that we care about (in object-literal format)
  - Action - a string and a payload

``` JavaScript

```

``` JavaScript
// reducer template:
// reducer = (state, action) => new State;

const initialState = {
  message: [],
  user: [],
}

const addMessage = messageText =>
{
  return {
    type: 'ADD_MESSAGE',
    payload: messageText,
  }
}

function reducer(state, action) 
{
  if(action.type == 'ADD_MESSAGE'){
    return{
      // use the current values, as well as the ones from the payload
      messages: [...state.messages, action.payload],
      users: [...state.users],
    }
  else
  {
    // return the initial state, unchanged
    return state;
  }
  }

  // new state to return
  return{

  }
}
const updatedState = reducer(initialState, addMessage('Hello'));

console.log('the state we started with(still in state) and the processed state, using the reducer', initialState, updatedState);


```

- useReducer Hook

  - useReducer takes in an initial state (object), as well as a reducer function
  - the `action` is sort of like a request to a server, in that we attach the `type` of request/action we want to run, as well as a body/`payload`
  - we'd want a reduce for each function a component might have

``` JavaScript
  function App() {

    const initialState = {
      message: [],
      user: [],
    }

    let [state, dispatch ] = useReducer(reducer, initialState);

    return(
      <ul>
        {/* return list of items */}
      </ul>
    )
  }
```

[Previous Reading](./class-28.md)

[Next Reading](./class-31.md)
