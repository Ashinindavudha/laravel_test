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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\xampp\\htdocs\\test_project\\resources\\js\\app.js: Unexpected token (11:12)\n\n   9 | Vue.use(ElementUI, {locale})\n  10 | Vue.use(VueRouter)\n> 11 | import from 'moment'\n     |             ^\n  12 | Object.defineProperty(Vue.prototype, '$moment', { \n  13 | \tget(){\n  14 | \t\treturn this.$root.$moment\n    at Parser.raise (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:7012:17)\n    at Parser.unexpected (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:8405:16)\n    at Parser.expectContextual (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:8371:41)\n    at Parser.parseImport (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:12028:12)\n    at Parser.parseStatementContent (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:10788:27)\n    at Parser.parseStatement (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:11266:25)\n    at Parser.parseBlockBody (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:11253:10)\n    at Parser.parseTopLevel (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:10621:10)\n    at Parser.parse (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:12131:10)\n    at parse (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\parser\\lib\\index.js:12182:38)\n    at parser (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:187:34)\n    at normalizeFile (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:113:11)\n    at runSync (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)\n    at runAsync (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:14)\n    at process.nextTick (C:\\xampp\\htdocs\\test_project\\node_modules\\@babel\\core\\lib\\transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\test_project\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\test_project\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });