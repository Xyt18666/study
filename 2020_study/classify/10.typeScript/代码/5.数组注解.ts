let arr = [1, "3", true];
// 通过推断自动 arr: (string | number | boolean)[]

let arr2: number[] = [1, 4, 55, 5];
// 为数组添加注解

let arr3: string[] = ["1,4,55,5", "asd"];
// 为数组添加注解

let arr4: (string | number | boolean)[] = [1, "3", true];
// 为数组添加多类型注解

let arr5: { name: string; age: number }[] = [
    {
        name: "sss",
        age: 14,
    },
];
// 为数组中的对象添加注解

type lady = { name: string; age: number };
let arr6: lady[] = [
    {
        name: "sss",
        age: 14,
    },
];
// 类型别名
