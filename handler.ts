import schema from "./schemas/index";
import { graphql } from "graphql";
import { APIGatewayProxyEvent } from "aws-lambda";
import { indexElasticSearch } from "./streams/process";
// Highly scalable FaaS architecture :)
// Export a function which would be hooked up to the the λ node/ nodes as specified on serverless.yml template
export async function queryEvents(
  event: APIGatewayProxyEvent,
  // context: Context,
) {
  const parsedRequestBody = event && event.body ? JSON.parse(event.body) : {};
  try {
    const graphQLResult = await graphql(
      schema,
      parsedRequestBody.query,
      null,
      null,
      parsedRequestBody.variables,
      parsedRequestBody.operationName,
    );

    return { statusCode: 200, body: JSON.stringify(graphQLResult) };
  } catch (error) {
    throw error;
  }
}

export async function processStreams(event: APIGatewayProxyEvent) {
  await indexElasticSearch(event);
}
