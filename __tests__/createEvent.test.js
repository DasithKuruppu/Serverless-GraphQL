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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resolvers_events_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);


test("Event object creation", () => {
  const createdParams = Object(_resolvers_events_create__WEBPACK_IMPORTED_MODULE_0__[/* createParams */ "a"])({
    id: "1",
    name: "Whatever",
    description: "unknown",
    addedAt: Date.now(),
    startingOn: Date.now()
  }, process.env.TableName, uuid_v4__WEBPACK_IMPORTED_MODULE_1__());
  expect(createdParams).not.toBe(null);
});

/***/ })
/******/ ]);
//# sourceMappingURL=createEvent.test.js.map