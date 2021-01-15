seajs.config({
  base: "./models/",
  alis: {
    date: "date.js",
    $: "jq.js",
    math: "math.js",

    mq: "1.js",
  },
});

define(function (require, exports, module) {
  //引入模块
  let date = require("date");
  console.log(date.getDate());

  let sum = require("math");
  console.log(sum);
});

//按需加载
