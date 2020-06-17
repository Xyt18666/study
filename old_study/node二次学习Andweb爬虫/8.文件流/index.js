let fs = require('fs')
let path = require('path')

//   写入流配置                                文件路径，可选配置
// let ws = fs.createWriteStream('hel.txt',{flags:'w',encoding:'utf-8'})

// console.log(ws)

// ws.on('open',()=>{
//     console.log("打开")
// })

// ws.on('ready',()=>{
//     console.log("准备写入")
// })



// ws.write('写入内容',(err)=>{
//     if(err){
//         console.log("no")
//     }else{
//         console.log("ok")
//     }
// })

// ws.write(' 多次写入内容',(err)=>{
//     if(err){
//         console.log("no")
//     }else{
//         console.log("ok")
//     }
// })


// ws.end(()=>{
//     console.log("完成")
// })

// ws.on('close',()=>{
//     console.log("关闭")
// })

//----------------------------------------------------------

//读操作

let rs = fs.createReadStream('hel.txt',{flags:'r',encoding:'utf-8'})

console.log(rs)

rs.on('open',()=>{
    console.log('读取打开')
})

rs.on('data',(chunk)=>{
    
    console.log('单批 数据 流入',chunk,"----",chunk.length,"单次数据大小")

    // ws.write('写入内容',()=>{})  读取完成一次 写入一次
})

rs.on('close',()=>{
    console.log('读取关闭')
    // ws.end(()=>{})   最后关闭
})



//管道 ，读写一体

// rs.pipe(ws)
// 读       写