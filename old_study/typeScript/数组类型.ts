//数组表示法
//类型+[]

let arr:number []=[1,2,3]

let arr2:string []=["1","2"]

let arr3:any []=["1","2",5]



// Array<elemeType>  表示法

let arr4:Array<number> = [1,8,2]
let arr5:Array<string> = ["1,8,2"]



//可采用 接口表示法
interface Iarr{
	[index:number]:number
}
var arr6:Iarr = [0,6,8]


