import { DynamoDB } from "aws-sdk";
import { dynamoDbClient } from "../../dynamodb";
export default () =>
dynamoDbClient
    .scan({ TableName: process.env.TABLE_NAME })
    .promise()
    .then((list: DynamoDB.DocumentClient.ScanOutput) => list.Items.map(
    (Item) => {
        return ({ ...Item, addedAt: new Date(Item.addedAt) });
      }));
