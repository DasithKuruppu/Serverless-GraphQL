import { DynamoDB } from "aws-sdk";

export const dynamoDbClient = (function() {
  if (process.env.IS_OFFLINE) {
    return new DynamoDB.DocumentClient({
      endpoint: "http://localhost:8000",
      region: "localhost",
    });
  }
  return new DynamoDB.DocumentClient();
})();
