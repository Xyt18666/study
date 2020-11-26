var a = 10;
var b = 30;
global.b = 20;

console.log(a);

// module.exports = a;

module.exports.d = { a };
// exports 只能导出单个值
// module.exports  导出对象 （ps 只能导出一个）
