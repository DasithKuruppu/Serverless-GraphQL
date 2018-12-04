[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

## todo

1. Add elastic search / logstash
2. Make a proper readme
3. Add eslint / flowjs to typesafety and codebase consistancy.
4. unit testablity and test coverage ?
5. contributing guidelines ?
6. finally CI/CD environments (dev,test,production) if possible(more costly due to repetition of resorces for each enviornment).

## WIKI

1. [Check Wiki](https://gitlab.com/DasithKuruppu/serverlesseventsbe/wikis/Introduction) for more info

## Prerequisites
1. npm install -g serverless
2. serverless config credentials --provider aws --key $AWS_ACCESS_KEY_ID --secret $AWS_SECRET_ACCESS_KEY

Here the 
```javascript
    $AWS_ACCESS_KEY_ID and $AWS_SECRET_ACCESS_KEY
``` 
are environment variables, These keys need to be present to access aws services I will create seperate users on aws and then give you seperate keys

## getting started
1. npm install
2. for now just run npm start
3. npm deploy to deploy aws