# State and Props

## [React lifecycle](https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093)

**1. Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?**

'Render" is called before componentDidMount.

**2. What is the very first thing to happen in the lifecycle of React?**

Initialization is the first thing to happen in a lifecycle of React.

**3. Put the following things in the order that they happen: `componentDidMount`, `render`, `constructor`, `componentWillUnmount`, `React Updates`?**

Constructor
componentWillUnmount
render
componentDidMount
React Updates

**4. What does `componentDidMount` do?**

It is called immediately after componentWillMount and can update the state with an API response and set subscriptions.

## [React State Vs Props](https://www.youtube.com/watch?v%3DIYvD9oBCuJI)

**1. What types of things can you pass in the props?**

We can pass data that we want to pass in externally to props, like arguments to a constructor, for example.

**2. What is the big difference between props and state?**

Props are like the `arguments` of a component in React. We pass props into a component, similarly to how we do with functions.
State, on the other hand, is stored inside a component. State can continually update and rerender. State can only be accessed and modified directly inside its component.

**3. When do we re-render our application?**

Whenever the state data changes, we re-render.

**4. What are some examples of things that we could store in state?**

We could store a number counter or the data for the moving hands of a clock, or the value of randomly generated colors in a rainbow component.

## Bookmark and Review

- [React Docs - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [React Docs - handling events](https://reactjs.org/docs/handling-events.html)
- [React Tutorial through ‘Developer Tools’](https://reactjs.org/tutorial/tutorial.html)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [Bootstrap Cheatsheet](https://getbootstrap.com/docs/5.0/examples/cheatsheet/)
- [Bootstrap Shuffle - a class “sandbox”](https://bootstrapshuffle.com/classes)
- [NetlifyNetlify](https://www.netlify.com/)

## Things I Want To Know More About

- What are data that neither `state` nor `props` is appropriate to handle?

[Previous Reading](./class-01.md)

[Next Reading](./class-03.md)
