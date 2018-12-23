/* @flow */

import schema from "./schemas/index";
import { graphql, ExecutionResult} from "graphql";
import { APIGatewayProxyEvent, Context, ProxyCallback } from "aws-lambda";
// Highly scalable FaaS architecture :)=
// Export a function which would be hooked up to the the λ node/ nodes as specified on serverless.yml template
export function queryEvents(
  event: APIGatewayProxyEvent,
  context: Context,
  callback: ProxyCallback,
): void {
  const parsedRequestBody = JSON.parse(event.body);
  graphql(schema, parsedRequestBody.query, null, null, parsedRequestBody.variables, parsedRequestBody.operationName)
    .then((result: ExecutionResult): void => {
        return callback(null, { statusCode: 200, body: JSON.stringify(result) });
      },
    )
    .catch((err) => {
      return callback(err);
    });
}
