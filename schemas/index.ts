/*import {
  paginationToParams,
  dataToConnection
} from "graphql-dynamodb-connections";
*/
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} from "graphql";

import {
  /*GraphQLDate,
  GraphQLTime,*/
  GraphQLDateTime,
} from "graphql-iso-date";

import { IEvent } from "../resolvers/events/typings";
import addEvent from "../resolvers/events/create";
import viewEvent from "../resolvers/events/view";
import listEvents from "../resolvers/events/list";
import removeEvent from "../resolvers/events/remove";

const eventType = new GraphQLObjectType({
  name: "Event",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    addedAt: { type: new GraphQLNonNull(GraphQLDateTime) },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      listEvents: {
        type: new GraphQLList(eventType),
        resolve: (parent ) => {
          return listEvents();
        },
      },
      viewEvent: {
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) },
        },
        type: eventType,
        resolve: (parent, args: { id: string }) => {
          return viewEvent(args.id);
        },
      },
    },
  }),

  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createEvent: {
        args: {
          name: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: new GraphQLNonNull(GraphQLString) },
        },
        type: eventType,
        resolve: (parent, args: IEvent) => {
          return addEvent(args);
        },
      },
      removeEvent: {
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) },
        },
        type: eventType,
        resolve: (parent, args: { id: string }) => {
          return removeEvent(args.id);
        },
      },
    },
  }),
});
export default schema;
