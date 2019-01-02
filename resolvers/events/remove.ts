import { DynamoDB, AWSError } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient();

export default  async (id: string) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: { id },
    ReturnValues: "ALL_OLD",
  };
  try {
    const response = await dynamoDb.delete(params).promise();
    return response.Attributes;
  } catch (error) {
    throw error;
  }
};
