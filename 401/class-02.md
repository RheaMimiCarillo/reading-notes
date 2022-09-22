# Express, NPM, TDD, CI/CD

## [An introduction to NodeJS and Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

**1. Explain middleware, answer as though I were a non-technical recruiter.**

Middleware is anything that happens in between a request and a response that a user makes. For example, if enter 1 and 2 into a website and want it to add them together and see the result, the middleware would be the math that goes into the 1 and 2 getting added together before the user sees the final answer of 3.

**2. Express the most popular __ __ ____.**

HTTP REST Framework

**3. Express is “unopinionated.” What does that mean?**

It means that the framework doesn't push a 'correct' way to get things done, which allows developers to develop solutions that are only limited to their imagination.

**4. What is a module and why is modularity useful to us as developers?**
A module is a JavaScript library that we can import into our project to develop applications.

## [What is NPM?](https://docs.npmjs.com/getting-started/what-is-npm)

**1. What version of npm are you running on your machine?**

8.19.2

**2. What command would you type to install a library/package called ‘jshint’ into your node project?**

`npm i jshint`

## [What is TDD?](https://www.agilealliance.org/glossary/tdd/)

**1. Explain why tests are important. Please explain as though I were your non technical elder.**

Tests are important, so we can know and have confidence that all of the features we're programming are working as intended.

**2. What are three expected benefits of testing**

1. Teams stick together for longer
2. There's less effort during the final bits of a project
3. Projects have (subjectively) higher quality designs and technical quality, and may lead to higher team spirit

**3. Name at lest 2 individual pitfalls and at least 2 team pitfalls commonly encountered while writing tests.**

1. writing tests that are too large
2. only a few team members use TDD

## [CI/CD](https://www.youtube.com/watch?v%3DxSv_m3KhUO8)

**1. What are three benefits of Continuous Integration?**

1. faster development
2. less risky
3. devs get feedback sooner

**2. What is the difference between Continuous Delivery and Continuous Deployment?**

Continuous Delivery - complete delivery of the product to the customer

Continuous Deployment - only deployment of the product in customer environment

**3. Explain how GitHub fits into this process assuming the listener comes from a non-technical background**

Github has CI/CD directly integrated into their platform.

## Bookmark and Review

- [nodeJS docs](https://nodejs.org/en/docs/)
- [npm docs](https://docs.npmjs.com/)
- [express docs](https://expressjs.com/en/4x/api.html)
- [http status codes](https://www.restapitutorial.com/httpstatuscodes.html)
- [supertest](https://github.com/visionmedia/supertest)

## Things I Want To Know More About

- Why won't my tests run on github?

[Previous Reading](./class-01.md)

[Next Reading](./class-03.md)
