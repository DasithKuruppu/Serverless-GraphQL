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
  graphql(schema, event.body)
    .then((result: ExecutionResult): void => {
        return callback(null, { statusCode: 200, body: JSON.stringify(result) });
      },
    )
    .catch(callback);
}
