# Bearer Authorization

## [Intro to JWT](https://jwt.io/introduction/)

**1. What is a JSON Web Token (JWT)?**

JWT is an instance of the JWT open standard for transmitting data as a JSON object.

**2. When should we use JSON Web Tokens?**

For authorization and information exchange.

**3. Claims are expected in which structural component of a JWT?**

Claim are expected in the `payload`. The payload is typically has user data.


## [Are JWTs Secure?](https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure)

**1. If I get a JWT and I can decode the payload, how can we call that secure?**

If someone decodes the payload and changes something, they signature won't match anymore, so the receiver won't trust it.

**2. If sending a JWT, what must sender and receiver both know? Hint, it’s appended in the signature.**

`Hash(payload + secret)`.

**3. Explain how concatenated content and secret can be sent and received securely to a non-technical recruiter.**

The concatenated content plus secret can be securely received, because only the sender and receiver know the secret, so only they can calculate the what the secret is supposed to be.

## [JWTs Explained](https://www.youtube.com/watch?v%3D926mknSW9Lo)

**1. Why use JWT?**

- It's an open standard
- It can securely transfer information between two parties
- It's digitally signed, so it's verified and trusted

**2. JWT is Compact and self-contained. Describe how this is useful to a non-technical friend.**

JWT is compact and self-contained, which means that sending and receiving JWT is fast and that the JWT has everything inside of itself to do authorization, so we don't need to check an outside database to use JWT.

**3. What are the three components (the structure) of a JWT signature?**



## Bookmark and Review

- [npm jsonwebtoken docs](https://www.npmjs.com/package/jsonwebtoken)


## Things I Want To Know More About

- Are the signatures of JWT the product of a one-to-one function?

[Previous Reading](./class-06.md)

[Next Reading](./class-08.md)
