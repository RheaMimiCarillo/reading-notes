# Reading: `useState()` Hook

## [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html#motivation)

**1. What was the motivation for introducing Hooks?**

To facilitate the reuse of stateful logic, the easier atomization of components, and more easily allowing the use of functional components, whilst retaining the React's core features.

**2. What changes are important regarding implementing Hooks versus Component Classes?**

1. Hooks allow you to reuse stateful logic without changing your component hierarchy.
2. Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)
3. Hooks let you use more of React’s features without classes

**3. Hooks allow you to reuse stateful logic without changing _________ _________.**

... without changing your component hierarchy.

## [hooks api](https://reactjs.org/docs/hooks-overview.html){:target="_blank"}

**1. Name two rules imposed by React Hook usage.**

  1. Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
  2. Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

**2. How would you identify a custom Hook and why might you create one?**

The `use` keyword

## [the state hook](https://reactjs.org/docs/hooks-state.html){:target="_blank"}

**1. What is a Hook?**

A hook is a React feature that lets us use React features without writing a class.

**2. When would I use the `useState` Hook?**

You'd use `useState` to add React state to a functional component.

**3. If you were to add React state to a function component by declaring a state variable:**

  - What does calling `useState` do?
    It declares a `state variable`, so we can `preserve` values between function calls.

  - What do we pass to `useState` as an argument?
    - We pass the initial state to `useState`.

  - What does `useState` return?
    - `useState` returns a pair of values: the current state and the function that updates state.

## Bookmark and Review

- [hooks api reference](https://reactjs.org/docs/hooks-reference.html){:target="_blank"}

## Things I Want To Know More About

- I'd like to know more about the useEffect hook I've been seeing around.

[Previous Reading](./class-26.md)

[Next Reading](./class-28.md)
