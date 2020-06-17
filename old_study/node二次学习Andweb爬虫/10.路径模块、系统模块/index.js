let path = require('path')

let strPath = 'https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app'

// 获取扩展名
let info = path.extname(strPath)
console.log(info)


// 拼接成路径
let arr = ['/strPath','xx','xyt']
let info1 = path.resolve(...arr)
console.log(info1)

// __dirname   获取当前目录 的 完整路径
console.log(__dirname)

// 拼接成路径
let info2 = path.join(__dirname,'729',"xlk")
console.log(info2)


//解析路径  (根路径 目录 扩展名 文件名 后缀)
console.log(path.parse(__filename))