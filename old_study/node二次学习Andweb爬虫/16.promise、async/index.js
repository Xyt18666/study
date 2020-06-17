
/*
总结：promise

旧的 ：会有回调地狱
getAjax('url',()=>{

})

Promise ： 回调函数可以划分出去

get('url').then(()=>{
    
})





async : 执行清晰，不存在回调地狱  
async function getTow(){
    let res =  await get('url')

}
getTow()




async：是Promise的语法糖（更简便），编译时会自动 转为 promise 
await: 等待异步的操作 







promise要实现的 功能：

promise 对象发送了 异步的操作，必须会有一个 未来事件

function fn(resolove,reject){
    setTimeout(()=>{
        if(true){
            resolove()
        }else{
            reject()
        }
    },2000)
}


创建类 构造对象:↓


1. 构造函数的作用：

声明 成功and失败 函数方式的数组对象
定义初始化状态
调用 传入的 进行执行异步内容的 函数（在未来有成功的结果时 调用 传入的成功函数，失败则调失败）


2. 传入 成功 或 失败 时需要调用的函数

3.定义 调用 成功 和失败的 函数

class xxPromise{
    constructor(fn){
        this.successList = [];
        this.failList = [];
        this.state = 'pending;
        fn(this.resolveFn.bind(this),this.rejectFn.bind(this))
    }
    then(successFn,failFn){
        if(typeof siccessList == 'function'){
            this.siccessList.push(successFn)
        }
        if()(typeof failFn == 'function'){
            this.faillList.push(failFn)
        }
    }
    catch(failFn){
         if()(typeof failFn == 'function'){
            this.faillList.push(failFn)
        }
    }
    resolveFn(res){
        this.tate = 'fullfiled'
        this.successList.forEach(function(item.i){
            item(res)
        })
    }
    rejectFn(res){
        this.tate = 'rejected'
        this.failList.forEach(function(item.i){
            item(res)
        })
        throw Error(res)
    }
}


let pro = new xxPromise(fn)

pro.then((res)=>{
    成功的事件
})
pro.catch((res)=>{
    失败的事件
})

*/