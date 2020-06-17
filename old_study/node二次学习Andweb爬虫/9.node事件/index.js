
//node 是单进程 单线程  的 应用

let fs = require('fs')

fs.readFile('hel.txt',{flag:'r',encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
        //这里要做很多事
        lcEvent.emit('fn1',data)
    }
})



let lcEvent = {
    event:{
        // fn1:[fn,fn,fn]
    },
    on:function(eventName,eventFn){
        if(this.event[eventName]){
            this.event[eventName].push(eventFn)
        }else{
            this.event[eventName] = []
            this.event[eventName].push(eventFn)
        }
    },
    emit:function(eventName,eventMsg){
        if(this.event[eventName]){
            this.event[eventName].forEach(itemFn => {
                itemFn(eventMsg)
            })
        }
    }
}

lcEvent.on('fn1',function(eventMsg){
    console.log("做的事1")
})
lcEvent.on('fn1',function(eventMsg){
    console.log("做的事2")
})
lcEvent.on('fn1',function(eventMsg){
    console.log("做的事3")
})
