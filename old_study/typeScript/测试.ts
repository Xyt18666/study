console.log("222")

//通过编写ts, 然后编译 成js




//数据类型

let str:string = "str"
let num:number = 12
let bol:boolean = true
let flag:undefined = undefined 
let nul:null = null



//空值一般采用void来表示，void可以表示变量，也可表示函数返回数

let callBack = function():void{
	let a = "aa"
}






//任意值  any

let num2:any = 1
num2 = true

let num3  
// 等同于 let num3:any



//类型推断
let b = 1

//当我们给变量赋值初始值的时候，如果没有指定类型，根据初始值倒推类型，所有赋值的时候只能赋值为初始的数据类型


 
//联合类型   |
var strAnum:string|number = "2"
strAnum = "ererere"



//对象类型接口

	//定义接口  interface
	interface Istate{
		name:string,
		age:number
	}

	let obj1:Istate

	obj1 = {
		name:"小明",
		age:18
	}

	//可选属性 ?

	interface Istate2{
		name:string,
		age?:number,
		sex?:"女"
	}
	let obj2:Istate2

	obj2 = {
		name:"小红",
		age:22,
		
	}
	obj2 = {
		name:"小黑",
	}


	//属性个数不确定的时候
	interface Istate3{
		name:string,
		age:number,
		[propName:string]:any
	}

	let obj3:Istate3 = {
		name:"dddd",
		age:16,
		ismary:true
	}


	//只读属性 readonly
	interface Istate4{
		name:string,
		readonly age:number
	}
	let obj4:Istate4 = {
		name:"dddd2222",
		age:16222
	}