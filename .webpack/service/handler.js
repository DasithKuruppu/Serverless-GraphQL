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
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/*! exports provided: queryEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryEvents", function() { return queryEvents; });
/* harmony import */ var _schemas_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schemas/index */ "./schemas/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);

 // Highly scalable FaaS architecture :)
// Export a function which would be hooked up to the the λ node/ nodes as specified on serverless.yml template 

function queryEvents(event, context, callback) {
  Object(graphql__WEBPACK_IMPORTED_MODULE_1__["graphql"])(_schemas_index__WEBPACK_IMPORTED_MODULE_0__["default"], event.body).then(result => callback(null, {
    statusCode: 200,
    body: JSON.stringify(result)
  })).catch(callback);
}

/***/ }),

/***/ "./resolvers/events/create.js":
/*!************************************!*\
  !*** ./resolvers/events/create.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);



const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.DynamoDB.DocumentClient();

/* harmony default export */ __webpack_exports__["default"] = (data => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      name: data.name,
      quantity: data.quantity,
      id: uuid__WEBPACK_IMPORTED_MODULE_1___default.a.v1(),
      addedAt: Date.now()
    }
  };
  return dynamoDb.put(params).promise().then(result => params.Item);
});

/***/ }),

/***/ "./resolvers/events/list.js":
/*!**********************************!*\
  !*** ./resolvers/events/list.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);



const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.DynamoDB.DocumentClient();
/* harmony default export */ __webpack_exports__["default"] = (() => dynamoDb.scan({
  TableName: process.env.TABLE_NAME
}).promise().then(r => r.Items));

/***/ }),

/***/ "./resolvers/events/remove.js":
/*!************************************!*\
  !*** ./resolvers/events/remove.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);



const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.DynamoDB.DocumentClient();
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

/***/ "./resolvers/events/view.js":
/*!**********************************!*\
  !*** ./resolvers/events/view.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);



const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.DynamoDB.DocumentClient();
/* harmony default export */ __webpack_exports__["default"] = (id => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id
    }
  };
  return dynamoDb.get(params).promise().then(r => r.Item);
});

/***/ }),

/***/ "./schemas/index.js":
/*!**************************!*\
  !*** ./schemas/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_dynamodb_connections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-dynamodb-connections */ "graphql-dynamodb-connections");
/* harmony import */ var graphql_dynamodb_connections__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_dynamodb_connections__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resolvers_events_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/events/create */ "./resolvers/events/create.js");
/* harmony import */ var _resolvers_events_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resolvers/events/view */ "./resolvers/events/view.js");
/* harmony import */ var _resolvers_events_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resolvers/events/list */ "./resolvers/events/list.js");
/* harmony import */ var _resolvers_events_remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resolvers/events/remove */ "./resolvers/events/remove.js");






const productType = new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLObjectType"]({
  name: 'Product',
  fields: {
    id: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLString"])
    },
    name: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLString"])
    },
    quantity: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLInt"])
    },
    addedAt: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLString"])
    }
  }
});
const schema = new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLSchema"]({
  query: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      listProducts: {
        type: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLList"](productType),
        resolve: (parent, args) => Object(_resolvers_events_list__WEBPACK_IMPORTED_MODULE_4__["default"])()
      },
      viewProduct: {
        args: {
          id: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLString"])
          }
        },
        type: productType,
        resolve: (parent, args) => Object(_resolvers_events_view__WEBPACK_IMPORTED_MODULE_3__["default"])(args.id)
      }
    }
  }),
  mutation: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLObjectType"]({
    name: 'Mutation',
    fields: {
      createProduct: {
        args: {
          name: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLString"])
          },
          quantity: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLInt"])
          }
        },
        type: productType,
        resolve: (parent, args) => Object(_resolvers_events_create__WEBPACK_IMPORTED_MODULE_2__["default"])(args)
      },
      removeProduct: {
        args: {
          id: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLString"])
          }
        },
        type: graphql__WEBPACK_IMPORTED_MODULE_1__["GraphQLBoolean"],
        resolve: (parent, args) => Object(_resolvers_events_remove__WEBPACK_IMPORTED_MODULE_5__["default"])(args.id)
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

/***/ "graphql-dynamodb-connections":
/*!***********************************************!*\
  !*** external "graphql-dynamodb-connections" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-dynamodb-connections");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=handler.js.map