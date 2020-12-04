/***
 *
 * 这是 mode.js 连接 mongodb 写接口的模板
 * 使用技术：express、mongoose
 *
 *
 *
 ***/

/*---------------------express部分-----------------------*/
const express = require("express");
// 引入
const bodyParser = require("body-parser");
// 引入中间键，获取post参数
let app = express();
// 实例化

//拦截所有请求
//extended:false 方法内部使用querystring模块处理请求参数的格式
//extended:true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == "options") res.send(200);
    //让options尝试请求快速结束
    else next();
});

/*---------------------express部分 end-----------------------*/

/*---------------------mongoose部分-----------------------*/

const mongoose = require("mongoose");
// 引入mongoose

mongoose.connect("mongodb://localhost:27017/case", { useUnifiedTopology: true });
// 连接数据库
const con = mongoose.connection;
//创建 监听数据库连接 对象

con.on("error", console.error.bind(console, "连接数据库失败"));
con.once("open", () => {
    //成功连接
    console.log("成功连接数据库");

    /*将启动后台服务放到获取数据库后*/
    app.listen(8088, () => {
        // 开启服务器
        console.log("服务器启动成功,8088");
    });
});

/*---------------------mongoose部分 end-----------------------*/

/*---------------------约束参数部分-----------------------*/

// 前端发送信息到后端是无约束的，除非前端限制
// 后端存入数据库时是有限制的

// let Schema_1 = mongoose.Schema;
// let sche_1 = new Schema_1({
//     us: String,
//     ps: String,
// });
// var Model = mongoose.model("userAll", sche_1);

// 将约束绑定到指定的表

/*--------------------分割线----------------------*/

/*---------------------约束参数部分 end-----------------------*/

/*--------------------接口模板---------------------*/

// app.post("/login", (req, res) => {
//     // req请求
//     // res响应
//     // post获取 参数 req.body
//     // res.send({
//     //     code: 0,
//     //     data: "登陆成功",
//     //     token: codeding + new Date().getTime(),
//     // });
// });

// app.get("/user", (req, res) => {
//     // get方式 获取 参数 req.query
// });

/*--------------------接口模板 end---------------------*/
