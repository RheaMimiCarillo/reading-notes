# AWS: Cloud Servers

## [AWS EC2](https://aws.amazon.com/ec2/)

**1. What is an EC2 Instance?**

An EC2 instance is a virtual server for running applications on the AWS platform.

**2. Name 2 use cases for EC2.**

  1. Developing and testing environments
  2. Training Machine Learning applications

**3. Provide 1 reason to use ECS instead of Heroku.**

1 reason to use ECS over Heroku is the added flexibility that comes from directly dealing with AWS.

## [EC2 For Humans](https://www.youtube.com/watch?v%3DlZMkgOMYYIg)

**1. Where can we find EC2 on the AWS Console?**

Under `Services`. We can also type `EC2` into the search box.

**2. Explain the general difference between T2 Micro and XL.**

A T2 Micro has much weaker hardware specs compared to a T2 XL, so it's not as powerful, but it's much more economical.

**3. Explain a “Compute Cycle” to a non-technical friend.**



## [Elastic Beanstalk](https://www.youtube.com/watch?v%3DSrwxAScdyT0)

**1. What is Elastic Beanstalk?**

EB automatically handles capacity provisioning and load balancing, so that user experience is smooth.

**2. Describe the relationship between EC2 and Elastic Beanstalk.**

Elastic Beanstalk will help manage EC2 instances.

**3. Name some benefits of using Elastic Beanstalk.**

It allows for automated configuration and deployment of more VMs, so we devs can focus more on developing code.

## Bookmark and Review

- [Virtual Machines](https://www.youtube.com/watch?v%3DyIVXjl4SwVo)
- [VMS and the Cloud](https://www.youtube.com/watch?v%3Dl0DfHUWMjsU)

## Things I Want To Know More About.

- Which AWS services are ties to specific regions, and why?

## Random notes:

- Hypervisor: notices a bottleneck in physical server machines and helps split the load.
  - `load balancing`, to make user experience smoother
  - `capacity provisioning`

- S3: I think it's like a file manager (git, github) in AWS?

[Previous Reading](./class-15.md)

[Next Reading](./class-17.md)
