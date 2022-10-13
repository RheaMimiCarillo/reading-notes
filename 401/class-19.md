# AWS: Events

## [AWS SQS vs SNS](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

**1. What is the difference betweeen SQS and SNS?**

SNS is like the a 'published-subscriber' service.
SQS is like a queueing service.

**2. What are some use cases for both SNS and SQS?**

Choose SNS if:

- You would like to be able to publish and consume batches of messages.
- You would like to allow same message to be processed in multiple ways.
- Multiple subscribers are needed.

Choose SQS if:

- You need a simple queue with no - particular additional requirements.
- Decoupling two applications and allowing parallel asynchronous processing.
- Only one subscriber is needed.

## [AWS SNS and SQS](https://www.youtube.com/watch?v%3DmXk0MNjlO7A)

**1. Describe how to use SQS and SNS in a “fanout” pattern.**

In a "fanout" pattern, a message published to an SNS topic is distributed to multiple SQS queues in parallel.

**2. Explain how “push notifications” work, using SNS.**

Subscribers get notifications when 'Messages' are pushed to publishers in SNS.

## [SQS and SNS Basics](https://www.youtube.com/watch?v%3DUesxWuZMZqI)

**1. How might a large scale, distributed application make use of a Queue system like SQS?**

## Bookmark and Review

- [SNS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)
- [SQS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)

## Things I Want To Know More About

-

## In-class notes

- Topics - these are like 'events' in the 'event pool'

- SNS - simple notification service

  -

[Previous Reading](./class-18.md)

[Next Reading](./class-26.md)
