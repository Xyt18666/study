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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.json */ \"./src/index.json\");\nvar _index_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./index.json */ \"./src/index.json\", 1);\n/*\r\nindex.js  此文件是webpack的入口文件\r\n\r\n------------------------------------------------\r\n\r\nnpm init  初始化 文件\r\n写 一个 名字  其他默认 （此时生成了package.json）\r\n\r\nnpm i webpack webpack-cli -g    全局安 webpack webpack-cli\r\nnpm i webpack webpack-cli -D    在进行本地安装 （此时生成 package-lock.json）\r\n\r\nsrc : 项目源代码目录\r\nbuild ： 输出的目录\r\n\r\n运行执行：\r\n    开发环境指令： webpack ./src/index.js -o ./build/built.js --mode=development\r\n                webpack会以  index.js 为入口文件 开始打包 ， 打包好后输出到 build 下的 xx文件\r\n    \r\n                打包后输出： Hash: fec77c639c91d1b42a26\r\n                            Version: webpack 4.42.0\r\n                            Time: 247ms\r\n                            Built at: 2020/03/21 下午5:56:31\r\n                            Asset      Size  Chunks             Chunk Names\r\n                            built.js  4.54 KiB    main  [emitted]  main       \r\n                            Entrypoint main = built.js\r\n                            [./src/index.js] 744 bytes {main} [built]\r\n\r\n                此时 在 build 下生成了 打包好的 文件\r\n\r\n\r\n    生成环境指令：webpack ./src/index.js -o ./build/built.js --mode=production\r\n                压缩版的\r\n\r\n\r\n    webpack能识别 js 和 json 文件 ，但是并不能识别 css img less 等其他资源\r\n*/\r\n\r\n\r\n\r\n\r\nfunction add(x,y){\r\n    return x + y \r\n}\r\nconsole.log(add(1,2))\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.json":
/*!************************!*\
  !*** ./src/index.json ***!
  \************************/
/*! exports provided: name, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"小黑\\\"}\");\n\n//# sourceURL=webpack:///./src/index.json?");

/***/ })

/******/ });