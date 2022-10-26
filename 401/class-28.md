# Component Lifecycle / `useEffect` Hook

## [effects hook](https://reactjs.org/docs/hooks-effect.html){:target="_blank"}

**1. What purpose does `useEffect` serve in a function component compared to its counterpart(s) in class components?**

`useEffect` is similar to `componentDidMount` and `componentDidUpdate` where it can run code when a component is loaded or run whenever a component has a change that it's subscribed to. `useEffect` also has the functionality of `componentWillUnmount`.

**2. When using the useEffect Hook:**

  1. What does `useEffect` do?
    - `useEffect` is a function that takes a callback to run when a mutation, (a change to props in state), occurs.
  2. Why is `useEffect` called inside a component?
    - We call `useEffect` inside a component, so that we can access the `state` or `props` variable directly from the `effect`, without the need for external APIs.

**3. Explain the importance of properly implementing effects with Cleanup**

`Cleanup` is important because it allows us to prevent memory leaks. React cleanup will allow us to clean up effects from previous renders before running effects, again.

## Things I Want To Know More About

- I would like to know the conventions and best-practices on implementing useEffect and cleanup.

## In-class notes

``` JavaScript
/* regular useEffect */
// will run whenever ANY value updates
useEffect(() => { 
  console.log('I run whenever any value is updated)';
  })
// we don't want to change state in useEffect, because it may run recursively,forever
```

``` JavaScript
/* useEffect with empty array*/
// the same as `componentDidMount`
// will only run after a component is loaded
useEffect(() => { 
  console.log('I run only once');}, [])
```

``` JavaScript
/* useEffect with value in array*/

// like `componentDidUpdate()` => subscribe to a state or props change-event
let [url, setUrl] = useState('http://localhost');

useEffect(()=> {
  console.log('I only run when "url" is updated');
}, [url]);
```

``` JavaScript
/* useEffect with cleanUp*/
function cleanUp(){
  deleteToken();
  signOut();
}
// cleanUp occurs, (automatically), when the component un-mounts
useEffect(() => cleanUp, []);
```

[Previous Reading](./class-27.md)

[Next Reading](./class-29.md)
