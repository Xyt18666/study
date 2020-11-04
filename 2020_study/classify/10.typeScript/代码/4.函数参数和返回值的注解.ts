function size5(a: number, b: number) {
    return a + b + "";
}
let isNum3 = size5(1, 2);
// 像这种情况 ts 会推断错误为 字符串


function size3(a: number, b: number):number{
    // return a + b + "";
    return a+b
}
let isNum4 = size3(1, 2);
// 为函数返回值添加注解,此时 return a + b + "" 会报错

function seyHello():void{
    console.log("xxx");  
    // return ""
}
// 返回空 

function errF():never{
    throw new Error()
    console.log(111);
}
// 永远执行不完

function add({one,tow}:{one:number,tow:number}):number{
    return one+tow
}
let adds = add({one:1,tow:2});
// 函数参数为对象时定义类型
