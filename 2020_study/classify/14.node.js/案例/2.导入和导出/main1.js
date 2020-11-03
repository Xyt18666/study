

let b = 7;   
let e = 9;
console.log(b)

// 通过 exports 导出某某
exports.b = b
module.exports.e = e

// exports == module.exports

// 系统查找的是 module.exports


// exports 只能导出单个值
// module.exports  导出对象 （ps 只能导出一个）


// 一个模块中 的代码 仅在模块 第一次 被使用 时 执行 一次