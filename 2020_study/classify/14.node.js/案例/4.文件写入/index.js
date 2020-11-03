const fs = require('fs')
                            //flag:'a'  追加内容    w 写入   r 读  a 读取
fs.writeFile('text.txt','ok',{flag:'a',encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log("xxx")
    }else{
        console.log("okokokok")
    }

})
//此时 文件已经被修改


//封装
function writeFs(path,content){
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

async function writeList(){
    await writeFs('text.txt','111')
    await writeFs('text.txt','122')
    await writeFs('text.txt','133')
}
writeList()