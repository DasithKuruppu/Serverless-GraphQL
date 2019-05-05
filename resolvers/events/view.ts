import { dynamoDbClient } from "../../dynamodb";

export default async (id: string) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: { id },
  };
  const GetEvents = await dynamoDbClient.get(params).promise();
  return GetEvents.Item;
};
