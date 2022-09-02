# Authentication

## [What is OAuth](https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html)

**1. What is OAuth?**

OAuth is a framework that authorizes secure logins.

**2. Give an example of what using OAuth would look like.**

An example would be logging into your Google account on a new machine, and a 2FA messages pops up on your existing machine to log you in.

**3. How does OAuth work? What are the steps that it takes to authenticate the user?**

A website connects to another website, uses OAuth to verify the user, generates and provides a request token for authentication, a user inputs an access token into the first website, which hands it to the second website, and the user gets access to the second website.

**4. What is OpenID?**

OpenID is a framework for human authentication. It became an authentication layer for OAuth.

## [Authorization and Authentication flows](https://auth0.com/docs/flows)

**1. What is the difference between authorization and authentication?**

Authentication verifies who you are and authorization determines if you have access rights.

**2. What is Authorization Code Flow?**

It's a thing that exchanges an Authorization Code for a token.

**3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?**

It's a mechanism that generates a code challenge and verify it to issue an access token.

**4. What is Implicit Flow with Form Post?**


**5. What is Client Credentials Flow?**


**6. What is Device Authorization Flow?**


**7. What is Resource Owner Password Flow?**


## Bookmark and Review

- [Auth0 for single page apps](https://auth0.com/docs/libraries/auth0-react)

## Things I Want To Know More About

-

[Previous Reading](./class-14.md)

[Next Reading](../401/class-01.md)
