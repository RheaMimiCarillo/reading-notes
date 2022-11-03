# `<Login />` and `<Auth />`

## [What is Role Based Access Control (RBAC)?](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more){:target="_blank"}

**1. What is Role Based Access Control (RBAC)?**

RBAC is when an organization has roles and each role has certain permissions assigned to them. Members of the organization can access to different bits of a network appropriate to their assigned roles.

**2. Share some an example of RBAC including all possible CRUD operations and correlating roles.**

- Admin: GET, POST, PUT, DELETE
- Editor: GET, PUT
- Author: GET, POST
- User: GET

**3. What are the Benefits of RBAC?**

1. Reduce the time spent on administrative tasks
2. Easier time complying to government regulations

 ***Compare and Contrast  the following two Libraries and the following questions.  Yes, they are similarly named.***

## [react-cookie library](https://www.npmjs.com/package/react-cookie){:target="_blank"}

## [react-cookies component](https://www.npmjs.com/package/react-cookies){:target="_blank"}

**1. Describe some `react-cookie` features.**

**Access and modify cookies using React hooks.**

- `get(name, [options])`: Get a cookie value
- `getAll([options])`: Get all cookies
- `set(name, value, [options])`: Set a cookie value
- `remove(name, [options])`: Remove a cookie

**2. Describe some `react-cookies` features.**

**Load and save cookies with React.**

- `.load(name, [doNotParse])`: Load the cookie value.
- `.loadAll()`: Load all available cookies.
- `.select([regex])`: Find all the cookies with a name that match the regex.
- `.save(name, value, [options])`: Set a cookie.
- `.remove(name, [options])`: Remove a cookie.
- `.plugToRequest(req, res): unplug()`: Load the user cookies so you can do server-rendering and match the same result. Also send back to the user the new cookies.
- `.setRawCookie(cookies)`: Load the user cookies so you can do server-rendering and match the same result.

**3. Which library would you prefer would you prefer?  Why?**.

I'm not sure. `react-cookies` seems to have more flexibility about what you can *do* with cookies, but I don't have a solid enough baseline knowledge of working with cookies to come to an informed decision.

## Additional Questions

**1. Looking ahead at this module’s [course schedule](https://codefellows.github.io/code-401-javascript-guide/curriculum/#module-7), What do you look forward to learning?**

I want to know how to use these cookies! Can I replace local storage with cookies?

**2. What are your learning goals after reading and reviewing the class [README](https://codefellows.github.io/code-401-javascript-guide/curriculum/)?**

My learning goal today is to learn about cookies.

## Things I Want To Know More About

- If I were a computer virus, what would a `cookie` taste like?

[Previous Reading](./class-32.md)

[Next Reading](./class-34.md)
