const express = require("express");
// 引入

const fs = require("fs");
let url = require("url");
let qs = require("querystring");
const bodyParser = require("body-parser");
// 引入中间键，获取post参数

var MongoClient = require("mongodb").MongoClient;
// 引入mongodb ，创建连接
var dburl = "mongodb://localhost:27017/test";
// 数据库的地址

// console.log(express);

let app = express();
// 实例化

//拦截所有请求
//extended:false 方法内部使用querystring模块处理请求参数的格式
//extended:true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 定义接口
app.get("/list", (req, res) => {
    // req 请求
    // res 响应

    // 返回自定义对象
    // res.send({
    //     a: "aa",
    //     b: "beq2",
    // });

    // 返回自定义对象
    // res.json({
    //     a: "aa",
    //     b: "beq2",
    // });

    fs.readFile("../json/1.json", (e, d) => {
        // 返回json文件
        if (e) {
            res.send("文件不存在");
        } else {
            res.json(JSON.parse(d));
        }
    });
    //
});

app.get("/user", (req, res) => {
    // get方式，通过路径传递参数给后端
    let datas = qs.parse(url.parse(req.url).query);

    if (datas.a == 15) {
        res.json({
            msg: "a是15",
        });
    } else {
        res.json({
            msg: "b是18",
        });
    }
});

// app.get("/login", (req, res) => {
// 测试get登陆
//     res.send("111");
// });

app.post("/login", (req, res) => {
    // 登陆接口
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // 解决跨域

    console.log(req.body);
    let { us, ps } = req.body;
    if (us == 123 && ps == 123) {
        res.json({
            code: 0,
            msg: "登陆成功",
            token: {
                userinfo: us,
            },
        });
    } else {
        res.json({
            code: 1,
            msg: "登陆失败",
        });
    }
});

app.get("/mongodb", (req, res) => {
    // 数据库
    MongoClient.connect(dburl, { useNewUrlParser: true }, function (err, db) {
        // 连接数据库
        if (err) throw err;
        var dbase = db.db("test");
        console.log(dbase);

        dbase
            .collection("test")
            .find({}) //找到所有数据，转为数组
            .toArray(function (err, res2) {
                if (!err) {
                    res.send(res2);

                    db.close();
                    // 关闭连接
                }
            });
    });
});

app.listen(8088, () => {
    // 开启服务器
    console.log("服务器启动成功");
});
