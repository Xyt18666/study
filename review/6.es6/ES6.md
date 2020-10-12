[TOC]



# 一、let、const 的使用

1. let、const 所声明的变量，只在let命令所在的代码块（块级作用域{ }）内有效

   ```javascript
   for(let i = 0;i<3;i++){
       console.log(i)	//1,2,3
   }
   console.log(i)  //error
   ```

   

2. const 声明一个只读的常量，不能进行赋值  (名称建议大写)

   ```javascript
   const OBJ={
       a:1
   }
   OBJ.b=2
   console.log(OBJ)	//{a:1,b:2}
   ```

   

3. 暂时性死区 (声明变量前调用会出现报错)

   ```javascript
   console.log(a)  //undefined
   console.log(b)	//error
   var a = 1;
   let b = 1;
   ```

   

   总结：

   let 和 const 相同点:

   > 1. 都不支持重复赋值
   > 2. 都存在暂时性死区
   > 3. 不存在变量提升，必须声明后使用
   > 4. let、const 声明的变量都不属于window , 而var声明的变量相对于挂在在windows上

   

   let 和 var 的区别：

> 1. 在一个作用域中不能重复声明同名变量
> 2. 无变量提升
> 3. 块级作用域，存在暂时性死区



# 二、解构赋值

## 1.数组的解构赋值

```javascript
let [a,b]=[1]	//a=1,b=undefind
let [a,[b],c]=[1,[1,2],3] //a=1,b=1
let [a=0,b=a]=[]	//a=0,b=0
let [a=0,b=a]=[1,2]	//a=1,b=2
let [a=b,b=0]=[]	//error

//可以交换位置
let a=1, b=2;
let [b,a]=[b,a]	//[2,1]
```



## 2.对象的解构赋值

类似于 ES6 对象简写方式

```javascript
let {data:res} = {data:1}	//等价于 {data} = {data:1}
console.log(res)		//1
let obj = {
        p:[
            'hello',
            {y:'world'}
        ]
    }
    let {p:[a,{y:b}]}=obj;
    console.log(a,b)	//hello world
```

## 3.字符串的解构

类似于数组解构,把字符串拆分成类似数组的形式，再进行解构

```
let [a,b] = '123'	//1,2
```



## 4.数字和布尔值的解构

解构时，先转换成对象再进行解构

```javascript
let {toString:a}=123;	//toString方法
let {toString:b}=true;	//toString方法
console.log(a,b)
```



## 5.函数的解构

函数的参数可以解构

```javascript
function add([x,y]){
    return x+y
}
add([1,2]);	//3
```

# 三、字符串的扩展

## 1.unicode表示法

ES6允许采用unicode表示字符

```javascript
let str = "\u4e00"
console.log(str) //'一'
```

> 这种表示法只限于码点在\u4e00 ~ \uFFFF之间的字符
>
> 超出部分必须用两个双字节形式表示

## 2.模板字符串

1. 使用反引号（`）包裹字符串，在模板字符串中可以使用表达式，放在${}中

2. 可以调用函数

   ```javascript
   let str = `1+1=${1+1}`
   console.log(str) //'1+1=2'
   console.log`str` //'1+1=2'	
   ```

   

## 3.字符串新方法

> raw(): 该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串

```javascript
console.log(String.raw`1+1=\n 5`)	//1+1=\n 5
console.log(String.raw('1+1=\n 5'))	//error
console.log(`1+1=\n 5`)			//1+1=回车 5
```

*该方法往往用于模板字符串的处理方法

ES6 字符串新增了几种方法 :

> includes:  返回一个布尔值，表示是否包含某个字符

> startsWith: 返回布尔值，表示是否以某个字符开头

> endsWith: 返回布尔值， 表示是否以某个字符结尾

> 上面s三种方法都可以传入第二个参数，表示查找的起始下标

```javascript
let s = "hello world"
console.log(s.includes('o'))	//true
cosnole.log(s.startWith('word',6))	//true
```

> repeat() 用于重复某个字符串 参数为重复的次数

```javascript
let s = '1';
console.log(s.repeat(3))	//111
```

ES8 新增的方法：

> padStart,padEnd  字符串补全
>
> 两个参数：第一个参数是字符串最大长度，第二个参数是用来补全的字符串

```javascript
let s = '1';
console.log(s.padStart(2,'0'))	//01
```



# 四、数值的扩展

ES6在Number对象上 ， 新提供了 Number.isFinite() 和 Number.isNaN() 两个方法

> Number.isFinite()  : 用来检测一个数值是否为有限的

如果参数类型不是数值，Number.isFinite一律返回false

```javascript
Number.isFinite(0.8)		//true
Number.isFinite(NaN)		//false
Number.isFinite(Infinity)	//false
```

> Number.isNaN() : 用来检测一个值是否为NaN

ES6,将上面两个方法移植到数字对象上了,还有Number.parseInt()   Number.parseFloat()

```javascript
Number.isNaN(NaN) 			//true
```



> Number.isInteger() : 用来判断一个数值是否是整数

`25.0`和`25`都被视为整数，如果参数不是数字类型，一律返回false

```javascript
Number.isInteger(25.0)		//true
Number.isInteger(25.5)		//false
```

ES7中新增指数运算符（**）

> **  指数运算符

```javascript
console.log(7**2)  //表示7的2次方
```

> Math.cbrt()  :  返回参数的立方根
>
> Math.sqrt()  :  返回 参数的平方根
>
> Math.hypot() ： 返回所有参数平方和的平方根

```javascript
Math.cbrt(27)		//3
Math.sqrt(9)		//3
Math.hypot(3,4)		//5
```



# 五、函数的扩展

1.ES6允许函数的参数设置默认值

```javascript
function fn(x,y=1){
    console.log(x,y)
}
fn(2)	//2,1

let x = 1;
function fn1(x,y=x){
    console.log(x,y)
}
fn1()	//undefined undefined
function fn2(m,y=x){
    console.log(x,y)
}
fn2()	//1 1
function fn3(x=x){
    console.log(x)
}
fn3()	//ReferenceError
```

2.rest参数（...变量名）

> rest参数本身是一个数组，可以遍历，必须作为最后一个参数

```javascript
function fn(...num){
    console.log(num)
}
fn(2,3,4,5)		//[2, 3, 4, 5]
```

与arguments的区别

> arguments 是伪数组 ， rest 是真正的数组  可以使用数组的方法；

3.箭头函数（()=>{}）

```javascript
function(a,b){}   // <==> (a,b)=>{}
let fn = (a,b)=>a+b;
fn(1,2)		//3
```

箭头函数的注意事项

> 1. this指向 包裹当前对象的对象 
> 2. 如果不写{} 默认return
> 3. 不能使用 new 命令 不可以当做构造函数
> 4. 不可以使用 arguments 参数 可以使用 rest参数

4.name属性

> 返回函数的名称

```javascript
let f = function fn(){}
console.log(f.name)	//fn
```

# 六、数组的扩展

## 1.扩展运算符（...）

用途：

1. 合并数组
2. 把伪数组转化成真正的数组
3. 把字符串转化为数组，与字符串方法split('')一样

## 2.数组的新增方法；

forEach()、map()、every()、some()、filter()、find()、findeIndex()、reduce()、reduceRight()、from()、of()、fill()、keys()、values()、entries()、includes()、flat()、flatMap()、

> forEach(callback)   用于遍历数组,参数是一个回调函数，函数有三个参数，分别为 当前项、当前索引、源对象

```javascript
let arr = [1,2,3]
arr.forEach((item,index,con){
    console.log(item,index,con)			//1,0,[1,2,3]/2,1,[1,2,3]/3,2,[1,2,3]
})
```

> map(callback)  同样是数组遍历，内部参数与forEach一样 , 通常用于数组内部值得映射 

```javascript
let arr=[1,2,3]
let arr1 = arr.map(item=>item*2)	//[2,4,6]
```

> every() 用于判断每一项是否满足回调中的条件，有一项不满足返回false,否则则返回true

```javascript
let arr=[1,2,3]
let bl = arr.every(item=>item>2)		//false //不是每一项都大于2
```

> some()  与every()相似 ， 有一项为真则真，全部为假则假

```javascript
let arr=[1,2,3]
let bl = arr.some(item=>item>2)		//true //有两项大于2
```

> filter() 用于过滤满足回调函数返回值的子项

```javascript
let arr=[1,2,3]
let arr1=arr.filter(item=>item>2) //[3]
```

> find() 用于查找满足回调函数返回值的第一个子项
>
> findIndex() 返回满足回调函数返回值得第一个子项的下标

```javascript
let arr=[1,2,3]
let str = arr.find(item=>item>2)	//3
let index = arr.findIndex(item=>item>2)		//2
```



> reduce() 用于数组子项的叠加，第一个参数是回调函数有4的参数  第二个参数是可选值，初始化叠加
>
> reduceRight() 与reduce()相似， 用于反向叠加

```javascript
let arr=[1,2,3]
let sum = arr.reduce((prev,current,index,con)=>{	//前一项  当前项  当前索引 源数组
    return prev+current
})
console.log(sum)			//6
let sum1 = arr.reduce((prev,current,index,con)=>{	
    return prev+current
},1)
console.log(sum1)			//7
```

> Array.from() 用于将伪数组和可遍历的对象转化为数组

> Array.of()  用于将一组值转化为数组

```javascript
let obj={
    0:'1',
    1:'2',
    2:'3',
    length:'3'
}
console.log(Array.from(obj))	//[1,2,3]
console.log(Array.of(1,2,3))	//[1,2,3]
//of 与 Array 的区别
//new Array()中只传一个数时，代表数组的长度
```

> fill()  用于填充数组；第一个参数：要填充的内容；第二个参数表示起始下标；第三个参数表示结束下标，可选值，默认是最后

```javascript
let arr=[1,2,3,4,5]
console.log(arr.fill(6,2))	//[1,2,6,6,6]
```

> keys(),values(),entries();用于遍历数组的键名、键值、键值对、返回一个对象

> includes() 表示数组中是否含有某个子项，第二个参数表示起始下标

> flat() 表示将多维数组展开，参数为展开的层数

```javascript
let arr=[1,2,[2,3]]
for(let i of arr.keys()){
    console.log(i)				//0,1,2
}
console.log(arr.includes(1))	//true
console.log(arr.flat(1))		//[1,2,2,3]
```

> flatMap() flat方法和map方法的结合，展开数组，再进行映射， 只能够展开一层

## 3.for...of  遍历

> 只能遍历==可迭代==的元素，如数组，set,map；

```javascript
let arr=[1,2,3];
for(let i of arr){
    console.log(i)		//1,2,3
}
```



# 七、对象的扩展

## 1.简洁表示法

> 在ES6中，当键名和键值的变量一样时，可以简写；对象的方法可以直接写成  键名(){}

```javascript
let a =1;
let b=2;
let obj={
    a,
    b,
    fn(){
        console.log('调用了obj的fn方法')
    },
    ['a'+1]:"hello world"	//可以对键名使用‘[]’，[]内部可以使用表达式
}
```

## 2.伪属性 （getter、 setter）

> 每次调用或者修改时就会调用伪属性的方法
>
> 注意：不能和真属性同名

```javascript
let obj={
    get a(){
        return 222
    },
    set a(val){
        console.log("设置了a的值是"+val)
    }
}
console.log(obj.a)		//222
obj.a =3				//设置了a的值是3
```

## 3.Object.defineProperty()

> 在一个对象上定义一个新属性，或者修改一个已经存在的属性
>
> 有三个参数:
> obj 需要定义属性的当前对象
> prop 当前需要定义的属性名
> description 属性描述符

```javascript
let obj={}
Object.defineProperty(obj,'name',{
    value:"张三",				//设置键值对的键值
    configurable: false	,	//是否可重新定义或删除
    writable: true,			//是否可写
    enumerable：	true,		//是否可枚举，在循环中是否可见
    get(){
    	return 123
	},
    set(value){
		console.log(value)
    }
})
```

## 4.对象的新增方法

> Object.is() 用来检测两个值是否完全相等，NaN与NaN 返回true  ; +0与-0返回false

> Object.getOwnPropertyDescriptors()   返回指定对象所有自身属性（非继承属性）的描述对象。

> Object.keys()，Object.values()，Object.entries()  和数组方法相似

> Object.assign()   合并对象,返回一个新对象，对象的浅copy

> Object.fromEntries( )     转Map结构为 对象

```javascript
let a={a:1}
let b={b:1}
let c ={b:2}
console.log(Object.assign(a,b,c))		//{a:1,b:2}   同名属性-后者覆盖前者 
```

# 八、Symbol的使用

> ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型

## 1.声明方式

Symbol 值通过Symbol函数生成，Symbol函数前不能使用new命令，否则会报错.

```javascript
let a = Symbol('foo')
let a1 = Symbol('bar')
a.toString() //'Symbol(foo)'
```

注意事项：

1.Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。

```
let a1 = Symbol('foo')
let a2 = Symbol('foo')
a1 === a2 //false
```

2.Symbol 值不能与其他类型的值进行运算

```javascript
let f = Symbol('foo')
console.log('Symbol is '+ f)
//TypeError: Cannot convert a Symbol value to a string
```

3.Symbol值可以通过数据类型转换转换为字符串或者布尔值，但是不能转换为数值

```javascript
let f = Symbol('foo')
Boolean(f)	//true
Number(f)	//TypeError: Cannot convert a Symbol value to a number
f+2		   //TypeError: Cannot convert a Symbol value to a number
```

## 2.使用场景

1.消除魔术字符串

> 代码中值不重要的项，可以使用Symbol替换

2.作为对象属性

```javascript
const name = Symbol('name')
const obj = {
    [name]:'ClickPass'
}
```

3.模拟类的私有方法

> ES6 中的类是没有 private 关键字来声明类的私有方法和私有变量的，但是我们可以利用 Symbol 的唯一性来模拟

```javascript
const speak = Symbol()
class Person{
    [speek](){
        //do something
    }
}
```



# 九、Set、Map数据结构

## 1.Set

```javascript
const s = new Set()
s.add(1).add(2).add(2).add(3)		//添加成员
console.log(s)		//1,2,3			自带去重
s.delete(1)			
console.log(s)		//2,3			//删除某个成员			
console.log(s.size)	//2				//set成员数量
console.log(s.has(2))	//true     查找是否存在某个成员
s.clear()							//清空set
```

set转数组

```javascript
//Set 转 数组			
let set = new Set([1,2])
console.log(Array.from(set))
```

### --weakSet

## 2.Map

```javascript
const m = new Map()
m.set(true,1).set(false,0).set({a:1},[1,2,3])	//存取键值
console.log(m.get(true))					  //获取键
console.log(m.has(1))						  //是否存在 键
m.delete(true)								 //删除键
console.log(m)
m.clear()									 //清空Map
console.log(m)
```

数组转Map

```javascript
//数组转 Map
let arr = [['a',0],['b',1],['s',3]]
let map = new Map(arr)
console.log(map)
```

Map转对象

```javascript
//Map转对象
console.log(Object.fromEntries(map))
```

Map转数组

```javascript
//Map转 数组
console.log([...map])
```

### --weakMap



# 十、Proxy[代理](https://es6.ruanyifeng.com/#docs/proxy)

> Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截。
>
> 因此提供了一种机制，可以对外界的访问进行==过滤和改写==。

Proxy 支持的拦截操作一览，一共 13 种。

- **get(target, propKey, receiver)**：拦截对象属性的读取，比如`proxy.foo`和`proxy['foo']`。
- **set(target, propKey, value, receiver)**：拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值。
- **has(target, propKey)**：拦截`propKey in proxy`的操作，返回一个布尔值。
- **deleteProperty(target, propKey)**：拦截`delete proxy[propKey]`的操作，返回一个布尔值。
- **ownKeys(target)**：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。
- **getOwnPropertyDescriptor(target, propKey)**：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
- **defineProperty(target, propKey, propDesc)**：拦截`Object.defineProperty(proxy, propKey, propDesc）`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
- **preventExtensions(target)**：拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
- **getPrototypeOf(target)**：拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
- **isExtensible(target)**：拦截`Object.isExtensible(proxy)`，返回一个布尔值。
- **setPrototypeOf(target, proto)**：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- **apply(target, object, args)**：拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。
- **construct(target, args)**：拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`。

```javascript
    //proxy 代理
    let obj={
        time:'2018-1-1',
        age:12,
        height:180,
        _r:'sss'
    }
    let proxy = new Proxy(obj,{
        get(obj,key,receiver){          		//get方法用于拦截某个属性的读取操作
            console.log(obj,obj[key])
            return obj[key].replace('2018','2020')
        },
        set(obj,key,value,receiver){   		 	//set方法用来拦截某个属性的赋值操作
            console.log(obj,key,value)
            // obj[key]=value
            if(key=='age'){
                obj[key]=value;
            }
        },
        has(obj,key){                   		//拦截(propKey in proxy)的操作，返回一个布尔值
            // console.log(key)
            if(key == 'age'){
                return true
            }else{
                return false
            }
        },  
        deleteProperty(obj,key){               //拦截delete proxy[propKey]的操作，返回一个布尔值。
            if(key.startsWith('_')){
                delete obj[key]
            }else{
                return obj[key]
            }
        },
        ownKeys(obj){                          //拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性
            return Object.keys(obj).filter(item=>item!='time')
        }
    })
    for(let key in proxy){
        console.log(key)
    }
    delete proxy['_r']
    delete proxy['time']
    console.log('age' in proxy)
    proxy.age=13;
    proxy.height=160;
    console.log(proxy.time)

```



# 十一、[Reflect](https://es6.ruanyifeng.com/#docs/reflect)

> `Reflect`对象与`Proxy`对象一样，也是 ES6 为了操作对象而提供的新 API。

`Reflect`对象一共有 13 个静态方法。

- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
- Reflect.set(target, name, value, receiver)
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)

```javascript
//Reflect 映射  用函数的方式修改属性    方法与proxy相似
    let obj={
        year:'2020',
        date:'8-4',
        get fullDate(){
            return this.year+''+this.date
        },
        set changeYear(value){
            this.year = value
        },
        _r:'ssssss'
    }
    let obj1={
        year:'2022',
        date:'8-8'
    }
    console.log(Reflect.get(obj,'fullDate'))        //获取对象的属性值  没有则返回undefined  第一个参数是目标对象，第二个参数是属性名，【第三个参数是改变this指向】
    console.log(Reflect.get(obj,'fullDate',obj1))   
    Reflect.set(obj,'changeYear','2018')                  //设置对象的属性值 
    Reflect.set(obj,'changeYear','2020',obj1)             //第四个参数是 改变this执行  设置obj1中的属性；
    console.log(obj,obj1)
    console.log(Reflect.has(obj,'year'))            //检测是否含有对象的属性名,返回boolean值
    Reflect.deleteProperty(obj,'_r')                //删除对象的某个属性
    console.log(obj)
    console.log(Reflect.ownKeys(obj))               //返回对象的属性名
```



# 十二、[Promise](https://es6.ruanyifeng.com/#docs/promise)

## 1、promise含义

Promise 是异步编程的一种解决方案，解决了回调地狱的发生，也就是异步编程同步化

```javascript
//Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
let promise = new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>{
            resolve('成功')
        },1000)
    }else{
        setTimeout(()=>{
            reject('失败')
        },1000)
    }
})
promise.then((res)=>{		//then() 方法 两个参数（成功回调，失败回调）
    console.log(res)
},(reject)=>{
    console.log(reject)
}).catch((err)=>{			//catch() 方法捕获 失败
    console.log(err)
}).finally(() => {···})		//finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作
```

## 2、Promise思考题：

```javascript
function fn1(){
    console.log('fn1');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve()},1000)
    })
}
function fn2(){
    console.log('fn2');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve()},3000)
    })
}
function fn3(){
    console.log('fn3')
}
fn1().then((res)=>{              //执行顺序 fn1 ls 后 (fn2 fn3)
    fn2()
}).then(()=>{
    console.log(this)
    fn3()
})
fn1().then(fn2()).then(fn3)         //执行顺序 (fn1 fn2) ls后 fn3
fn1().then(fn2).then(fn3)           //执行顺序 fn1 1s后 fn2 3s后 fn3
```

## 3、Promise.all 和 Promise.race

```javascript
Promise.all([fn1(),fn2(),fn3()]).then((res)=>{      //所有的promise都执行完成后  返回新的promise对象
    console.log("结束")
})
Promise.race([fn1(),fn2(),fn3()]).then((res)=>{     //有一个promise执行完成   返回新的promise对象
    console.log('已经有数据了')
})
```



# 十三、Generator [函数](https://es6.ruanyifeng.com/#docs/generator)

## 1、函数特征：

​	1.function关键字与函数名之间有一个星号；

​	2.函数体内部使用yield表达式，

```javascript
function* getNum(num) {
    let x = yield num;
    let y = yield x * 2;
    return y ** 2
}
```

## 2、next()方法

`yield`表达式本身没有返回值，或者说总是返回`undefined`。

`next`方法可以带一个参数，该参数就会被当作上一个`yield`表达式的返回值。

```javascript
function* getNum(num) {
    let x = yield num;
    let y = yield x * 2;
    return y ** 2
}
let g = getNum(6)
console.log(g.next())   //{value: 6, done: false}
// console.log(g.next())   //{value: NaN, done: false}
console.log(g.next(6))  //next可以传一个参数，表示上一个状态的返回值 没有则 默认undefined;
```

## 3、throw()方法

`throw`方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。

```javascript
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
```



## 4、return()方法

`return`方法，可以返回给定的值，并且终结遍历 Generator 函数。

```javascript
function* getNum(num) {
    yield 1;
    yield 2;
    yield 3;
}
let g = getNum();
console.log(g.next())
// console.log(g.return())     //{value: undefined, done: true} 在函数外部终止genrator函数 可以传参数，表示返回的结果；没有则返回undefined
```

## 5、G函数执行器

```javascript
function fn1(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a)
        },1000)
    })
}
function fn2(a){
    fn1(a).then(res=>{
        k.next(res)
    })
}
function * fn(){
    let a = yield fn2('a');
    console.log(a)
    let b = yield fn2('b');
    console.log(b)
}
let k = fn();
k.next()
```



# 十四、Async...Await使用

async 函数是什么？一句话，它就是 Generator 函数的语法糖。

> async 放在函数function前面
>
> 内部 需要  await  关键字

```javascript
function fn1(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a)
        }, 1000)
    })
}
async function fn(){
    let res = await fn1("hello")
    console.log(res)
    let res1 = await fn1("world")
    console.log(res1)
}
fn()
```



# 十五、Class面向对象

ES6中引入class来定义面向对象，本质上时ES5构造函数的语法糖

## 1.Constructor方法

```javascript
class Point {			//默认生成了构造方法 constructor(){}
}

// 等同于
class Point {
  constructor() {}
}
```

## 2.属性表达式

类的属性名，可以采用表达式。

```javascript
let methodName = 'getArea';

class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}
```

## 3.getter和setter

与 ES5 一样，在“类”的内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

```javascript
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```

## 4.私有属性和私有方法

私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。

1.在clas内部使用_开头的变量和方法，为私有方法和属性

```javascript
class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }

  // ...
}
```

2.私有方法移出模块，因为模块内部的所有方法都是对外可见的。

```javascript
class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

  // ...
}

function bar(baz) {
  return this.snaf = baz;
}
```

3.利用`Symbol`值的唯一性，将私有方法的名字命名为一个`Symbol`值。

```javascript
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};
```

## 5.Class的继承

> 使用 extends 关键字 子级继承父级
>
> ES6 要求，子类的构造函数必须执行一次`super`函数。

```javascript
class A {}

class B extends A {
  constructor() {
    super();
  }
}
```

> ​	`super`作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

```javascript
class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.p()); // 2
  }
}

let b = new B();
```

## 6.Object.getPrototypeOf()

`Object.getPrototypeOf`方法可以用来从子类上获取父类。

```javascript
Object.getPrototypeOf(ColorPoint) === Point
// true
```



# 十六、模块化编程

## 1.AMD

> 引用require.js库

```html
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./require.js" async="true" data-main="./main.js"></script>
</body>
</html>
```

```javascript
//main.js
//入口文件
require.config({
    baseUrl:'modules',
    paths:{
        'date':'date',
        'math':'math',
        'jquery':'jquery-3.4.1.min'
    }
})
//使用模块
require(['date','math'],function(date,math){
    console.log(date.getDate())
    console.log(math.add([1,2]))
})
```

```javascript
//module/date.js
//定义模块
define(function(){
    function getDate(){
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()+1;
        const day = date.getDate();
        return `今天是${year}年${month}月${day}日`;
    }
    return {
        getDate
    }
})
```



## 2.CMD

> 引用sea.js库

```html
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./seaJs/sea.js"></script>
</body>
<script>
    seajs.use('./main')
</script>
</html>
```

```javascript
//main.js
define(function(require,exports,module){
    let date = require('./modules/date.js')
    const math = require('./modules/math.js')
    console.log(date.getDate())
    console.log(math.add([1,2]))
})
```

```javascript
//modules/date.js
define(function(require,exports,module){
    let getDate = function(){
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()+1;
        const day = date.getDate();
        return `今天是${year}年${month}月${day}日`;
    }
    exports.getDate = getDate
})
```



## 3.Common.js (node专用)

> 使用`module.exports`可缩写`exports`导出模块
>
> ==一个js文件只能有一个`module.exports` 或者 `exports`==
>
> 使用 `require` 函数接受模块

```javascript
//date.js
function getDate(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()+1;
    const day = date.getDate();
    return `今天是${year}年${month}月${day}日`;
}

// module.exports = {
//     getDate
// }
exports.getDate = getDate
```

```javascript
//main.js
const date = require("./date");
let d = date.getDate()
console.log(d)
```



## 4.ES模块化

> 使用 `exports`抛出模块，`import {...} from '模块名'` 接受模块
>
> 一个js文件中可以有多个`exports`，可以使用`as`改变模块名称（可作为匿名）
>
> 使用 `exports default`抛出模块，接受方式和`exports`相同 但是一个js文件中只存在一个`exports default`

```html
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./main.js" type="module"></script>
</body>
</html>
```

```javascript
//main.js
import {
	a,
	add as sum
} from './modules/module.js'
console.log(a, sum(1, 2))
```

```javascript
//modules/module.js
let a = 123;

let add = function(a,b){
	return a+b
}

export{a,add}
```



# [ArrayBuffer](https://es6.ruanyifeng.com/#docs/arraybuffer#ArrayBuffer-%E5%AF%B9%E8%B1%A1)

> 对二进制数据流进行操控，多用于WebGL项目，视频音频数据可视化等等

`ArrayBuffer`对象、`TypedArray`视图和`DataView`视图是 JavaScript 操作二进制数据的一个接口

`ArrayBuffer`对象   ---------   内存之中的一段二进制数据，可以通过“视图”进行操作。

`TypedArray`视图	共包括 9 种类型的视图

`DataView`视图	可以自定义复合格式的视图

`TypedArray`视图支持的数据类型一共有 9 种（`DataView`视图支持除`Uint8C`以外的其他 8 种）。

| 数据类型 | 字节长度 | 含义                             | 对应的 C 语言类型 |
| -------- | -------- | -------------------------------- | ----------------- |
| Int8     | 1        | 8 位带符号整数                   | signed char       |
| Uint8    | 1        | 8 位不带符号整数                 | unsigned char     |
| Uint8C   | 1        | 8 位不带符号整数（自动过滤溢出） | unsigned char     |
| Int16    | 2        | 16 位带符号整数                  | short             |
| Uint16   | 2        | 16 位不带符号整数                | unsigned short    |
| Int32    | 4        | 32 位带符号整数                  | int               |
| Uint32   | 4        | 32 位不带符号的整数              | unsigned int      |
| Float32  | 4        | 32 位浮点数                      | float             |
| Float64  | 8        | 64 位浮点数                      | double            |

详细方法见 [阮一峰ES6教程](https://es6.ruanyifeng.com/#docs/arraybuffer#ArrayBuffer-%E5%AF%B9%E8%B1%A1)

# *ES2020新增语法

## 1.合并空运算符 （？？）

> 使用 `??` 代替 `||` 前面数值只能是`null`和`undefined`时，执行后面的程序

```javascript
let a = null ?? 1
console.log(a)	//1
let b = 0 ?? 1
console.log(b)  // 0
```



## 2.可选的链接操作（？.）

> 使用`？.`进行防止对象 多属性嵌套 使用时报错

```javascript
let person = {};

console.log(person.profile.name ?? "Anonymous"); // person.profile is undefined
console.log(person?.profile?.name ?? "Anonymous");
console.log(person?.profile?.age ?? 18);
```



## 3.BigInt

> JavaScript可以处理的最大数字是`2 ^ 53`，我们可以在`MAX_SAFE_INTEGER`中看到

```javascript
const max = Number.MAX_SAFE_INTEGER;

console.log(max); 		// 9007199254740991
console.log(max + 1); 	// 9007199254740992
console.log(max + 2); 	// 9007199254740992
console.log(max + 3); 	// 9007199254740994
```

使用BigInt数据类型，通过在数值后面加`n`,可以进行超大数值的计算

```javascript
const bigNum = 100000000000000000000000000000n;

console.log(bigNum * 2n); // 200000000000000000000000000000n
```

## 4.Promise.allSettled

当我们处理多个Promise时，特别是当它们相互依赖时，记录每个Promise所发生的事情来调试错误是很有必要的。通过`Promise.allSettled`，我们可以创建一个新的Promise，它只在所有传递给它的Promise都完成时返回一个数组，其中包含每个Promise的数据。

```javascript
const p1 = new Promise((res, rej) => setTimeout(res, 1000));

const p2 = new Promise((res, rej) => setTimeout(rej, 1000));

Promise.allSettled([p1, p2]).then(data => console.log(data));

// [
//   Object { status: "fulfilled", value: undefined},
//   Object { status: "rejected", reason: undefined}
// ]
```

