function size5(a, b) {
    return a + b + "";
}
var isNum3 = size5(1, 2);
// 像这种情况 ts 会推断错误为 字符串
function size3(a, b) {
    // return a + b + "";
    return a + b;
}
var isNum4 = size3(1, 2);
// 为函数返回值添加注解,此时 return a + b + "" 会报错
function seyHello() {
    console.log("xxx");
    // return ""
}
// 返回空 
function errF() {
    throw new Error();
    console.log(111);
}
// 永远执行不完
function add(_a) {
    var one = _a.one, tow = _a.tow;
    return one + tow;
}
var adds = add({ one: 1, tow: 2 });
// 函数参数为对象时定义类型
