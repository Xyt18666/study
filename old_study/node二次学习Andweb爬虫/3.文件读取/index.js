const fs = require('fs')


/*




*/ 

var fd = fs.openSync('hel.txt','r')//同步,获取文件

// console.log(fd)

// var buf  = Buffer.alloc(20)
// var content = fs.readFileSync('hel.txt',{flag:'r',encoding:'utf-8'})//同步读取文件
//console.log(content.toString())


// fs.readFile('hel.txt',{flag:'r',encoding:'utf-8'},function(err,state){
//     if(err){
//         console.log(err + "no")
//     }else{
//         console.log(state + "ok")
//     }
// })//异步


// 封装：

function fsRead(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{flag:'r',encoding:'utf-8'},function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

let fsr =  fsRead('hel.txt')
fsr.then(function(res){
    // console.log(res)
})

async function ReadList(){
    var file = await fsRead('hel.txt')
    console.log(file,"11")
    var file2 = await fsRead('hel2.txt')
    console.log(file2,"22")
    var filecon = await fsRead('hel3.txt')
    console.log(filecon,"33")
}
ReadList()