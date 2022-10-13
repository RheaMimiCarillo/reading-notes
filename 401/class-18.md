# AWS: API, Dynamo and Lambda

## [AWS API Gateway Overview](https://www.serverless.com/amazon-api-gateway)

**1. What is Amazon API Gateway?**

It's a service to define HTTP endpoints to handle REST and WebSocket APIs, as well as auth, acl, and more.

**2. Why is Amazon API Gateway an important part of the Serverless ecosystem?**

It integrates with other AWS services, like Lambda, SNS, IAM, and is able to directly trigger a serverless function from HTTP requests.

**3. How does API Gateway integrate with other AWS services?**

- AWS Lambda: run Lambda functions to generate HTTP API responses.
- AWS SNS: publish SNS notifications when an HTTP API endpoint is accessed.
- Amazon Cognito: provide authentication and authorization for your HTTP APIs.
- Invoking an AWS Lambda function.
- Invoking another HTTP endpoint, with or without VPC Link.
- Making an HTTP call against the API of any AWS service that provides an HTTP API.
- Returning a mock response generated within API Gateway without calling out to other services.

## [AWS API Gateway](https://aws.amazon.com/api-gateway/)

**1. What are the some benefits of using Amazon API Gateway?**

- Efficient API development
- Performance at any scale
- Cost savings at scale

**2. What two API types might you choose from?**

- RESTful APIs
- WEBSOCKET APIs

## [AWS DynamoDB Guide](https://www.dynamodbguide.com/what-is-dynamo-db/)

**1. What is DynamoDB?**

DynamoDB is a NoSQL database offered by AWS.

**2. Under what circumstances would you recommend DynamoDB over MongoDB?**

If you aren't working with complex queries or storing large data, then MongoDB is unnecessary, and DynamoDB is good enough.

## [AWS DynamoDB](https://aws.amazon.com/dynamodb/)

**1. Explain to a non-technical friend how DynamoDB works.**

DynamoDB works by accepting data in whatever format you choose, and then storing it in a database managed by Amazon.

## [Dynamoose](https://dynamoosejs.com/getting_started/Introduction)

**1. What is Dynamoose?**

It's a tool for formatting data for use with DynamoDB. It's heavily inspired by Mongoose.

**2. What are some key features of Dynamoose?**

- Type safety
- High level API
- Easy to use syntax
- DynamoDB Single Table Design Support
- Ability to transform data before saving or retrieving items
- Strict data modeling (validation, required attributes, and more)
- Support for DynamoDB Transactions
- Powerful Conditional/Filtering Support
- Callback & Promise support
- AWS Multi-region support

## Things I Want To Know More About

- Why would we want to use DynamoDB, realistically? It seems quite limited, in comparison to Mongoose.

## In-class notes

DynamoDB - another Document Based Database

- There is no data validation and such, so you can upload anything you want
- Dynamoose (ORM) - Object Relational Mapping
  - We'll use our ORM to handle updating our Dynamo database

[Previous Reading](./class-17.md)

[Next Reading](./class-19.md)
