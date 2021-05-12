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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./Components/store.ts":
/*!*****************************!*\
  !*** ./Components/store.ts ***!
  \*****************************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeStore\", function() { return makeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.ts\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.ts\");\n\n\n\n\n\n\nconst makeStore = context => {\n  // 1: Create the middleware\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()(); // 2: Add an extra parameter for applying middleware:\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware))); // 3: Run your sagas on server\n\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); // 4: now return the store:\n\n  return store;\n};\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"createWrapper\"])(makeStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3N0b3JlLnRzPzZhNDciXSwibmFtZXMiOlsibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzYWdhVGFzayIsInJ1biIsInJvb3RTYWdhIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT08sTUFBTUEsU0FBMkIsR0FBSUMsT0FBRCxJQUFzQjtBQUMvRDtBQUNBLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDLENBRitELENBSS9EOztBQUNBLFFBQU1DLEtBQUssR0FBR0MseURBQVcsQ0FDdkJDLGlEQUR1QixFQUV2QkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNOLGNBQUQsQ0FBaEIsQ0FGSSxDQUF6QixDQUwrRCxDQVUvRDs7QUFDQ0UsT0FBRCxDQUFxQkssUUFBckIsR0FBZ0NQLGNBQWMsQ0FBQ1EsR0FBZixDQUFtQkMsOENBQW5CLENBQWhDLENBWCtELENBYS9EOztBQUNBLFNBQU9QLEtBQVA7QUFDRCxDQWZNO0FBaUJBLE1BQU1RLE9BQU8sR0FBR0Msd0VBQWEsQ0FBUWIsU0FBUixDQUE3QiIsImZpbGUiOiIuL0NvbXBvbmVudHMvc3RvcmUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgTWFrZVN0b3JlLCBjcmVhdGVXcmFwcGVyLCBDb250ZXh0IH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlLCB7IFRhc2sgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTYWdhU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG4gIHNhZ2FUYXNrPzogVGFzaztcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZTogTWFrZVN0b3JlPHN0b3JlPiA9IChjb250ZXh0OiBDb250ZXh0KSA9PiB7XG4gIC8vIDE6IENyZWF0ZSB0aGUgbWlkZGxld2FyZVxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cbiAgLy8gMjogQWRkIGFuIGV4dHJhIHBhcmFtZXRlciBmb3IgYXBwbHlpbmcgbWlkZGxld2FyZTpcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSlcbiAgKTtcblxuICAvLyAzOiBSdW4geW91ciBzYWdhcyBvbiBzZXJ2ZXJcbiAgKHN0b3JlIGFzIFNhZ2FTdG9yZSkuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuXG4gIC8vIDQ6IG5vdyByZXR1cm4gdGhlIHN0b3JlOlxuICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8c3RvcmU+KG1ha2VTdG9yZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/store.ts\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/MDJiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/base.css */ \"./styles/base.css\");\n/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_base_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test.css */ \"./pages/test.css\");\n/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_test_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Components_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/store */ \"./Components/store.ts\");\n\nvar _jsxFileName = \"/Users/gadamer1/Documents/\\u1109\\u1173\\u1110\\u1161\\u1110\\u1173\\u110B\\u1165\\u11B8/next-sample/next-sample/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass LawSystem extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }, this);\n  }\n\n}\n\n_defineProperty(LawSystem, \"getInitialProps\", async ({\n  Component,\n  ctx\n}) => {\n  // 1. Wait for all page actions to dispatch\n  const pageProps = _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {}); // 2. Stop the saga if on server\n\n\n  if (ctx.req) {\n    ctx.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_3__[\"END\"]);\n    await ctx.store.sagaTask.toPromise();\n  } // 3. Return props\n\n\n  return {\n    pageProps\n  };\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Components_store__WEBPACK_IMPORTED_MODULE_6__[\"wrapper\"].withRedux(LawSystem));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkxhd1N5c3RlbSIsIkFwcCIsInJlbmRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwiY3R4IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwic3RvcmUiLCJkaXNwYXRjaCIsIkVORCIsInNhZ2FUYXNrIiwidG9Qcm9taXNlIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsU0FBTixTQUF3QkMsK0NBQXhCLENBQTZDO0FBcUJwQ0MsUUFBUCxHQUFnQjtBQUNkLFVBQU07QUFBRUMsZUFBRjtBQUFhQztBQUFiLFFBQTJCLEtBQUtDLEtBQXRDO0FBQ0Esd0JBQU8scUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUF4QjBDOztnQkFBdkNKLFMscUJBQzRCLE9BQU87QUFBRUcsV0FBRjtBQUFhRztBQUFiLENBQVAsS0FBMEM7QUFDeEU7QUFDQSxRQUFNRixTQUFTLHFCQUNURCxTQUFTLENBQUNJLGVBQVYsR0FDQSxNQUFNSixTQUFTLENBQUNJLGVBQVYsQ0FBMEJELEdBQTFCLENBRE4sR0FFQSxFQUhTLENBQWYsQ0FGd0UsQ0FReEU7OztBQUNBLE1BQUlBLEdBQUcsQ0FBQ0UsR0FBUixFQUFhO0FBQ1hGLE9BQUcsQ0FBQ0csS0FBSixDQUFVQyxRQUFWLENBQW1CQyw4Q0FBbkI7QUFDQSxVQUFPTCxHQUFHLENBQUNHLEtBQUwsQ0FBeUJHLFFBQXpCLENBQWtDQyxTQUFsQyxFQUFOO0FBQ0QsR0FadUUsQ0FjeEU7OztBQUNBLFNBQU87QUFDTFQ7QUFESyxHQUFQO0FBR0QsQzs7QUFRWVUsd0hBQU8sQ0FBQ0MsU0FBUixDQUFrQmYsU0FBbEIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCwgeyBBcHBJbml0aWFsUHJvcHMsIEFwcENvbnRleHQgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYmFzZS5jc3NcIjtcbmltcG9ydCBcIi4vdGVzdC5jc3NcIjtcbmltcG9ydCB7IFNhZ2FTdG9yZSwgd3JhcHBlciB9IGZyb20gXCIuLi9Db21wb25lbnRzL3N0b3JlXCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9MYXlvdXRzL0FwcExheW91dFwiO1xuXG5jbGFzcyBMYXdTeXN0ZW0gZXh0ZW5kcyBBcHA8QXBwSW5pdGlhbFByb3BzPiB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfTogQXBwQ29udGV4dCkgPT4ge1xuICAgIC8vIDEuIFdhaXQgZm9yIGFsbCBwYWdlIGFjdGlvbnMgdG8gZGlzcGF0Y2hcbiAgICBjb25zdCBwYWdlUHJvcHMgPSB7XG4gICAgICAuLi4oQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAgICAgICA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgICA6IHt9KSxcbiAgICB9O1xuXG4gICAgLy8gMi4gU3RvcCB0aGUgc2FnYSBpZiBvbiBzZXJ2ZXJcbiAgICBpZiAoY3R4LnJlcSkge1xuICAgICAgY3R4LnN0b3JlLmRpc3BhdGNoKEVORCk7XG4gICAgICBhd2FpdCAoY3R4LnN0b3JlIGFzIFNhZ2FTdG9yZSkuc2FnYVRhc2sudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgLy8gMy4gUmV0dXJuIHByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VQcm9wcyxcbiAgICB9O1xuICB9O1xuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChMYXdTeXN0ZW0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/test.css":
/*!************************!*\
  !*** ./pages/test.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL3Rlc3QuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.css\n");

/***/ }),

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lawData_lawData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawData/lawData */ \"./reducers/lawData/lawData.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"HYDRATE\"]:\n        console.log(\"HYDRATE\", action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  lawData: _lawData_lawData__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC50cz9jZTUzIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJsYXdEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbENDLE9BQUssRUFBRSxDQUFDQyxLQUFLLEdBQUcsRUFBVCxFQUFhQyxNQUFiLEtBQXdCO0FBQzdCLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFdBQUtDLDBEQUFMO0FBQ0VDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJKLE1BQXZCO0FBQ0EsK0NBQWFELEtBQWIsR0FBOEJDLE1BQU0sQ0FBQ0ssT0FBckM7O0FBQ0Y7QUFDRSxlQUFPTixLQUFQO0FBTEo7QUFPRCxHQVRpQztBQVVsQ08sbUVBQU9BO0FBVjJCLENBQUQsQ0FBbkM7QUFhZVYsMEVBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGxhd0RhdGEgZnJvbSBcIi4vbGF3RGF0YS9sYXdEYXRhXCI7XG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBIWURSQVRFOlxuICAgICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uKHN0YXRlIGFzIHt9KSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0sXG4gIGxhd0RhdGEsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.ts\n");

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

/***/ "./reducers/lawData/lawData.ts":
/*!*************************************!*\
  !*** ./reducers/lawData/lawData.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./reducers/lawData/actions.ts\");\n\n\nconst DummyUnit = {\n  unitNum: \"1.\",\n  unitContent: '1. \"검역감염병\"이란 다음 각 목의 어느 하나에 해당하는 것을 말한다.'\n};\nconst DummyColumn = {\n  columnContent: \"⑤ 제1항과 제2항에 따른 소독 및 감염병 매개체를 없애는 일은 보건복지부령으로 정하는 자격이 있는 자가 하여야 한다. <개정 2010.1.18>\",\n  columnNum: \"⑤ \",\n  columnRevisionType: \"y\",\n  units: [DummyUnit, DummyUnit, DummyUnit, DummyUnit]\n};\nconst DummyProvision = {\n  provision: \"전문\",\n  provisionChange: \"Y\",\n  provisionContent: \"제1조(목적) 이 법은 우리나라로 들어오거나 외국으로 나가는 운송수단, 사람 및 화물을 검역(檢疫)하는 절차와 감염병을 예방하기 위한 조치에 관한 사항을 규정하여 국내외로 감염병이 번지는 것을 방지함으로써 국민의 건강을 유지ㆍ보호하는 것을 목적으로 한다.\",\n  provisionEffectiveDate: \"20140919\",\n  provisionMoveAfter: \"000000\",\n  provisionMoveBefore: \"000000\",\n  provisionNum: \"2\",\n  provisionRevision: \"본조신설\",\n  provisionTitle: \"국제공인예방접종지정기관의 지정 등\",\n  columns: [DummyColumn, DummyColumn, DummyColumn, DummyColumn, DummyColumn]\n};\nconst DummyLawDetail = {\n  TeleNum: \"010-1234-1234\",\n  competentDepartmentCode: \"1613000\",\n  competentDepartmentName: \"국토교통부\",\n  effectiveDate: \"20210421\",\n  lawKorName: \"검역법\",\n  lawTypeCode: \"A0002\",\n  lawTypeSort: \"법률\",\n  proclamationDate: \"20201020\",\n  proclamationNum: \"17553\",\n  rivisionName: \"일부개정\",\n  statutoryAbbreviation: \" \",\n  statutoryId: \"001790\",\n  statutorySerialNumber: \"222563\",\n  provisions: [DummyProvision, DummyProvision, DummyProvision, DummyProvision]\n};\nconst DummyLawList = {\n  StatutoryHangul: \"검역법\",\n  competentDepartmentCode: \"1790387\",\n  competentDepartmentName: \"질병관리청\",\n  effectiveDate: \"20140919\",\n  proclamationDate: \"20140318\",\n  proclamationNum: \"12445\",\n  rivisionName: \"일부개정\",\n  statutoryId: \"001790\",\n  statutorySerialNumber: \"0017902014031812445\"\n};\nconst initialState = {\n  lawData: {\n    lawDetail: null,\n    lawList: null,\n    searchLawResultList: {\n      query: null,\n      searchLawResultList: null\n    }\n  },\n  loadingStates: {\n    isQuerying: false\n  },\n  metaStates: {\n    requestError: 0\n  }\n};\n\nconst lawDataReducer = (state = initialState, action) => {\n  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {\n    switch (action.type) {\n      case _actions__WEBPACK_IMPORTED_MODULE_1__[\"GET_RECENT_LAWLIST_REQUEST\"]:\n        {\n          draft.loadingStates.isQuerying = true;\n          break;\n        }\n\n      case _actions__WEBPACK_IMPORTED_MODULE_1__[\"GET_RECENT_LAWLIST_SUCCESS\"]:\n        {\n          draft.loadingStates.isQuerying = false;\n          draft.lawData.lawList = [DummyLawList, DummyLawList, DummyLawList, DummyLawList];\n          break;\n        }\n\n      case _actions__WEBPACK_IMPORTED_MODULE_1__[\"GET_RECENT_LAWLIST_FAILURE\"]:\n        {\n          draft.loadingStates.isQuerying = false;\n          break;\n        }\n\n      case _actions__WEBPACK_IMPORTED_MODULE_1__[\"GET_DETAIL_LAWDATA_REQUEST\"]:\n        {\n          draft.loadingStates.isQuerying = true;\n          break;\n        }\n\n      case _actions__WEBPACK_IMPORTED_MODULE_1__[\"GET_DETAIL_LAWDATA_SUCCESS\"]:\n        {\n          draft.loadingStates.isQuerying = false;\n          draft.lawData.lawDetail = DummyLawDetail;\n          break;\n        }\n\n      case _actions__WEBPACK_IMPORTED_MODULE_1__[\"GET_DETAIL_LAWDATA_FAILURE\"]:\n        {\n          draft.loadingStates.isQuerying = false;\n          break;\n        }\n\n      case _actions__WEBPACK_IMPORTED_MODULE_1__[\"QUERYING_LAWLIST_REQUEST\"]:\n        {\n          draft.loadingStates.isQuerying = true;\n          draft.lawData.searchLawResultList.query = action.parameter.query;\n          break;\n        }\n\n      case _actions__WEBPACK_IMPORTED_MODULE_1__[\"QUERYING_LAWLIST_SUCCESS\"]:\n        {\n          draft.loadingStates.isQuerying = false;\n          console.log(\"?\");\n          draft.lawData.searchLawResultList.searchLawResultList = [DummyLawList, DummyLawList, DummyLawList, DummyLawList];\n          break;\n        }\n\n      case _actions__WEBPACK_IMPORTED_MODULE_1__[\"QUERYING_LAWLIST_FAILURE\"]:\n        {\n          draft.loadingStates.isQuerying = false;\n          break;\n        }\n\n      default:\n        return draft;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lawDataReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9sYXdEYXRhL2xhd0RhdGEudHM/MzQ5OSJdLCJuYW1lcyI6WyJEdW1teVVuaXQiLCJ1bml0TnVtIiwidW5pdENvbnRlbnQiLCJEdW1teUNvbHVtbiIsImNvbHVtbkNvbnRlbnQiLCJjb2x1bW5OdW0iLCJjb2x1bW5SZXZpc2lvblR5cGUiLCJ1bml0cyIsIkR1bW15UHJvdmlzaW9uIiwicHJvdmlzaW9uIiwicHJvdmlzaW9uQ2hhbmdlIiwicHJvdmlzaW9uQ29udGVudCIsInByb3Zpc2lvbkVmZmVjdGl2ZURhdGUiLCJwcm92aXNpb25Nb3ZlQWZ0ZXIiLCJwcm92aXNpb25Nb3ZlQmVmb3JlIiwicHJvdmlzaW9uTnVtIiwicHJvdmlzaW9uUmV2aXNpb24iLCJwcm92aXNpb25UaXRsZSIsImNvbHVtbnMiLCJEdW1teUxhd0RldGFpbCIsIlRlbGVOdW0iLCJjb21wZXRlbnREZXBhcnRtZW50Q29kZSIsImNvbXBldGVudERlcGFydG1lbnROYW1lIiwiZWZmZWN0aXZlRGF0ZSIsImxhd0tvck5hbWUiLCJsYXdUeXBlQ29kZSIsImxhd1R5cGVTb3J0IiwicHJvY2xhbWF0aW9uRGF0ZSIsInByb2NsYW1hdGlvbk51bSIsInJpdmlzaW9uTmFtZSIsInN0YXR1dG9yeUFiYnJldmlhdGlvbiIsInN0YXR1dG9yeUlkIiwic3RhdHV0b3J5U2VyaWFsTnVtYmVyIiwicHJvdmlzaW9ucyIsIkR1bW15TGF3TGlzdCIsIlN0YXR1dG9yeUhhbmd1bCIsImluaXRpYWxTdGF0ZSIsImxhd0RhdGEiLCJsYXdEZXRhaWwiLCJsYXdMaXN0Iiwic2VhcmNoTGF3UmVzdWx0TGlzdCIsInF1ZXJ5IiwibG9hZGluZ1N0YXRlcyIsImlzUXVlcnlpbmciLCJtZXRhU3RhdGVzIiwicmVxdWVzdEVycm9yIiwibGF3RGF0YVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJHRVRfUkVDRU5UX0xBV0xJU1RfUkVRVUVTVCIsIkdFVF9SRUNFTlRfTEFXTElTVF9TVUNDRVNTIiwiR0VUX1JFQ0VOVF9MQVdMSVNUX0ZBSUxVUkUiLCJHRVRfREVUQUlMX0xBV0RBVEFfUkVRVUVTVCIsIkdFVF9ERVRBSUxfTEFXREFUQV9TVUNDRVNTIiwiR0VUX0RFVEFJTF9MQVdEQVRBX0ZBSUxVUkUiLCJRVUVSWUlOR19MQVdMSVNUX1JFUVVFU1QiLCJwYXJhbWV0ZXIiLCJRVUVSWUlOR19MQVdMSVNUX1NVQ0NFU1MiLCJjb25zb2xlIiwibG9nIiwiUVVFUllJTkdfTEFXTElTVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFZQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEJDLFNBQU8sRUFBRSxJQURPO0FBRWhCQyxhQUFXLEVBQ1Q7QUFIYyxDQUFsQjtBQU1BLE1BQU1DLFdBQVcsR0FBRztBQUNsQkMsZUFBYSxFQUNYLG1GQUZnQjtBQUdsQkMsV0FBUyxFQUFFLElBSE87QUFJbEJDLG9CQUFrQixFQUFFLEdBSkY7QUFLbEJDLE9BQUssRUFBRSxDQUFDUCxTQUFELEVBQVlBLFNBQVosRUFBdUJBLFNBQXZCLEVBQWtDQSxTQUFsQztBQUxXLENBQXBCO0FBUUEsTUFBTVEsY0FBYyxHQUFHO0FBQ3JCQyxXQUFTLEVBQUUsSUFEVTtBQUVyQkMsaUJBQWUsRUFBRSxHQUZJO0FBR3JCQyxrQkFBZ0IsRUFDZCxnSkFKbUI7QUFLckJDLHdCQUFzQixFQUFFLFVBTEg7QUFNckJDLG9CQUFrQixFQUFFLFFBTkM7QUFPckJDLHFCQUFtQixFQUFFLFFBUEE7QUFRckJDLGNBQVksRUFBRSxHQVJPO0FBU3JCQyxtQkFBaUIsRUFBRSxNQVRFO0FBVXJCQyxnQkFBYyxFQUFFLG9CQVZLO0FBV3JCQyxTQUFPLEVBQUUsQ0FBQ2YsV0FBRCxFQUFjQSxXQUFkLEVBQTJCQSxXQUEzQixFQUF3Q0EsV0FBeEMsRUFBcURBLFdBQXJEO0FBWFksQ0FBdkI7QUFjQSxNQUFNZ0IsY0FBYyxHQUFHO0FBQ3JCQyxTQUFPLEVBQUUsZUFEWTtBQUVyQkMseUJBQXVCLEVBQUUsU0FGSjtBQUdyQkMseUJBQXVCLEVBQUUsT0FISjtBQUlyQkMsZUFBYSxFQUFFLFVBSk07QUFLckJDLFlBQVUsRUFBRSxLQUxTO0FBTXJCQyxhQUFXLEVBQUUsT0FOUTtBQU9yQkMsYUFBVyxFQUFFLElBUFE7QUFRckJDLGtCQUFnQixFQUFFLFVBUkc7QUFTckJDLGlCQUFlLEVBQUUsT0FUSTtBQVVyQkMsY0FBWSxFQUFFLE1BVk87QUFXckJDLHVCQUFxQixFQUFFLEdBWEY7QUFZckJDLGFBQVcsRUFBRSxRQVpRO0FBYXJCQyx1QkFBcUIsRUFBRSxRQWJGO0FBY3JCQyxZQUFVLEVBQUUsQ0FBQ3pCLGNBQUQsRUFBaUJBLGNBQWpCLEVBQWlDQSxjQUFqQyxFQUFpREEsY0FBakQ7QUFkUyxDQUF2QjtBQWlCQSxNQUFNMEIsWUFBWSxHQUFHO0FBQ25CQyxpQkFBZSxFQUFFLEtBREU7QUFFbkJkLHlCQUF1QixFQUFFLFNBRk47QUFHbkJDLHlCQUF1QixFQUFFLE9BSE47QUFJbkJDLGVBQWEsRUFBRSxVQUpJO0FBS25CSSxrQkFBZ0IsRUFBRSxVQUxDO0FBTW5CQyxpQkFBZSxFQUFFLE9BTkU7QUFPbkJDLGNBQVksRUFBRSxNQVBLO0FBUW5CRSxhQUFXLEVBQUUsUUFSTTtBQVNuQkMsdUJBQXFCLEVBQUU7QUFUSixDQUFyQjtBQVlBLE1BQU1JLFlBQTBCLEdBQUc7QUFDakNDLFNBQU8sRUFBRTtBQUNQQyxhQUFTLEVBQUUsSUFESjtBQUVQQyxXQUFPLEVBQUUsSUFGRjtBQUdQQyx1QkFBbUIsRUFBRTtBQUNuQkMsV0FBSyxFQUFFLElBRFk7QUFFbkJELHlCQUFtQixFQUFFO0FBRkY7QUFIZCxHQUR3QjtBQVNqQ0UsZUFBYSxFQUFFO0FBQ2JDLGNBQVUsRUFBRTtBQURDLEdBVGtCO0FBWWpDQyxZQUFVLEVBQUU7QUFDVkMsZ0JBQVksRUFBRTtBQURKO0FBWnFCLENBQW5DOztBQWlCQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHWCxZQUFULEVBQXVCWSxNQUF2QixLQUE4QztBQUNuRSxTQUFPQyw0Q0FBTyxDQUFDRixLQUFELEVBQVNHLEtBQUQsSUFBVztBQUMvQixZQUFRRixNQUFNLENBQUNHLElBQWY7QUFDRSxXQUFLQyxtRUFBTDtBQUFpQztBQUMvQkYsZUFBSyxDQUFDUixhQUFOLENBQW9CQyxVQUFwQixHQUFpQyxJQUFqQztBQUNBO0FBQ0Q7O0FBQ0QsV0FBS1UsbUVBQUw7QUFBaUM7QUFDL0JILGVBQUssQ0FBQ1IsYUFBTixDQUFvQkMsVUFBcEIsR0FBaUMsS0FBakM7QUFDQU8sZUFBSyxDQUFDYixPQUFOLENBQWNFLE9BQWQsR0FBd0IsQ0FDdEJMLFlBRHNCLEVBRXRCQSxZQUZzQixFQUd0QkEsWUFIc0IsRUFJdEJBLFlBSnNCLENBQXhCO0FBTUE7QUFDRDs7QUFDRCxXQUFLb0IsbUVBQUw7QUFBaUM7QUFDL0JKLGVBQUssQ0FBQ1IsYUFBTixDQUFvQkMsVUFBcEIsR0FBaUMsS0FBakM7QUFDQTtBQUNEOztBQUVELFdBQUtZLG1FQUFMO0FBQWlDO0FBQy9CTCxlQUFLLENBQUNSLGFBQU4sQ0FBb0JDLFVBQXBCLEdBQWlDLElBQWpDO0FBQ0E7QUFDRDs7QUFDRCxXQUFLYSxtRUFBTDtBQUFpQztBQUMvQk4sZUFBSyxDQUFDUixhQUFOLENBQW9CQyxVQUFwQixHQUFpQyxLQUFqQztBQUNBTyxlQUFLLENBQUNiLE9BQU4sQ0FBY0MsU0FBZCxHQUEwQm5CLGNBQTFCO0FBQ0E7QUFDRDs7QUFDRCxXQUFLc0MsbUVBQUw7QUFBaUM7QUFDL0JQLGVBQUssQ0FBQ1IsYUFBTixDQUFvQkMsVUFBcEIsR0FBaUMsS0FBakM7QUFDQTtBQUNEOztBQUVELFdBQUtlLGlFQUFMO0FBQStCO0FBQzdCUixlQUFLLENBQUNSLGFBQU4sQ0FBb0JDLFVBQXBCLEdBQWlDLElBQWpDO0FBQ0FPLGVBQUssQ0FBQ2IsT0FBTixDQUFjRyxtQkFBZCxDQUFrQ0MsS0FBbEMsR0FBMENPLE1BQU0sQ0FBQ1csU0FBUCxDQUFpQmxCLEtBQTNEO0FBQ0E7QUFDRDs7QUFDRCxXQUFLbUIsaUVBQUw7QUFBK0I7QUFDN0JWLGVBQUssQ0FBQ1IsYUFBTixDQUFvQkMsVUFBcEIsR0FBaUMsS0FBakM7QUFDQWtCLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0FaLGVBQUssQ0FBQ2IsT0FBTixDQUFjRyxtQkFBZCxDQUFrQ0EsbUJBQWxDLEdBQXdELENBQ3RETixZQURzRCxFQUV0REEsWUFGc0QsRUFHdERBLFlBSHNELEVBSXREQSxZQUpzRCxDQUF4RDtBQU1BO0FBQ0Q7O0FBQ0QsV0FBSzZCLGlFQUFMO0FBQStCO0FBQzdCYixlQUFLLENBQUNSLGFBQU4sQ0FBb0JDLFVBQXBCLEdBQWlDLEtBQWpDO0FBQ0E7QUFDRDs7QUFFRDtBQUNFLGVBQU9PLEtBQVA7QUF4REo7QUEwREQsR0EzRGEsQ0FBZDtBQTRERCxDQTdERDs7QUErRGVKLDZFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvbGF3RGF0YS9sYXdEYXRhLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQgeyBsYXdEYXRhU3RvcmUsIGxhd0FjdGlvbnMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQge1xuICBHRVRfUkVDRU5UX0xBV0xJU1RfUkVRVUVTVCxcbiAgR0VUX1JFQ0VOVF9MQVdMSVNUX1NVQ0NFU1MsXG4gIEdFVF9SRUNFTlRfTEFXTElTVF9GQUlMVVJFLFxuICBHRVRfREVUQUlMX0xBV0RBVEFfUkVRVUVTVCxcbiAgR0VUX0RFVEFJTF9MQVdEQVRBX1NVQ0NFU1MsXG4gIEdFVF9ERVRBSUxfTEFXREFUQV9GQUlMVVJFLFxuICBRVUVSWUlOR19MQVdMSVNUX1JFUVVFU1QsXG4gIFFVRVJZSU5HX0xBV0xJU1RfU1VDQ0VTUyxcbiAgUVVFUllJTkdfTEFXTElTVF9GQUlMVVJFLFxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmNvbnN0IER1bW15VW5pdCA9IHtcbiAgdW5pdE51bTogXCIxLlwiLFxuICB1bml0Q29udGVudDpcbiAgICAnMS4gXCLqsoDsl63qsJDsl7zrs5FcIuydtOuegCDri6TsnYwg6rCBIOuqqeydmCDslrTripAg7ZWY64KY7JeQIO2VtOuLue2VmOuKlCDqsoPsnYQg66eQ7ZWc64ukLicsXG59O1xuXG5jb25zdCBEdW1teUNvbHVtbiA9IHtcbiAgY29sdW1uQ29udGVudDpcbiAgICBcIuKRpCDsoJwx7ZWt6rO8IOygnDLtla3sl5Ag65Sw66W4IOyGjOuPhSDrsI8g6rCQ7Je867ORIOunpOqwnOyytOulvCDsl4bslaDripQg7J287J2AIOuztOqxtOuzteyngOu2gOugueycvOuhnCDsoJXtlZjripQg7J6Q6rKp7J20IOyeiOuKlCDsnpDqsIAg7ZWY7Jes7JW8IO2VnOuLpC4gPOqwnOyglSAyMDEwLjEuMTg+XCIsXG4gIGNvbHVtbk51bTogXCLikaQgXCIsXG4gIGNvbHVtblJldmlzaW9uVHlwZTogXCJ5XCIsXG4gIHVuaXRzOiBbRHVtbXlVbml0LCBEdW1teVVuaXQsIER1bW15VW5pdCwgRHVtbXlVbml0XSxcbn07XG5cbmNvbnN0IER1bW15UHJvdmlzaW9uID0ge1xuICBwcm92aXNpb246IFwi7KCE66y4XCIsXG4gIHByb3Zpc2lvbkNoYW5nZTogXCJZXCIsXG4gIHByb3Zpc2lvbkNvbnRlbnQ6XG4gICAgXCLsoJwx7KGwKOuqqeyggSkg7J20IOuyleydgCDsmrDrpqzrgpjrnbzroZwg65Ok7Ja07Jik6rGw64KYIOyZuOq1reycvOuhnCDrgpjqsIDripQg7Jq07Iah7IiY64uoLCDsgqzrnowg67CPIO2ZlOusvOydhCDqsoDsl60o5qqi55arKe2VmOuKlCDsoIjssKjsmYAg6rCQ7Je867OR7J2EIOyYiOuwqe2VmOq4sCDsnITtlZwg7KGw7LmY7JeQIOq0gO2VnCDsgqztla3snYQg6rec7KCV7ZWY7JesIOq1reuCtOyZuOuhnCDqsJDsl7zrs5HsnbQg67KI7KeA64qUIOqyg+ydhCDrsKnsp4DtlajsnLzroZzsjagg6rWt66+87J2YIOqxtOqwleydhCDsnKDsp4Djho3rs7TtmLjtlZjripQg6rKD7J2EIOuqqeyggeycvOuhnCDtlZzri6QuXCIsXG4gIHByb3Zpc2lvbkVmZmVjdGl2ZURhdGU6IFwiMjAxNDA5MTlcIixcbiAgcHJvdmlzaW9uTW92ZUFmdGVyOiBcIjAwMDAwMFwiLFxuICBwcm92aXNpb25Nb3ZlQmVmb3JlOiBcIjAwMDAwMFwiLFxuICBwcm92aXNpb25OdW06IFwiMlwiLFxuICBwcm92aXNpb25SZXZpc2lvbjogXCLrs7jsobDsi6DshKRcIixcbiAgcHJvdmlzaW9uVGl0bGU6IFwi6rWt7KCc6rO17J247JiI67Cp7KCR7KKF7KeA7KCV6riw6rSA7J2YIOyngOyglSDrk7FcIixcbiAgY29sdW1uczogW0R1bW15Q29sdW1uLCBEdW1teUNvbHVtbiwgRHVtbXlDb2x1bW4sIER1bW15Q29sdW1uLCBEdW1teUNvbHVtbl0sXG59O1xuXG5jb25zdCBEdW1teUxhd0RldGFpbCA9IHtcbiAgVGVsZU51bTogXCIwMTAtMTIzNC0xMjM0XCIsXG4gIGNvbXBldGVudERlcGFydG1lbnRDb2RlOiBcIjE2MTMwMDBcIixcbiAgY29tcGV0ZW50RGVwYXJ0bWVudE5hbWU6IFwi6rWt7Yag6rWQ7Ya167aAXCIsXG4gIGVmZmVjdGl2ZURhdGU6IFwiMjAyMTA0MjFcIixcbiAgbGF3S29yTmFtZTogXCLqsoDsl63rspVcIixcbiAgbGF3VHlwZUNvZGU6IFwiQTAwMDJcIixcbiAgbGF3VHlwZVNvcnQ6IFwi67KV66WgXCIsXG4gIHByb2NsYW1hdGlvbkRhdGU6IFwiMjAyMDEwMjBcIixcbiAgcHJvY2xhbWF0aW9uTnVtOiBcIjE3NTUzXCIsXG4gIHJpdmlzaW9uTmFtZTogXCLsnbzrtoDqsJzsoJVcIixcbiAgc3RhdHV0b3J5QWJicmV2aWF0aW9uOiBcIiBcIixcbiAgc3RhdHV0b3J5SWQ6IFwiMDAxNzkwXCIsXG4gIHN0YXR1dG9yeVNlcmlhbE51bWJlcjogXCIyMjI1NjNcIixcbiAgcHJvdmlzaW9uczogW0R1bW15UHJvdmlzaW9uLCBEdW1teVByb3Zpc2lvbiwgRHVtbXlQcm92aXNpb24sIER1bW15UHJvdmlzaW9uXSxcbn07XG5cbmNvbnN0IER1bW15TGF3TGlzdCA9IHtcbiAgU3RhdHV0b3J5SGFuZ3VsOiBcIuqygOyXreuylVwiLFxuICBjb21wZXRlbnREZXBhcnRtZW50Q29kZTogXCIxNzkwMzg3XCIsXG4gIGNvbXBldGVudERlcGFydG1lbnROYW1lOiBcIuyniOuzkeq0gOumrOyyrVwiLFxuICBlZmZlY3RpdmVEYXRlOiBcIjIwMTQwOTE5XCIsXG4gIHByb2NsYW1hdGlvbkRhdGU6IFwiMjAxNDAzMThcIixcbiAgcHJvY2xhbWF0aW9uTnVtOiBcIjEyNDQ1XCIsXG4gIHJpdmlzaW9uTmFtZTogXCLsnbzrtoDqsJzsoJVcIixcbiAgc3RhdHV0b3J5SWQ6IFwiMDAxNzkwXCIsXG4gIHN0YXR1dG9yeVNlcmlhbE51bWJlcjogXCIwMDE3OTAyMDE0MDMxODEyNDQ1XCIsXG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IGxhd0RhdGFTdG9yZSA9IHtcbiAgbGF3RGF0YToge1xuICAgIGxhd0RldGFpbDogbnVsbCxcbiAgICBsYXdMaXN0OiBudWxsLFxuICAgIHNlYXJjaExhd1Jlc3VsdExpc3Q6IHtcbiAgICAgIHF1ZXJ5OiBudWxsLFxuICAgICAgc2VhcmNoTGF3UmVzdWx0TGlzdDogbnVsbCxcbiAgICB9LFxuICB9LFxuICBsb2FkaW5nU3RhdGVzOiB7XG4gICAgaXNRdWVyeWluZzogZmFsc2UsXG4gIH0sXG4gIG1ldGFTdGF0ZXM6IHtcbiAgICByZXF1ZXN0RXJyb3I6IDAsXG4gIH0sXG59O1xuXG5jb25zdCBsYXdEYXRhUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBsYXdBY3Rpb25zKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEdFVF9SRUNFTlRfTEFXTElTVF9SRVFVRVNUOiB7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdTdGF0ZXMuaXNRdWVyeWluZyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBHRVRfUkVDRU5UX0xBV0xJU1RfU1VDQ0VTUzoge1xuICAgICAgICBkcmFmdC5sb2FkaW5nU3RhdGVzLmlzUXVlcnlpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGF3RGF0YS5sYXdMaXN0ID0gW1xuICAgICAgICAgIER1bW15TGF3TGlzdCxcbiAgICAgICAgICBEdW1teUxhd0xpc3QsXG4gICAgICAgICAgRHVtbXlMYXdMaXN0LFxuICAgICAgICAgIER1bW15TGF3TGlzdCxcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIEdFVF9SRUNFTlRfTEFXTElTVF9GQUlMVVJFOiB7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdTdGF0ZXMuaXNRdWVyeWluZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBHRVRfREVUQUlMX0xBV0RBVEFfUkVRVUVTVDoge1xuICAgICAgICBkcmFmdC5sb2FkaW5nU3RhdGVzLmlzUXVlcnlpbmcgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgR0VUX0RFVEFJTF9MQVdEQVRBX1NVQ0NFU1M6IHtcbiAgICAgICAgZHJhZnQubG9hZGluZ1N0YXRlcy5pc1F1ZXJ5aW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxhd0RhdGEubGF3RGV0YWlsID0gRHVtbXlMYXdEZXRhaWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBHRVRfREVUQUlMX0xBV0RBVEFfRkFJTFVSRToge1xuICAgICAgICBkcmFmdC5sb2FkaW5nU3RhdGVzLmlzUXVlcnlpbmcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgUVVFUllJTkdfTEFXTElTVF9SRVFVRVNUOiB7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdTdGF0ZXMuaXNRdWVyeWluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lmxhd0RhdGEuc2VhcmNoTGF3UmVzdWx0TGlzdC5xdWVyeSA9IGFjdGlvbi5wYXJhbWV0ZXIucXVlcnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBRVUVSWUlOR19MQVdMSVNUX1NVQ0NFU1M6IHtcbiAgICAgICAgZHJhZnQubG9hZGluZ1N0YXRlcy5pc1F1ZXJ5aW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiP1wiKTtcbiAgICAgICAgZHJhZnQubGF3RGF0YS5zZWFyY2hMYXdSZXN1bHRMaXN0LnNlYXJjaExhd1Jlc3VsdExpc3QgPSBbXG4gICAgICAgICAgRHVtbXlMYXdMaXN0LFxuICAgICAgICAgIER1bW15TGF3TGlzdCxcbiAgICAgICAgICBEdW1teUxhd0xpc3QsXG4gICAgICAgICAgRHVtbXlMYXdMaXN0LFxuICAgICAgICBdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUVVFUllJTkdfTEFXTElTVF9GQUlMVVJFOiB7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdTdGF0ZXMuaXNRdWVyeWluZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRyYWZ0O1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsYXdEYXRhUmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/lawData/lawData.ts\n");

/***/ }),

/***/ "./sagas/index.ts":
/*!************************!*\
  !*** ./sagas/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = \"http://localhost:3200/api\";\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC50cz9lZjAyIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicm9vdFNhZ2EiLCJhbGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCLDJCQUF6QjtBQUVlLFVBQVVDLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxFQUFELENBQVQ7QUFDRCIsImZpbGUiOiIuL3NhZ2FzL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMyMDAvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtdKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/index.ts\n");

/***/ }),

/***/ "./styles/base.css":
/*!*************************!*\
  !*** ./styles/base.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9iYXNlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/base.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiPzc4ZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiaW1tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///immer\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });