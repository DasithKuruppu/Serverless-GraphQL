import { DynamoDB } from "aws-sdk";
import { IEvent } from "./typings";
const dynamoDb = new DynamoDB.DocumentClient();
import * as uuidv4 from "uuid/v4";

export function createParams(data: IEvent, TableName: string , uniqueID: string) {
  return {
    Item: {
      name: data.name,
      description: data.description,
      id: uniqueID,
      addedAt: Date.now(),
    },
    TableName,
  };
}

export default (data: IEvent) => {
  const putParams = createParams(data, process.env.TABLE_NAME, uuidv4());
  return dynamoDb
    .put(putParams)
    .promise()
    .then(() => {
      return putParams.Item;
    }).catch((err) => {
      throw err;
    });
};
