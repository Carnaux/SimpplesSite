module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Bar/index.js":
/*!*********************************!*\
  !*** ./components/Bar/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Bar/styles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Bar() {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: 0.05
  }, __jsx("span", null, "Simples")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: 0.1
  }, __jsx("span", null, "Pr\xE1tico")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: 0.15
  }, __jsx("span", null, "Barato")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: 0.05
  }, __jsx("span", null, "Util")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: 0.1
  }, __jsx("span", null, "Acessivel")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: 0.15
  }, __jsx("span", null, "Desempenho")));
}

/***/ }),

/***/ "./components/Bar/styles.js":
/*!**********************************!*\
  !*** ./components/Bar/styles.js ***!
  \**********************************/
/*! exports provided: Wrapper, Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-19zutq9-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;width:100%;@media(max-width:1020px){grid-template-columns:1fr 1fr 1fr;}@media(max-width:640px){grid-template-columns:1fr;}"]);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Box",
  componentId: "sc-19zutq9-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:200px;width:100%;background:", ";span{color:#fff;font-size:20px;}"], props => Object(polished__WEBPACK_IMPORTED_MODULE_1__["lighten"])(props.color, '#1C4964'));

/***/ }),

/***/ "./components/Content/index.js":
/*!*************************************!*\
  !*** ./components/Content/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Content/styles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Content() {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("div", {
    className: "row"
  }, __jsx("div", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem dolorem, vel, illo deserunt, earum eos dolore ab aperiam nemo harum? Ab ipsum saepe, asperiores voluptates rerum et cum voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem dolorem, vel, illo deserunt, earum eos dolore ab aperiam nemo harum? Ab ipsum saepe, asperiores voluptates rerum et cum voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem dolorem, vel, illo deserunt, earum eos dolore ab aperiam nemo harum? Ab ipsum saepe, asperiores voluptates rerum et cum voluptas?"), __jsx("div", {
    className: "box"
  })), __jsx("div", {
    className: "row"
  }, __jsx("div", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem dolorem, vel, illo deserunt, earum eos dolore ab aperiam nemo harum? Ab ipsum saepe, asperiores voluptates rerum et cum voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem dolorem, vel, illo deserunt, earum eos dolore ab aperiam nemo harum? Ab ipsum saepe, asperiores voluptates rerum et cum voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem dolorem, vel, illo deserunt, earum eos dolore ab aperiam nemo harum? Ab ipsum saepe, asperiores voluptates rerum et cum voluptas?"), __jsx("div", {
    className: "box"
  })), __jsx("div", {
    className: "row"
  }, __jsx("div", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem dolorem, vel, illo deserunt, earum eos dolore ab aperiam nemo harum? Ab ipsum saepe, asperiores voluptates rerum et cum voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem dolorem, vel, illo deserunt, earum eos dolore ab aperiam nemo harum? Ab ipsum saepe, asperiores voluptates rerum et cum voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem dolorem, vel, illo deserunt, earum eos dolore ab aperiam nemo harum? Ab ipsum saepe, asperiores voluptates rerum et cum voluptas?"), __jsx("div", {
    className: "box"
  })));
}

/***/ }),

/***/ "./components/Content/styles.js":
/*!**************************************!*\
  !*** ./components/Content/styles.js ***!
  \**************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-12h9ndb-0"
})(["max-width:1020px;margin:0 auto;display:flex;flex-direction:column;div.row{padding:20px 0;display:flex;border-bottom:1px solid #ccc;align-items:center;&:nth-child(2){flex-direction:row-reverse;}div{margin:0 10px;width:50%;text-align:justify;}div.box{background:blue;display:block;height:300px;border-radius:4px;}@media(max-width:1020px){flex-direction:column-reverse !important;border:0;div{width:90%;}.box{margin-bottom:15px;}}}"]);

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Header/styles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Header() {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("h1", null, "SIMPPLES"), __jsx("span", null, "Sistema para Monitoramento de Paciente e  Preven\xE7\xE3o de Les\xE3o por PreSs\xE3o"));
}

/***/ }),

/***/ "./components/Header/styles.js":
/*!*************************************!*\
  !*** ./components/Header/styles.js ***!
  \*************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-18j0hbw-0"
})(["width:100%;height:500px;display:flex;justify-content:center;align-items:center;flex-direction:column;background:linear-gradient(#1C4964,#3D6F87);h1{color:#fff;font-size:60px;font-weight:300;}span{color:#EDEDEA;text-align:center;}"]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content */ "./components/Content/index.js");
/* harmony import */ var _components_Bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Bar */ "./components/Bar/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Simpples")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_Bar__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/alekt/Projetos/SimpplesSite/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map