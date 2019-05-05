import { IEvent } from "./typings";
import { dynamoDbClient } from "../../dynamodb";
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
  return dynamoDbClient
    .put(putParams)
    .promise()
    .then(() => {
      return putParams.Item;
    }).catch((err) => {
      throw err;
    });
};
