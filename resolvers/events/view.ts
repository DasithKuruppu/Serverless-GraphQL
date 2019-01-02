import { DynamoDB } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient();

export default async (id: string) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: { id },
  };
  const GetEvents = await dynamoDb
    .get(params)
    .promise();
  return GetEvents.Item;
};
