//声明式类型的函数

function fnTy(name:string,age:number):number{
	return age
}
var ageNum:number = fnTy("sdf",18)



//函数参数不确定

function fn2(name:string,age:number,sex?:string):number{
	return age
}
let ageNum2:number = fn2("zs",14,"男")

//函数参数的默认值
function fn2(name:string="sdfs",age:number=12):number{
	return age
}


//表达式类型的函数

let fn3:(name:string,age:number)=>number = function(name:string,age:number){
	return age
}


//接口方式

interface fn4{
	(name:string,age:number):number
}
let fn5: fn4 = function(name:string,age:number): number {
	return age
}

//联合类型的函数，可以采用重载的方式

function gv(value:number):number
function gv(value:string):string

function gv(value:string|number):string|number{
	return value
}

let a:number = gv(1)
let b:strimg = gv("D")