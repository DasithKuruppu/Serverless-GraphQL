import schema from "./schemas/index";
import { graphql } from "graphql";

export function queryProducts(event, context, callback) {
  console.log(event, context);
  graphql(schema, event.body)
    .then(result =>
      callback(null, { statusCode: 200, body: JSON.stringify(result) })
    )
    .catch(callback);
}
