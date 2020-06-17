let http =require('http'); //node内置模块模块 

//创建server服务器对象
let server = http.createServer()

// 监听当前服务器对象的请求
server.on('request',function(req,res){
    // 当服务器被请求时，会触发请求事件，并传入 请求对象 和 响应对象
    // res.end('hello world 222')

    // console.log(req.url)//路径
    // console.log(req.headers) //请求头

    res.setHeader("Content-Type",'text/html; charset=UTF-8')//设置编码格式

    //根据路径信息，显示不同的页面
    if(req.url == '/'){
        res.end('<h1>首页</h1><img src= "https://www.baidu.com/img/bd_logo1.png"/>')
    }else if(req.url == '/xxx'){
        res.end('国内新闻')
    }else{
        res.end('404')
    }


})

server.listen(80,function(){
    //启动监听端口号成功时触发
    console.log('服务器启动成功')
})
