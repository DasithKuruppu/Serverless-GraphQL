import { DynamoDB } from "aws-sdk";

let dynamoDbClient = new DynamoDB.DocumentClient();
if (process.env.IS_OFFLINE) {
  dynamoDbClient = new DynamoDB.DocumentClient({
    endpoint: "http://localhost:8000",
    region: "localhost",
  });
}

export { dynamoDbClient };
