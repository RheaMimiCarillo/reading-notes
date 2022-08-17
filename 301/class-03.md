# Passing Functions as Props

## [React Docs - lists and keys](https://reactjs.org/docs/lists-and-keys.html)

**1. What does .map() return?**

`.map()` returns a new array.

**2. If I want to loop through an array and display each value in JSX, how do I do that in React??**

We can use the `.map()` function to return a list of elements.

**3. Each list item needs a unique ____.?**

Each list item needs a unique **key**.

**4. What is the purpose of a key?**

A key is to differentiate each list item from each other.

## [The Spread Operator](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)

**1. What is the spread operator??**

The spread operator is "speads" each value of an array into separate arguments.

**2. List 4 things that the spread operator can do.?**

1. Adding a state in React
2. Using an array as arguments
3. Combining objects
4. Concatenating or combining arrays

**3. Give an example of using the spread operator to combine two arrays.?**

``` JavaScript
const thisArray = ['Are', 'you', 'feeling', 'it'];
const thatArray = ['Mr.', 'Krabbs', '?']
const thisThatArray = [...thisArray,...thatArray];
```

**4. Give an example of using the spread operator to add a new item to an array.**

``` JavaScript
const meep = 'meep';
const meepMeep = ['meep', ...meep];
```

**5. Give an example of using the spread operator to combine two objects into one.**

``` JavaScript

const thingOne = {red: 'fish'};
const thingTwo = {blue: 'fish'};
const thingThree = {...thingOne,...thingTwo};

```

## [How to Pass Functions Between Components](https://www.youtube.com/watch?v%3Dc05OL7XbwXU)

**1. In the video, what is the first step that the developer does to pass functions between components?**

The developer creates a function.

**2. In your own words, what does the increment function do?**

The increment function traverses the `people` array and increments the count property in the `ppl` array, then updates the state with the `ppl' array.

**3. How can you pass a method from a parent component into a child component?**

We can pass a method as a prop into children components.

**4. How does the child component invoke a method that was passed to it from a parent component?**

We can invoke the method with `this.props.<method name>`.

## Bookmark and Review

- [React Tutorial through 'Declaring a Winnder'](https://reactjs.org/tutorial/tutorial.html)
- [React Docs - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

## Things I Want To Know More About

- I wonder how I could've React-ified my 201 final project?

[Previous Reading](./class-02.md)

[Next Reading](./class-04.md)
