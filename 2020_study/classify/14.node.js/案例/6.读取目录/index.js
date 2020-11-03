let fs = require('fs')
let {fsRead,fsWrite} = require('./rAw.js')//导入读写


let txtPath ='t.txt';

fs.readdir('../4.文件写入',(err,files)=>{
    if(err){
        console.log(err)
    }else{
        console.log(files) //此时 获取 文件夹下的所有文件
        files.forEach(async function(filename,index){
            let content = await fsRead('../4.文件写入/'+filename)
            await fsWrite(txtPath,content)
        })//通过遍历 读取 写入 ，复制了 所有的内容 
    }
   
})













