var arr = [1, "3", true];
// 通过推断自动 arr: (string | number | boolean)[]
var arr2 = [1, 4, 55, 5];
// 为数组添加注解
var arr3 = ["1,4,55,5", "asd"];
// 为数组添加注解
var arr4 = [1, "3", true];
// 为数组添加多类型注解
var arr5 = [
    {
        name: "sss",
        age: 14,
    },
];
var arr6 = [
    {
        name: "sss",
        age: 14,
    },
];
// 类型别名
