define(function (require, exports, module) {
  let $ = require("jq");
  console.log($);
  module.exports = {
    $,
  };
});
//定义一个依赖 jq 的模块
