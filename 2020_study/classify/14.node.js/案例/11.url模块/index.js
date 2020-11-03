
// url 操作

let url = require('url')

console.log(url)

let httpurl = 'https://www.bilibili.com/video/BV1i7411G7kW?p=9'

let msg = url.parse(httpurl)  //解析 出 ： 域名 地址 路径 搜索字符串 哈希值 ...
console.log(msg)


let targetUrl = 'https://www.bilibili.com/'
let next = './str/xyt'
let newurl = url.resolve(targetUrl,next)
console.log(newurl)  //合成 url