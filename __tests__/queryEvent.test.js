module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "aws-sdk"
var external_aws_sdk_ = __webpack_require__(1);

// CONCATENATED MODULE: ./dynamodb/index.js


let dynamoDbClient = new external_aws_sdk_["DynamoDB"].DocumentClient();
if (process.env.IS_OFFLINE) {
  dynamoDbClient = new external_aws_sdk_["DynamoDB"].DocumentClient({
    endpoint: "http://localhost:8000",
    region: "localhost",
  });
}



// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__(2);

// CONCATENATED MODULE: ./resolvers/events/create.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createParams; });


function createParams(data, TableName, uniqueID) {
  return {
    Item: {
      name: data.name,
      description: data.description,
      id: uniqueID,
      addedAt: Date.now()
    },
    TableName
  };
}
/* harmony default export */ var create = __webpack_exports__["b"] = (data => {
  const putParams = createParams(data, process.env.TABLE_NAME, v4_());
  return dynamoDbClient.put(putParams).promise().then(() => {
    return putParams.Item;
  }).catch(err => {
    throw err;
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("graphql-iso-date");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@elastic/elasticsearch");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("serverless-jest-plugin");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var handler_namespaceObject = {};
__webpack_require__.r(handler_namespaceObject);
__webpack_require__.d(handler_namespaceObject, "queryEvents", function() { return queryEvents; });
__webpack_require__.d(handler_namespaceObject, "processStreams", function() { return processStreams; });

// EXTERNAL MODULE: external "graphql"
var external_graphql_ = __webpack_require__(0);

// EXTERNAL MODULE: external "graphql-iso-date"
var external_graphql_iso_date_ = __webpack_require__(4);

// EXTERNAL MODULE: ./resolvers/events/create.ts + 1 modules
var create = __webpack_require__(3);

// EXTERNAL MODULE: external "aws-sdk"
var external_aws_sdk_ = __webpack_require__(1);

// CONCATENATED MODULE: ./resolvers/events/view.ts

const dynamoDb = new external_aws_sdk_["DynamoDB"].DocumentClient();
/* harmony default export */ var view = (async id => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id
    }
  };
  const GetEvents = await dynamoDb.get(params).promise();
  return GetEvents.Item;
});
// CONCATENATED MODULE: ./resolvers/events/list.ts

const list_dynamoDb = new external_aws_sdk_["DynamoDB"].DocumentClient();
/* harmony default export */ var list = (() => list_dynamoDb.scan({
  TableName: process.env.TABLE_NAME
}).promise().then(list => list.Items.map(Item => {
  return { ...Item,
    addedAt: new Date(Item.addedAt)
  };
})));
// CONCATENATED MODULE: ./resolvers/events/remove.ts

const remove_dynamoDb = new external_aws_sdk_["DynamoDB"].DocumentClient();
/* harmony default export */ var remove = (async id => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id
    },
    ReturnValues: "ALL_OLD"
  };

  try {
    const response = await remove_dynamoDb.delete(params).promise();
    return response.Attributes;
  } catch (error) {
    throw error;
  }
});
// CONCATENATED MODULE: ./schemas/index.ts
/*import {
  paginationToParams,
  dataToConnection
} from "graphql-dynamodb-connections";
*/






const eventType = new external_graphql_["GraphQLObjectType"]({
  name: "Event",
  fields: {
    id: {
      type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
    },
    name: {
      type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
    },
    description: {
      type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
    },
    addedAt: {
      type: new external_graphql_["GraphQLNonNull"](external_graphql_iso_date_["GraphQLDateTime"])
    }
  }
});
const schema = new external_graphql_["GraphQLSchema"]({
  query: new external_graphql_["GraphQLObjectType"]({
    name: "Query",
    fields: {
      listEvents: {
        type: new external_graphql_["GraphQLList"](eventType),
        resolve: parent => {
          return list();
        }
      },
      viewEvent: {
        args: {
          id: {
            type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
          }
        },
        type: eventType,
        resolve: (parent, args) => {
          return view(args.id);
        }
      }
    }
  }),
  mutation: new external_graphql_["GraphQLObjectType"]({
    name: "Mutation",
    fields: {
      createEvent: {
        args: {
          name: {
            type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
          },
          description: {
            type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
          }
        },
        type: eventType,
        resolve: (parent, args) => {
          return Object(create["b" /* default */])(args);
        }
      },
      removeEvent: {
        args: {
          id: {
            type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
          }
        },
        type: eventType,
        resolve: (parent, args) => {
          return remove(args.id);
        }
      }
    }
  })
});
/* harmony default export */ var schemas = (schema);
// EXTERNAL MODULE: external "@elastic/elasticsearch"
var elasticsearch_ = __webpack_require__(5);

// CONCATENATED MODULE: ./elasticSearch/elasticSearchConnect.ts

const esClient = new elasticsearch_["Client"]({
  node: `https://${process.env.ELASTICSEARCH_URL}`
});
// CONCATENATED MODULE: ./elasticSearch/mappings.ts
function getESMappings(index) {
  return {
    index,
    body: {
      properties: {
        id: {
          type: "text"
        },
        description: {
          type: "text"
        },
        name: {
          type: "text"
        },
        addedAt: {
          type: "number"
        }
      }
    }
  };
}
// CONCATENATED MODULE: ./streams/utils/index.ts
function transformData(newImage) {
  const transformedObject = {};
  Object.keys(newImage).forEach(key => {
    const dataType = Object.keys(newImage[key])[0];
    transformedObject[key] = newImage[key][dataType];
  });
  return transformedObject;
}

function extractRecordsFromDynamodbEvent(event) {
  if (!event.Records || !Array.isArray(event.Records) || event.Records.length <= 0) {
    return null;
  }

  return event.Records.reduce((acculator, current) => {
    const ACTION = current.eventName;
    const existingRecords = acculator[ACTION] || [];
    const existsDynamoDb = current.dynamodb && current.dynamodb.NewImage;

    if (existsDynamoDb) {
      return { ...acculator,
        [ACTION]: [...existingRecords, transformData(current.dynamodb.NewImage)]
      };
    }
  }, {});
}
const actions = {
  INSERT: "INSERT",
  UPDATE: "UPDATE"
};
// CONCATENATED MODULE: ./elasticSearch/config.ts
const config = {
  INDEX: "defaultevents",
  TYPE: "bookingevent"
};
// CONCATENATED MODULE: ./streams/process.ts




async function indexElasticSearch(event) {
  try {
    // check if indices already exist
    const exists = await esClient.indices.exists({
      index: config.INDEX
    });

    if (!exists) {
      // if not create new index and mappings for it
      await esClient.indices.create(getESMappings(config.INDEX));
    } // extract data


    const dataArray = extractRecordsFromDynamodbEvent(event)[actions.INSERT] || []; // default to empty

    await Promise.all(dataArray.map(async data => {
      await esClient.index({
        id: data.id,
        index: config.INDEX,
        body: data
      });
    }));
  } catch (err) {
    throw err;
  }
}
// CONCATENATED MODULE: ./handler.ts


 // Highly scalable FaaS architecture :)
// Export a function which would be hooked up to the the λ node/ nodes as specified on serverless.yml template

async function queryEvents(event) // context: Context,
{
  const parsedRequestBody = event && event.body ? JSON.parse(event.body) : {};

  try {
    const graphQLResult = await Object(external_graphql_["graphql"])(schemas, parsedRequestBody.query, null, null, parsedRequestBody.variables, parsedRequestBody.operationName);
    return {
      statusCode: 200,
      body: JSON.stringify(graphQLResult)
    };
  } catch (error) {
    throw error;
  }
}
async function processStreams(event) {
  await indexElasticSearch(event);
}
// EXTERNAL MODULE: external "serverless-jest-plugin"
var external_serverless_jest_plugin_ = __webpack_require__(6);

// CONCATENATED MODULE: ./__tests__/queryEvent.test.ts
// tests for queryEvents
// Generated by serverless-jest-plugin


const lambdaWrapper = external_serverless_jest_plugin_["lambdaWrapper"];
const wrapped = lambdaWrapper.wrap(handler_namespaceObject, {
  handler: "queryEvents"
});
describe("λ Function - queryEvents", () => {
  beforeAll(done => {
    //  lambdaWrapper.init(liveFunction); // Run the deployed lambda
    done();
  });
  it("Invoke / Initiate function test", () => {
    return wrapped.run({}).then(response => {
      expect(response).not.toBe(null);
      expect(response).toHaveProperty("statusCode");
      expect(response).toHaveProperty("body");
      expect(response.statusCode).toBe(200);
    });
  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=queryEvent.test.js.map