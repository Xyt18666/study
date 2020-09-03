// import { a as aa, b, c, fn, Lei } from "./modules/module.js";
//引入 某某模块

// console.log(aa, b, c, fn, Lei);

import * as all from "./modules/module.js"; //变为一个对象
// import *as 名字 from '路径'     变为一个对象

console.log(all);


//使用 babel 为 es6转码 为 es 
//在 终端 执行 js文件