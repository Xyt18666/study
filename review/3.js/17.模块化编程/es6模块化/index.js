"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var all = _interopRequireWildcard(require("./modules/module.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { a as aa, b, c, fn, Lei } from "./modules/module.js";
//引入 某某模块
// console.log(aa, b, c, fn, Lei);
//变为一个对象
// import *as 名字 from '路径'     变为一个对象
console.log(all);
/*

使用 babel 为 es6转码 为 es
在 终端 执行 js文件

创建 .babelrc 文件

初始化 package.json
    npm init    

安装 babel
npm install --save-dev @babel/core

安装 cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

安装转码规则 preset-env
cnpm install --save-dev @babel/preset-env

安装 babel-cli
cnpm install --save-dev @babel/cli

安装 babel-node
cnpm install --save-dev @babel/node


命令行运行 npx babel-node main.js


转为se5输出文件 npx babel main.js -o index.js


*/
