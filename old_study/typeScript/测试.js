console.log("222");
//通过编写ts, 然后编译 成js
//数据类型
var str = "str";
var num = 12;
var bol = true;
var flag = undefined;
var nul = null;
//空值一般采用void来表示，void可以表示变量，也可表示函数返回数
var callBack = function () {
    var a = "aa";
};
//任意值  any
var num2 = 1;
num2 = true;
var num3;
// 等同于 let num3:any
//类型推断
var b = 1;
//当我们给变量赋值初始值的时候，如果没有指定类型，根据初始值倒推类型，所有赋值的时候只能赋值为初始的数据类型
//联合类型   |
var strAnum = "2";
strAnum = "ererere";
var obj1;
obj1 = {
    name: "小明",
    age: 18
};
var obj2;
obj2 = {
    name: "小红",
    age: 22
};
obj2 = {
    name: "小黑"
};
var obj3 = {
    name: "dddd",
    age: 16,
    ismary: true
};
var obj4 = {
    name: "dddd2222",
    age: 16222
};
obj4.age = 11;
