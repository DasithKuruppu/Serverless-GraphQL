import { DynamoDB } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient();

export default (id: string) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: { id },
  };
  return dynamoDb
    .get(params)
    .promise()
    .then((GetEvents) => GetEvents.Item);
};
