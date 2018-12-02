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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

module.exports = require("uuid");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "graphql"
var external_graphql_ = __webpack_require__(0);

// EXTERNAL MODULE: external "aws-sdk"
var external_aws_sdk_ = __webpack_require__(1);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(2);
var external_uuid_default = /*#__PURE__*/__webpack_require__.n(external_uuid_);

// CONCATENATED MODULE: ./resolvers/events/create.ts
/* @flow */

var dynamoDb = new external_aws_sdk_["DynamoDB"].DocumentClient();

/* harmony default export */ var create = (function (data) {
  var params = {
    Item: {
      name: data.name,
      description: data.description,
      id: external_uuid_default.a.v1(),
      addedAt: Date.now()
    },
    TableName: process.env.TABLE_NAME
  };
  return dynamoDb.put(params).promise().then(function () {
    return params.Item;
  });
});
// CONCATENATED MODULE: ./resolvers/events/view.ts

var view_dynamoDb = new external_aws_sdk_["DynamoDB"].DocumentClient();
/* harmony default export */ var view = (function (id) {
  var params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id: id
    }
  };
  return view_dynamoDb.get(params).promise().then(function (GetEvents) {
    return GetEvents.Item;
  });
});
// CONCATENATED MODULE: ./resolvers/events/list.ts

var list_dynamoDb = new external_aws_sdk_["DynamoDB"].DocumentClient();
/* harmony default export */ var list = (function () {
  return list_dynamoDb.scan({
    TableName: process.env.TABLE_NAME
  }).promise().then(function (list) {
    return list.Items;
  });
});
// CONCATENATED MODULE: ./resolvers/events/remove.ts

var remove_dynamoDb = new external_aws_sdk_["DynamoDB"].DocumentClient();
/* harmony default export */ var remove = (function (id) {
  var params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id: id
    }
  };
  return remove_dynamoDb.delete(params).promise();
});
// CONCATENATED MODULE: ./schemas/index.ts
/* @flow */

/*
import {
  paginationToParams,
  dataToConnection
} from "graphql-dynamodb-connections";
*/





var eventType = new external_graphql_["GraphQLObjectType"]({
  name: 'Event',
  fields: {
    id: {
      type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
    },
    name: {
      type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
    },
    quantity: {
      type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLInt"])
    },
    addedAt: {
      type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
    }
  }
});
var schema = new external_graphql_["GraphQLSchema"]({
  query: new external_graphql_["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      listEvents: {
        type: new external_graphql_["GraphQLList"](eventType),
        resolve: function resolve()
        /*parent, args*/
        {
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
        resolve: function resolve(
        /*parent,*/
        args) {
          return view(args.id);
        }
      }
    }
  }),
  mutation: new external_graphql_["GraphQLObjectType"]({
    name: 'Mutation',
    fields: {
      createEvent: {
        args: {
          name: {
            type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
          },
          quantity: {
            type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLInt"])
          }
        },
        type: eventType,
        resolve: function resolve(
        /*parent, */
        args) {
          return create(args);
        }
      },
      removeProduct: {
        args: {
          id: {
            type: new external_graphql_["GraphQLNonNull"](external_graphql_["GraphQLString"])
          }
        },
        type: external_graphql_["GraphQLBoolean"],
        resolve: function resolve(
        /*parent,*/
        args) {
          return remove(args.id);
        }
      }
    }
  })
});
/* harmony default export */ var schemas = (schema);
// CONCATENATED MODULE: ./handler.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryEvents", function() { return queryEvents; });
/* @flow */


// Highly scalable FaaS architecture :)=
// Export a function which would be hooked up to the the λ node/ nodes as specified on serverless.yml template
function queryEvents(event, context, callback) {
  Object(external_graphql_["graphql"])(schemas, event.body).then(function (result) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(result)
    });
  }).catch(callback);
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF3cy1zZGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vLy4vcmVzb2x2ZXJzL2V2ZW50cy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb2x2ZXJzL2V2ZW50cy92aWV3LnRzIiwid2VicGFjazovLy8uL3Jlc29sdmVycy9ldmVudHMvbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9yZXNvbHZlcnMvZXZlbnRzL3JlbW92ZS50cyIsIndlYnBhY2s6Ly8vLi9zY2hlbWFzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2hhbmRsZXIudHMiXSwibmFtZXMiOlsiZHluYW1vRGIiLCJEeW5hbW9EQiIsIkRvY3VtZW50Q2xpZW50IiwiZGF0YSIsInBhcmFtcyIsIkl0ZW0iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpZCIsInV1aWQiLCJ2MSIsImFkZGVkQXQiLCJEYXRlIiwibm93IiwiVGFibGVOYW1lIiwicHJvY2VzcyIsImVudiIsIlRBQkxFX05BTUUiLCJwdXQiLCJwcm9taXNlIiwidGhlbiIsIktleSIsImdldCIsIkdldEV2ZW50cyIsInNjYW4iLCJsaXN0IiwiSXRlbXMiLCJkZWxldGUiLCJldmVudFR5cGUiLCJHcmFwaFFMT2JqZWN0VHlwZSIsImZpZWxkcyIsInR5cGUiLCJHcmFwaFFMTm9uTnVsbCIsIkdyYXBoUUxTdHJpbmciLCJxdWFudGl0eSIsIkdyYXBoUUxJbnQiLCJzY2hlbWEiLCJHcmFwaFFMU2NoZW1hIiwicXVlcnkiLCJsaXN0RXZlbnRzIiwiR3JhcGhRTExpc3QiLCJyZXNvbHZlIiwidmlld0V2ZW50IiwiYXJncyIsIm11dGF0aW9uIiwiY3JlYXRlRXZlbnQiLCJhZGRFdmVudCIsInJlbW92ZVByb2R1Y3QiLCJHcmFwaFFMQm9vbGVhbiIsInJlbW92ZUV2ZW50IiwicXVlcnlFdmVudHMiLCJldmVudCIsImNvbnRleHQiLCJjYWxsYmFjayIsImdyYXBocWwiLCJib2R5IiwicmVzdWx0Iiwic3RhdHVzQ29kZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7QUNsRkEsb0M7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBR0EsSUFBTUEsUUFBUSxHQUFHLElBQUlDLDZCQUFRLENBQUNDLGNBQWIsRUFBakI7QUFDQTtBQUNlLHFEQUFDQyxJQUFELEVBQWtCO0FBQy9CLE1BQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUFFSCxJQUFJLENBQUNHLElBRFA7QUFFSkMsaUJBQVcsRUFBRUosSUFBSSxDQUFDSSxXQUZkO0FBR0pDLFFBQUUsRUFBRUMsdUJBQUksQ0FBQ0MsRUFBTCxFQUhBO0FB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Q0FBQ2xCLE9BQUQsRUFBU2UsS0FBSyxDQUFDSSxJQUFmLENBQVAsQ0FDR25DLElBREgsQ0FDUSxVQUFDb0MsTUFBRCxFQUNKO0FBQ0UsV0FBT0gsUUFBUSxDQUFDLElBQUQsRUFBTztBQUFFSSxnQkFBVSxFQUFFLEdBQWQ7QUFBbUJGLFVBQUksRUFBRUcsSUFBSSxDQUFDQyxTQUFMLENBQWVILE1BQWY7QUFBekIsS0FBUCxDQUFmO0FBQ0QsR0FKTCxFQU1HSSxLQU5ILENBTVNQLFFBTlQ7QUFPRCxDIiwiZmlsZSI6ImhhbmRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3cy1zZGtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiLCIvKiBAZmxvdyAqL1xyXG5pbXBvcnQgeyBEeW5hbW9EQiB9IGZyb20gXCJhd3Mtc2RrXCI7XHJcbmltcG9ydCB7IElFdmVudCB9IGZyb20gXCIuL3R5cGluZ3NcIjtcclxuXHJcbmNvbnN0IGR5bmFtb0RiID0gbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XHJcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkXCI7XHJcbmV4cG9ydCBkZWZhdWx0IChkYXRhOiBJRXZlbnQpID0+IHtcclxuICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICBJdGVtOiB7XHJcbiAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgIGlkOiB1dWlkLnYxKCksXHJcbiAgICAgIGFkZGVkQXQ6IERhdGUubm93KCksXHJcbiAgICB9LFxyXG4gICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5UQUJMRV9OQU1FLFxyXG4gIH07XHJcbiAgcmV0dXJuIGR5bmFtb0RiXHJcbiAgICAucHV0KHBhcmFtcylcclxuICAgIC5wcm9taXNlKClcclxuICAgIC50aGVuKCgpID0+IHBhcmFtcy5JdGVtKTtcclxufTtcclxuIiwiaW1wb3J0IHsgRHluYW1vREIgfSBmcm9tIFwiYXdzLXNka1wiO1xyXG5jb25zdCBkeW5hbW9EYiA9IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGlkOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LlRBQkxFX05BTUUsXHJcbiAgICBLZXk6IHsgaWQgfSxcclxuICB9O1xyXG4gIHJldHVybiBkeW5hbW9EYlxyXG4gICAgLmdldChwYXJhbXMpXHJcbiAgICAucHJvbWlzZSgpXHJcbiAgICAudGhlbigoR2V0RXZlbnRzKSA9PiBHZXRFdmVudHMuSXRlbSk7XHJcbn07XHJcbiIsImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSBcImF3cy1zZGtcIjtcclxuY29uc3QgZHluYW1vRGIgPSBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT5cclxuICBkeW5hbW9EYlxyXG4gICAgLnNjYW4oeyBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LlRBQkxFX05BTUUgfSlcclxuICAgIC5wcm9taXNlKClcclxuICAgIC50aGVuKChsaXN0OiBEeW5hbW9EQi5Eb2N1bWVudENsaWVudC5TY2FuT3V0cHV0KSA9PiBsaXN0Lkl0ZW1zKTtcclxuIiwiaW1wb3J0IHsgRHluYW1vREIgfSBmcm9tIFwiYXdzLXNka1wiO1xyXG5jb25zdCBkeW5hbW9EYiA9IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5UQUJMRV9OQU1FLFxyXG4gICAgS2V5OiB7IGlkIH0sXHJcbiAgfTtcclxuICByZXR1cm4gZHluYW1vRGIuZGVsZXRlKHBhcmFtcykucHJvbWlzZSgpO1xyXG59O1xyXG4iLCIvKiBAZmxvdyAqL1xyXG4vKlxyXG5pbXBvcnQge1xyXG4gIHBhZ2luYXRpb25Ub1BhcmFtcyxcclxuICBkYXRhVG9Db25uZWN0aW9uXHJcbn0gZnJvbSBcImdyYXBocWwtZHluYW1vZGItY29ubmVjdGlvbnNcIjtcclxuKi9cclxuaW1wb3J0IHtcclxuICBHcmFwaFFMU2NoZW1hLFxyXG4gIEdyYXBoUUxPYmplY3RUeXBlLFxyXG4gIEdyYXBoUUxTdHJpbmcsXHJcbiAgR3JhcGhRTEludCxcclxuICBHcmFwaFFMTGlzdCxcclxuICBHcmFwaFFMTm9uTnVsbCxcclxuICBHcmFwaFFMQm9vbGVhbixcclxufSBmcm9tICdncmFwaHFsJztcclxuXHJcbmltcG9ydCBhZGRFdmVudCBmcm9tICcuLi9yZXNvbHZlcnMvZXZlbnRzL2NyZWF0ZSc7XHJcbmltcG9ydCB2aWV3RXZlbnQgZnJvbSAnLi4vcmVzb2x2ZXJzL2V2ZW50cy92aWV3JztcclxuaW1wb3J0IGxpc3RFdmVudHMgZnJvbSAnLi4vcmVzb2x2ZXJzL2V2ZW50cy9saXN0JztcclxuaW1wb3J0IHJlbW92ZUV2ZW50IGZyb20gJy4uL3Jlc29sdmVycy9ldmVudHMvcmVtb3ZlJztcclxuXHJcbmNvbnN0IGV2ZW50VHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XHJcbiAgbmFtZTogJ0V2ZW50JyxcclxuICBmaWVsZHM6IHtcclxuICAgIGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSB9LFxyXG4gICAgbmFtZTogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcclxuICAgIHF1YW50aXR5OiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSW50KSB9LFxyXG4gICAgYWRkZWRBdDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNjaGVtYSA9IG5ldyBHcmFwaFFMU2NoZW1hKHtcclxuICBxdWVyeTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcclxuICAgIG5hbWU6ICdRdWVyeScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgbGlzdEV2ZW50czoge1xyXG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTGlzdChldmVudFR5cGUpLFxyXG4gICAgICAgIHJlc29sdmU6ICgvKnBhcmVudCwgYXJncyovKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gbGlzdEV2ZW50cygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHZpZXdFdmVudDoge1xyXG4gICAgICAgIGFyZ3M6IHtcclxuICAgICAgICAgIGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxyXG4gICAgICAgIHJlc29sdmU6ICgvKnBhcmVudCwqLyBhcmdzOiB7IGlkOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHZpZXdFdmVudChhcmdzLmlkKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSxcclxuXHJcbiAgbXV0YXRpb246IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XHJcbiAgICBuYW1lOiAnTXV0YXRpb24nLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIGNyZWF0ZUV2ZW50OiB7XHJcbiAgICAgICAgYXJnczoge1xyXG4gICAgICAgICAgbmFtZTogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcclxuICAgICAgICAgIHF1YW50aXR5OiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSW50KSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxyXG4gICAgICAgIHJlc29sdmU6ICgvKnBhcmVudCwgKi8gYXJncykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGFkZEV2ZW50KGFyZ3MpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlbW92ZVByb2R1Y3Q6IHtcclxuICAgICAgICBhcmdzOiB7XHJcbiAgICAgICAgICBpZDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IEdyYXBoUUxCb29sZWFuLFxyXG4gICAgICAgIHJlc29sdmU6ICgvKnBhcmVudCwqLyBhcmdzOiB7IGlkOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlbW92ZUV2ZW50KGFyZ3MuaWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc2NoZW1hO1xyXG4iLCIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgc2NoZW1hIGZyb20gJy4vc2NoZW1hcy9pbmRleCc7XG5pbXBvcnQgeyBncmFwaHFsLCBFeGVjdXRpb25SZXN1bHR9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5RXZlbnQsIENvbnRleHQsIFByb3h5Q2FsbGJhY2sgfSBmcm9tICdhd3MtbGFtYmRhJ1xuLy8gSGlnaGx5IHNjYWxhYmxlIEZhYVMgYXJjaGl0ZWN0dXJlIDopPVxuLy8gRXhwb3J0IGEgZnVuY3Rpb24gd2hpY2ggd291bGQgYmUgaG9va2VkIHVwIHRvIHRoZSB0aGUgzrsgbm9kZS8gbm9kZXMgYXMgc3BlY2lmaWVkIG9uIHNlcnZlcmxlc3MueW1sIHRlbXBsYXRlXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlFdmVudHMoXG4gIGV2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgY29udGV4dDogQ29udGV4dCxcbiAgY2FsbGJhY2s6IFByb3h5Q2FsbGJhY2ssXG4pOiB2b2lkIHtcbiAgZ3JhcGhxbChzY2hlbWEsIGV2ZW50LmJvZHkpXG4gICAgLnRoZW4oKHJlc3VsdDogRXhlY3V0aW9uUmVzdWx0KTogdm9pZCA9PlxuICAgICAge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgeyBzdGF0dXNDb2RlOiAyMDAsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3VsdCkgfSk7XG4gICAgICB9LFxuICAgIClcbiAgICAuY2F0Y2goY2FsbGJhY2spO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==