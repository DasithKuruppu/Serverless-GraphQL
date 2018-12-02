/* @flow */
import { DynamoDB } from "aws-sdk";
import { IEvent } from "./typings";

const dynamoDb = new DynamoDB.DocumentClient();
import uuid from "uuid";
export default (data: IEvent) => {
  const params = {
    Item: {
      name: data.name,
      description: data.description,
      id: uuid.v1(),
      addedAt: Date.now(),
    },
    TableName: process.env.TABLE_NAME,
  };
  return dynamoDb
    .put(params)
    .promise()
    .then(() => params.Item);
};
