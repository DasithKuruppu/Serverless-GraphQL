import schema from "./schemas/index";
import { graphql } from "graphql";
import { APIGatewayProxyEvent } from "aws-lambda";
import { indexElasticSearch } from "./streams/dynamodb_to_elasticseachIndex"
// Highly scalable FaaS architecture :)
// Export a function which would be hooked up to the the λ node/ nodes as specified on serverless.yml template
export async function queryEvents(
  event: APIGatewayProxyEvent,
  // context: Context,
) {
  const parsedRequestBody = (event && event.body) ? JSON.parse(event.body) : {};
  try {
    const graphQLResult = await graphql(schema,
      parsedRequestBody.query,
      null,
      null,
      parsedRequestBody.variables,
      parsedRequestBody.operationName);

    return { statusCode: 200, body: JSON.stringify(graphQLResult) };
  } catch (error) {
    throw error;
  }
}

export async function processStreams(event: APIGatewayProxyEvent) {
  console.log("pre process result", JSON.stringify(event));
  console.log(process.ELASTICSEARCH_URL);
  indexElasticSearch(event, process.ELASTICSEARCH_URL);
}
