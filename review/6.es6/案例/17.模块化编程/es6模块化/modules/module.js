let c = "cc";
let a = "aa";

function fn() {
  console.log(123);
}
class Clas {
  constructor() {}
}

export let b = "vv";
//导出某某模块

export { c, a, fn, Clas as Lei };
// 使用 as  重命名   原名 as 新名 ，抛出 和 引用时都能使用

//可以抛出函数 变量 类 ...
//导入导出时不允许 存在 执行代码

let defaultS = "默认导出";
export default {
  defaultS,
};
