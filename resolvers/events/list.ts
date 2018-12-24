import { DynamoDB } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient();
export default () =>
  dynamoDb
    .scan({ TableName: process.env.TABLE_NAME })
    .promise()
    .then((list: DynamoDB.DocumentClient.ScanOutput) => list.Items.map(
    (Item) => {
        return ({ ...Item, addedAt: new Date(Item.addedAt) });
      }));
