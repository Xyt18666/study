
let fs = require('fs')
// 读写 封装

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

function fsWrite(path,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,content,{flag:'a',encoding:'utf-8'},(err,data)=>{
            if(err){
                // console.log("xxx")
                reject(err)
            }else{
                resolve(err)
                // console.log("okokokok")
            }
        })
    })
}

module.exports = {fsRead,fsWrite}