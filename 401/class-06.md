# Authentication

## [Securing Passwords](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)

**1. Explain to a non-technical friend how you would safely hash and store a password.**

We can take a regular password and pass it into a machine that pops out our password in a more obscure way.

**2. What is Bcrypt?**

Bcrypt is an `adaptive hash function` that allows devs to pick how fast or slow they want a hash function to be. It makes brute force attacks slower by making the attacks take exponentially longer to calculate.

**3. Why might you use something like Bcrypt?**

You might use something like Bcrypt if you're programming a website where you want to store user login info.

## [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication)

**1. What is Basic Authentication?**

Basic Auth is an HTTP thing where authorization credentials are requested by sending and ID and Password joined by a colon.

**2. What properties are necessary in the header of a Basic Auth request?**

We need a `username` : and a `password`.

**3. How are `username:password` in Basic Auth encoded?**

They are encoded in Base64 and aren't encrypted or hashed.

## [OWASP auth cheatsheet](https://www.owasp.org/index.php/Authentication_Cheat_Sheet)

**1. Define the authentication process to a non-technical recruiter.**

Authentication is the process where we can determine if a user is allowed to do the thing they are requesting to do.

**2. How should your error messaging respond (both HTTP and HTML)? Why?**

They should respond in a a generic manner, so that an attacker can't get a hint for what to crack.

## Bookmark and Review

- [bcrypt docs](https://www.npmjs.com/package/bcrypt)

## Things I Want To Know More About

- Where is authentication not preferred to be implemented when developing an app?

[Previous Reading](./class-05.md)

[Next Reading](./class-07.md)
