# API Integration

## [Review API Server Build](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/api-server/){:target=_blank}

**1. Explain the difference between a query string parameter and a path parameter.**

Path parameters show where to look and query string parameters might show what to look at.

**2. What would our API URL with a path id parameter be given the following information:**

  1. Domain: `http://our-site.com`
  2. `v3`
  3. model name: `stuff`
  4. id: `things`

It would go the to domain, use the v3 API, operate on the stuff model, and look for things.

**3. We have created a dynamic API with an "interface".  Describe how that interface works to a non-technical friend.**

You put in data you want to do something with, then pick which method to operate on, then hit GO!

## [Review Auth Server Build](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/auth-server/){:target=_blank}

**1. Describe how you would use middleware to implement basic and bearer auth.**

When a user initiates a CRUD request on our server, we route them to the authorization middleware and validate their credentials for permissions.

**2. Describe the handshake necessary to implement OAuth.**

When a user makes a request to our /oauth route, we send their credentials to a third-party and get back a success, or an error. If successful, we create or update a local user account in our database and return an auth token, as well as the user object.

**3. Describe how Role Based Access Control works to a non-technical friend.**

RBAC is like when you go into the art museum and try to take the paintings off the wall and they get mad. Your role doesn't have the necessary permissions for that.

## Additional Questions

**1. Looking ahead at this module’s [course schedule](https://codefellows.github.io/code-401-javascript-guide/curriculum/#module-7), What do you look forward to learning?**

I'm looking forward to learning what the best practice is for implementing RBAC is Auth0 and other third-party auth services.

**2. What are your learning goals after reading and reviewing the class [README](https://codefellows.github.io/code-401-javascript-guide/curriculum/)?**

After reading, my learning goal today is to get 'headers' in API requests down.

## Things I Want To Know More About

- I'd like to know about PATCH. We've never used it in class, nor have we seen it demonstrated.

[Previous Reading](./class-33.md)

[Next Reading](./class-35.md)
