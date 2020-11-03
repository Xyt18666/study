let events = require('events');
let fs = require('fs')


let ee = new events.EventEmitter();

ee.on('fn2',(eventMsg)=>{
    console.log("fn2221")
})
ee.on('fn2',(eventMsg)=>{
    console.log("fn2222")
})

ee.on('fn2',(eventMsg)=>{
    console.log("fn2223")
})

// fs.readFile('hel.txt',{flag:'r',encoding:'utf-8'},(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//         //这里要做很多事
//         ee.emit('fn2',data)
//     }
// })


//封装


function xxReadFile(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{flag:'r',encoding:'utf-8'},(err,data)=>{
            if(err){
                // console.log(err)
                reject(err)
            }else{
                // console.log(data)
                resolve(data)
            }
        })  
    })
}

// xxReadFile('hel.txt').then(function(data){
//     ee.emit('fn2',data)
// })




//异步的
async function asy(){
    let data = await xxReadFile('hel.txt')
    ee.emit('fn2',data)
}
asy()