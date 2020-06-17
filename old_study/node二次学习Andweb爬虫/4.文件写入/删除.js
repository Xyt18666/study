const fs = require('fs')


fs.unlink('text.txt',()=>{
    console.log('delte')
})

// 删掉 找不回来