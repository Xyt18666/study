/*
ajax + react + express + axios   完成ajax的数据调用

cnpm install express -save
cnpm install axios -save

*/ 

const express = require('express');
const axios = require('axios');
const app = express()

app.get('/',(req,res)=>{
    res.send("返回数据api服务器")
})

app.get('/api.newsdata',async (req,res)=>{
    res.append("Access-Control-Allow-Origin","*")
    res.append("Access-Control-Allow-content-type","*")
    // 解决跨域

    let res = await axios.get('https://c.m.163.com/ug/api/wuhan/app/data/list-total?t='+ new Date().getTime())
    // await 等待数据拿回来

    let data = JSON.parse(res.data)
    
    result.send(data)
})


app.listen(8080,()=>{
    console.log('server State')
})

// 通过 node index.js  获取数据