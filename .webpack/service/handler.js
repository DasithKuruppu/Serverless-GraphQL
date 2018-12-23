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
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.ts":
/*!********************!*\
  !*** ./handler.ts ***!
  \********************/
/*! exports provided: queryEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryEvents", function() { return queryEvents; });
/* harmony import */ var _schemas_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schemas/index */ "./schemas/index.ts");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);


// Highly scalable FaaS architecture :)
// Export a function which would be hooked up to the the λ node/ nodes as specified on serverless.yml template
async function queryEvents(event) // context: Context,
{
  const parsedRequestBody = event && event.body ? JSON.parse(event.body) : {};

  try {
    const graphQLResult = await Object(graphql__WEBPACK_IMPORTED_MODULE_1__["graphql"])(_schemas_index__WEBPACK_IMPORTED_MODULE_0__["default"], parsedRequestBody.query, null, null, parsedRequestBody.variables, parsedRequestBody.operationName);
    return {
      statusCode: 200,
      body: JSON.stringify(graphQLResult)
    };
  } catch (error) {
    throw error;
  }
}

/***/ }),

/***/ "./resolvers/events/create.ts":
/*!************************************!*\
  !*** ./resolvers/events/create.ts ***!
  \************************************/
/*! exports provided: createParams, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParams", function() { return createParams; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);

const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["DynamoDB"].DocumentClient();

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
/* harmony default export */ __webpack_exports__["default"] = (data => {
  const putParams = createParams(data, process.env.TABLE_NAME, uuid_v4__WEBPACK_IMPORTED_MODULE_1__());
  return dynamoDb.put(putParams).promise().then(() => {
    return putParams.Item;
  }).catch(err => {
    throw err;
  });
});

/***/ }),

/***/ "./resolvers/events/list.ts":
/*!**********************************!*\
  !*** ./resolvers/events/list.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);

const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["DynamoDB"].DocumentClient();
/* harmony default export */ __webpack_exports__["default"] = (() => dynamoDb.scan({
  TableName: process.env.TABLE_NAME
}).promise().then(list => list.Items));

/***/ }),

/***/ "./resolvers/events/remove.ts":
/*!************************************!*\
  !*** ./resolvers/events/remove.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);

const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["DynamoDB"].DocumentClient();
/* harmony default export */ __webpack_exports__["default"] = (id => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id
    }
  };
  return dynamoDb.delete(params).promise();
});

/***/ }),

/***/ "./resolvers/events/view.ts":
/*!**********************************!*\
  !*** ./resolvers/events/view.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);

const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["DynamoDB"].DocumentClient();
/* harmony default export */ __webpack_exports__["default"] = (id => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id
    }
  };
  return dynamoDb.get(params).promise().then(GetEvents => GetEvents.Item);
});

/***/ }),

/***/ "./schemas/index.ts":
/*!**************************!*\
  !*** ./schemas/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_iso_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-iso-date */ "graphql-iso-date");
/* harmony import */ var graphql_iso_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_iso_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resolvers_events_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/events/create */ "./resolvers/events/create.ts");
/* harmony import */ var _resolvers_events_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resolvers/events/view */ "./resolvers/events/view.ts");
/* harmony import */ var _resolvers_events_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resolvers/events/list */ "./resolvers/events/list.ts");
/* harmony import */ var _resolvers_events_remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resolvers/events/remove */ "./resolvers/events/remove.ts");
/*import {
  paginationToParams,
  dataToConnection
} from "graphql-dynamodb-connections";
*/






const eventType = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
  name: "Event",
  fields: {
    id: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    },
    name: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    },
    description: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    },
    addedAt: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql_iso_date__WEBPACK_IMPORTED_MODULE_1__["GraphQLDateTime"])
    }
  }
});
const schema = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLSchema"]({
  query: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
    name: "Query",
    fields: {
      listEvents: {
        type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLList"](eventType),
        resolve: (parent, args) => {
          return Object(_resolvers_events_list__WEBPACK_IMPORTED_MODULE_4__["default"])();
        }
      },
      viewEvent: {
        args: {
          id: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        type: eventType,
        resolve: (parent, args) => {
          return Object(_resolvers_events_view__WEBPACK_IMPORTED_MODULE_3__["default"])(args.id);
        }
      }
    }
  }),
  mutation: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
    name: "Mutation",
    fields: {
      createEvent: {
        args: {
          name: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          },
          description: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        type: eventType,
        resolve: (parent, args) => {
          return Object(_resolvers_events_create__WEBPACK_IMPORTED_MODULE_2__["default"])(args);
        }
      },
      removeProduct: {
        args: {
          id: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLBoolean"],
        resolve: (parent, args) => {
          return Object(_resolvers_events_remove__WEBPACK_IMPORTED_MODULE_5__["default"])(args.id);
        }
      }
    }
  })
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-iso-date":
/*!***********************************!*\
  !*** external "graphql-iso-date" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-iso-date");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=handler.js.map