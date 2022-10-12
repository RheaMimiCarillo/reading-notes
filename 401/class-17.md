# AWS: S3 and Lambda

## [AWS S3](https://aws.amazon.com/s3/)

**1. What is Amazon S3?**

Amazon S3 is a file management service for AWS.

**2. Name some use cases for Amazon S3.**

- Back up and restore critical data

- Run cloud-native applications

**3. Name some benefits of using Amazon S3.**

- High scalability
- Low-latency data storage and retrieval

## [AWS Lambda Basics](https://www.serverless.com/aws-lambda)

**1. What is AWS Lambda?**

AWS is a 'serverless computing service'. It allows users to to create self-contained functions and execute them.

**2. Name some use cases for AWS Lambdas.**

- Scalable APIs
- Data Processing

**3. Describe “serverless” to a non-technical friend.**

Serverless means that we don't have to do the work to maintain the servers. Just like how we don't have to worry about changing oil and tires on a rental vehicle.

## [CDN](https://cyberhoot.com/cybrary/content-delivery-network-cdn/)

**1. What is a CDN?**

A group of servers that are geographically spread out, to provide fast internet content to users around the world.

**2. How does a CDN work with relation to the website visitor?**

CDN works for routing a website visitor to the server that'll provide them with the smoothest experience. That server has a cache of content that the user is trying to access.

**3. What are the benefits of employing a CDN?**

- Faster/smoother user experience
- Protection from DDoS attacks

## Things I Want To Know More About

- How would using CDNs help us at our level?

## Class Notes

- S3
  - Buckets are created by EB, itself
  - S3 is like a Repo on github
  - each 'bucket' is like a 'folder' to store files
  - this is less like 'data storage' and more like a 'file system' like windows explorer and finder
    - or like github
  - creating a bucket:
    - name bucket (name must be GLOBALLY unique)

- Lambda functions
  - 'stateless micro-servers' - functions that run in the cloud in response to some 'event'
  - performing a smaller 'step' for larger applications
  - 'stateless', because they don't store information
    - any variables created during the runtime will be gone after it's done
  - use the same 'architecture' as your local machine

[Previous Reading](./class-16.md)

[Next Reading](./class-18.md)
