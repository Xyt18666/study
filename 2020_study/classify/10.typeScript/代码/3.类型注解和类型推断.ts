let counts: number;
counts = 18;
// 类型注解

let counts2: number = 19;
// 类型推断

let a = 1;
let b = 2;
let c = a + b;
// 此处并没有添加注解 ，但是通过推断 出为 number类型

function size(a,b){
    return a+b
}
let isNum = size(1,2)
// 此处没有添加注解 ，也没有推断出 类型 ，现在为 any任意

function size2(a:number,b:number){
    return a+b
}
let isNum2 = size2(1,2)
// 此处添加注解 ，通过推断 isNum2 为 number类型

let pro ={
    name:"亚",
    age:18
}
// 此处并没有添加注解 ，但是通过推断  对象中的值分别有自己的 类型

// pro.name=19  此时已经定义好的类型 不能再更换
pro.age=19
