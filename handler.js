import schema from "./schemas/index";
import { graphql } from "graphql";

// Highly scalable FaaS architecture :)
// Export a function which would be hooked up to the the λ node/ nodes as specified on serverless.yml template
export function queryEvents(event, context, callback) {
  graphql(schema, event.body)
    .then(result =>
      callback(null, { statusCode: 200, body: JSON.stringify(result) })
    )
    .catch(callback);
}
