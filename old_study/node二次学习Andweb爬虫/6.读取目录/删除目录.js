//删除目录

let fs = require('fs')

fs.rmdir('abc',()=>{
    console.log("删除")
})