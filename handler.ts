/* @flow */

import schema from "./schemas/index";
import { graphql } from "graphql";
import { APIGatewayProxyEvent, Context, ProxyCallback } from "aws-lambda";
// Highly scalable FaaS architecture :)=
// Export a function which would be hooked up to the the λ node/ nodes as specified on serverless.yml template
export async function queryEvents(
  event: APIGatewayProxyEvent,
  context: Context,
  callback: ProxyCallback,
): Promise<void> {
  const parsedRequestBody = (event && event.body) ? JSON.parse(event.body) : {};
  try {
    const result = await graphql(schema,
      parsedRequestBody.query,
      null,
      null,
      parsedRequestBody.variables,
      parsedRequestBody.operationName);
    callback(null, { statusCode: 200, body: JSON.stringify(result) });
  } catch (error) {
    callback(error);
  }
}
