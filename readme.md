[![CircleCI](https://circleci.com/gh/DasithKuruppu/serverlessGraphQL.svg?style=svg)](https://circleci.com/gh/DasithKuruppu/serverlessGraphQL)
[![](https://img.shields.io/david/DasithKuruppu/serverlessGraphQL.svg)](https://github.com/DasithKuruppu/serverlessGraphQL)
[![](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/DasithKuruppu/serverlessGraphQL)
[![](https://img.shields.io/npm/types/ts.svg)](https://github.com/DasithKuruppu/serverlessGraphQL)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) 
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

Please go to [Gitlab Repo](https://gitlab.com/DasithKuruppu/serverlessgraphql) or use gitlab if you want to use gitlab CI/CD instead of [circleCI](https://circleci.com/)

## Features.
____
1. [Serverless](https://serverless.com/) templates that provide lambda functions hooked up via an API Gateway on AWS with other scalable resorces DynamoDb,S3 bucket etc based on cloud formation templates(Infrastucture As Code- IAC) without any manual intervention to create any resorce needed for the project.
2. Support for [Typescript](https://www.typescriptlang.org/) that compiles to Common js targeting node runtime.
3. An attempt at unit testablity and test coverage via [Jest](https://jestjs.io/), this would be focused more heavily on later updates.
4. Attempts to focus on a simple development structure / flow.
5. Support for any amount of environments (Dev,Test,Production etc..) replications via Cloud formation templates.
6. [GraphQL](https://graphql.org/) api exposed via a single endpoint with the posiblilty to scale via step functions or otherwise in future.
7. finally CI/CD for all 3 environments (dev,test,production) via [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/) 

## How to Install & Pre-requisites
____
***Clone project into your local folder.... & then navigate to project on terminal or Shell***

```javascript 
npm install -g serverless 

serverless config credentials --provider aws --key $AWS_ACCESS_KEY_ID --secret $AWS_SECRET_ACCESS_KEY
```
``` Note that the $AWS_ACCESS_KEY_ID and $AWS_SECRET_ACCESS_KEY here needs to be replaced by credentials given to you by  project owner or you may create your own AWS account and IAM role / credentials for programatic access ```
[Click here for more info !!!](https://serverless.com/framework/docs/providers/aws/guide/credentials/) 

Install [GraphQL Playground](https://github.com/prisma/graphql-playground/releases)  ``` optional for easy querying ```

## Getting started
_____
```javascript
npm install

npm install -g graphql-cli   

npm run deploy-dev 

```

``` javascript
npm start
```
To run it locally 


## Using / Playing around with it...
____

Initially make sure you have completed steps in both ***Install & Pre-requisites*** and in ***Getting started***

```javascript 
npm run deploy-dev 
``` 
Copy URL to the lambda function that is output onto the terminal once above command is run
![Terminal](./images/deploy-dev.PNG "Deploy Dev terminal")

Then Open GraphQL Playground and Select "URL EndPoint" and paste the Copied URL there
![GraphQL OpenProject](./images/GraphQLPlayground.PNG "GraphQL Open Project")

Then Run 
```javascript
query {
  listEvents {
    id
    name
  }
}

```
To see if the GraphQL query works as inteded either by returning empty list or list of "events"
![GraphQLPlayground](./images/GraphQLPlay.PNG "GraphQL PLay")

Read more on graphQL to learn Queries / Mutations to try out more queries againt the API
