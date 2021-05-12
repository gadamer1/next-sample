module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_lawData_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/lawData/actions */ \"./reducers/lawData/actions.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/gadamer1/Documents/\\u1109\\u1173\\u1110\\u1161\\u1110\\u1173\\u110B\\u1165\\u11B8/next-sample/next-sample/pages/index.tsx\";\n\n\n\n\nconst Index = () => {\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    dispatch({\n      type: _reducers_lawData_actions__WEBPACK_IMPORTED_MODULE_2__[\"GET_RECENT_LAWLIST_REQUEST\"]\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"\\uD558\\uC774\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiR0VUX1JFQ0VOVF9MQVdMSVNUX1JFUVVFU1QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZEYsWUFBUSxDQUFDO0FBQ1BHLFVBQUksRUFBRUMsb0ZBQTBCQTtBQUR6QixLQUFELENBQVI7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQWZEOztBQWlCZUwsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHRVRfUkVDRU5UX0xBV0xJU1RfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9sYXdEYXRhL2FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBHRVRfUkVDRU5UX0xBV0xJU1RfUkVRVUVTVCxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT7tlZjsnbQ8L2gxPlxuICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./reducers/lawData/actions.ts":
/*!*************************************!*\
  !*** ./reducers/lawData/actions.ts ***!
  \*************************************/
/*! exports provided: GET_RECENT_LAWLIST_REQUEST, GET_RECENT_LAWLIST_SUCCESS, GET_RECENT_LAWLIST_FAILURE, GET_DETAIL_LAWDATA_REQUEST, GET_DETAIL_LAWDATA_SUCCESS, GET_DETAIL_LAWDATA_FAILURE, QUERYING_LAWLIST_REQUEST, QUERYING_LAWLIST_SUCCESS, QUERYING_LAWLIST_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_RECENT_LAWLIST_REQUEST\", function() { return GET_RECENT_LAWLIST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_RECENT_LAWLIST_SUCCESS\", function() { return GET_RECENT_LAWLIST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_RECENT_LAWLIST_FAILURE\", function() { return GET_RECENT_LAWLIST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_DETAIL_LAWDATA_REQUEST\", function() { return GET_DETAIL_LAWDATA_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_DETAIL_LAWDATA_SUCCESS\", function() { return GET_DETAIL_LAWDATA_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_DETAIL_LAWDATA_FAILURE\", function() { return GET_DETAIL_LAWDATA_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUERYING_LAWLIST_REQUEST\", function() { return QUERYING_LAWLIST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUERYING_LAWLIST_SUCCESS\", function() { return QUERYING_LAWLIST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUERYING_LAWLIST_FAILURE\", function() { return QUERYING_LAWLIST_FAILURE; });\nconst GET_RECENT_LAWLIST_REQUEST = \"GET_RECENT_LAWLIST_REQUEST\";\nconst GET_RECENT_LAWLIST_SUCCESS = \"GET_RECENT_LAWLIST_SUCCESS\";\nconst GET_RECENT_LAWLIST_FAILURE = \"GET_RECENT_LAWLIST_FAILURE\";\nconst GET_DETAIL_LAWDATA_REQUEST = \"GET_DETAIL_LAWDATA_REQUEST\";\nconst GET_DETAIL_LAWDATA_SUCCESS = \"GET_DETAIL_LAWDATA_SUCCESS\";\nconst GET_DETAIL_LAWDATA_FAILURE = \"GET_DETAIL_LAWDATA_FAILURE\";\nconst QUERYING_LAWLIST_REQUEST = \"QUERYING_LAWLIST_REQUEST\";\nconst QUERYING_LAWLIST_SUCCESS = \"QUERYING_LAWLIST_SUCCESS\";\nconst QUERYING_LAWLIST_FAILURE = \"QUERYING_LAWLIST_FAILURE\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9sYXdEYXRhL2FjdGlvbnMudHM/OWZkYiJdLCJuYW1lcyI6WyJHRVRfUkVDRU5UX0xBV0xJU1RfUkVRVUVTVCIsIkdFVF9SRUNFTlRfTEFXTElTVF9TVUNDRVNTIiwiR0VUX1JFQ0VOVF9MQVdMSVNUX0ZBSUxVUkUiLCJHRVRfREVUQUlMX0xBV0RBVEFfUkVRVUVTVCIsIkdFVF9ERVRBSUxfTEFXREFUQV9TVUNDRVNTIiwiR0VUX0RFVEFJTF9MQVdEQVRBX0ZBSUxVUkUiLCJRVUVSWUlOR19MQVdMSVNUX1JFUVVFU1QiLCJRVUVSWUlOR19MQVdMSVNUX1NVQ0NFU1MiLCJRVUVSWUlOR19MQVdMSVNUX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDIiwiZmlsZSI6Ii4vcmVkdWNlcnMvbGF3RGF0YS9hY3Rpb25zLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdFVF9SRUNFTlRfTEFXTElTVF9SRVFVRVNUID0gXCJHRVRfUkVDRU5UX0xBV0xJU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9SRUNFTlRfTEFXTElTVF9TVUNDRVNTID0gXCJHRVRfUkVDRU5UX0xBV0xJU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9SRUNFTlRfTEFXTElTVF9GQUlMVVJFID0gXCJHRVRfUkVDRU5UX0xBV0xJU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgR0VUX0RFVEFJTF9MQVdEQVRBX1JFUVVFU1QgPSBcIkdFVF9ERVRBSUxfTEFXREFUQV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFVEFJTF9MQVdEQVRBX1NVQ0NFU1MgPSBcIkdFVF9ERVRBSUxfTEFXREFUQV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFVEFJTF9MQVdEQVRBX0ZBSUxVUkUgPSBcIkdFVF9ERVRBSUxfTEFXREFUQV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBRVUVSWUlOR19MQVdMSVNUX1JFUVVFU1QgPSBcIlFVRVJZSU5HX0xBV0xJU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFFVRVJZSU5HX0xBV0xJU1RfU1VDQ0VTUyA9IFwiUVVFUllJTkdfTEFXTElTVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUVVFUllJTkdfTEFXTElTVF9GQUlMVVJFID0gXCJRVUVSWUlOR19MQVdMSVNUX0ZBSUxVUkVcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/lawData/actions.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });