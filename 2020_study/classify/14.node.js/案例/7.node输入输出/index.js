// 输入
let readline = require('readline')//导入包
let {fsRead,fsWrite} = require('./rAw.js')//导入读写
// 实例化对象
let r1 = readline.createInterface({
    output:process.stdout,
    input:process.stdin
})

// 设置r1提问事件
// r1.question('吃什么',(answer)=>{
//     console.log("答案",answer)
//     r1.close()
// })


// r1.on("close",()=>{
//     process.exit(0)
// })

//封装 

function lcQuestion(title){
    return new Promise(function(resolve,rejct){
        r1.question(title,(answer)=>{
            resolve(answer)
        })
    })
}
//创建packjson
async function creactPackJson(){
    let name = await lcQuestion("包名")
    let description = await lcQuestion("描述")
    let main = await lcQuestion("入口路径")
    let content = `
                {
                    "name":${name},
                    "description":${description},
                    "main":${main},
                }
                `
    fsWrite('package.json',content)
    r1.close()
}

creactPackJson()