// 用于请求数据的库  前后端都可用


// 安包  cnpm install axios

let request = require('request')//另一种方法（专业爬虫）
// 安包  cnpm install request

// let axios = require('axios')
// console.log(axios)
//请求



let httpUrl = 'https://www.bilibili.com/?spm_id_from=333.851.b_7072696d61727950616765546162.1'
// request.get(httpUrl,function(err,response,body){
//     console.log(err,response,body)
// })




async function fetClassUrl(){
    let {response,body} = await req(httpUrl)
    console.log(body)
}

function req(url){
    return new Promise(function(resolve,reject){
        request.get(url,function(err,response,body){
            if(err){
                reject(err)
            }else{
                resolve({response,body})
            }
        })
    })
}


fetClassUrl()