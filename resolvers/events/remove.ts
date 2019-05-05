import { dynamoDbClient } from "../../dynamodb";

export default  async (id: string) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: { id },
    ReturnValues: "ALL_OLD",
  };
  try {
    const response = await dynamoDbClient.delete(params).promise();
    return response.Attributes;
  } catch (error) {
    throw error;
  }
};
