import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default () => dynamoDb.scan({ TableName: process.env.TABLE_NAME })
  .promise()
  .then(r => r.Items);