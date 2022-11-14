# React Native

## [getting started with react native](https://facebook.github.io/react-native/docs/getting-started){:target="_blank"}

**1. Name three Core Components of React Native and describe what they do.**

1. `<View>` - A container that supports layout with flexbox, style, some touch handling, and accessibility controls

2. `<Text>` - Displays, styles, and nests strings of text and even handles touch events

3. `<Image>` - Displays different types of images

**2. What problem does React Native solve (why call it native)?**

React Native allows React developers to create mobile apps using JavaScript, as opposed to Java, Kotlin, Swift, or Objective-C.

**3. What are the building blocks of a React Native app?  How does that compare to a React app?**

The **view** is the building block of React Native apps. They sort of seem like interactive <Card-like> components that can have content nested inside of them.

## [expo](https://expo.io/){:target="_blank"}

**1. What solution does expo provide?**

`Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.`

**2. Expo tries to manage as much of the complexity of building apps as possible, which is why we call it the ____________ workflow.**

...which is why we call it the `managed` workflow;

**3. What is the difference between React Native and Expo?**

Writing code in Expo is writing React Native code. A difference is that Expo allows devs to open project on their phone whilst working on them, without th need for XCode or Android Studio.

## [expo snack](https://snack.expo.io/){:target="_blank"}

**1. Checkout this tool. What does snack allow you to do?**

This tool allows devs to write code for mobile apps and test the code on a phone by going to the development page's URL.

## [ejecting](https://docs.expo.io/versions/latest/expokit/eject){:target="_blank"}

**1. What does "eject" mean within the context of Expo?**

To "eject" is to port an Expo project into code that can be run in Xcode and Android Studio.

**2. When should you not eject?**

1. You only want to deploy your app to the app stores
2. You're unfamiliar with the Expo environment

**3. Why might you choose to eject?**

You require a `Native` module that Expo doesn't support.

## Tutorial

[react native basics](https://facebook.github.io/react-native/docs/tutorial){:target="_blank"}

## Bookmark and Review

- [react native](https://facebook.github.io/react-native/){:target="_blank"}

## Additional Questions

**1. Looking ahead at this module’s [course schedule](https://codefellows.github.io/code-401-javascript-guide/curriculum/#module-7), What do you look forward to learning?**

I'm looking forward to gain familiarity with developing for the mobile environment and gaining insight on the associated special conditions associated with mobile needs and conventions.

**2. What are your learning goals after reading and reviewing the class [README](https://codefellows.github.io/code-401-javascript-guide/curriculum/)?**

My learning goal is to learn the tradeoff between developing with Expo, as opposed to developing in a more Native language.

## Things I Want To Know More About

- I would like to know more about Kotlin and Objective-C.

## In-class notes

### Warmup: Binary Search of an Array

Given a sorted array of integers, and a search key write a function to search the array for the search key using binary search. Return a boolean.

``` JavaScript

/* Strategy: 

  Binary Search is like what we do with a BST
  This binary search will look a lot like the merge sort we've done

  We'll use the 'divide an conquer` strategy

  1. calculate highNum and lowNum of array
  2. calculate midpoint of array from start and end
  3. split array into halves
  4. check which array's contains our search key using the highNum/lowNum from the array
    - and then only search that array
  5. keep splitting until we can't split anymore
    - can be a max of 3/4 splits, depending on the size of the input array
  6. return true, if found, split (if split-able),
  7. if not split-able, return false
*/



```

### React Native vs Web Differences

APIs: There are a whole different set of built-in APIs for Web and Mobile environments:

| **Web**                  | **App**                      |
|----------------------|--------------------------|
| DOM                  | Camera                   |
| Events               | Contacts                 |
| localStorage         | Accelerometers/gyroscope |
| XmlHTTPRequestObject | Biometric auth           |

### Similarities

|                              | **Web**                                           | **App**                                    |
|------------------------------|-----------------------------------------------|----------------------------------------|
| Writing in JS                | Compiles to Vanilla HTML, CSS, and JavaScript | Compiles to either Objective-C or Java |
| Development environment      | Access to Node.js and Node Modules            | Access to Node.js and Node Modules     |
| Can't use `create-react-app` | Uses `Expo`                                   | Uses `Expo`                            |


### Development Tools

1) Android Studio - IDE and platform tools for Android
  - can run on multiple Operating Systems

2) Xcode - IDE and platform tools for iOS and apple products
  - can only run on MacOS

3) Phones - `expo` lets us run our development built on our phones
  - install the `Expo go` app

[Previous Reading](./class-39.md)

[Next Reading](./class-43.md)
