let http = require("http");
//引入node.js中的 http模块 ，用于搭建简易 服务器

var MongoClient = require("mongodb").MongoClient;
// 引入mongodb ，创建连接
var url = "mongodb://localhost:27017/test";
// 数据库的地址

http.createServer(function (req, ress) {
    //创建简易 服务器
    console.log(req.httpVersion); //输出相关参数
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    console.log(req.trailers);
    console.log(req.complete);
    if (req.url == "/") {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            // 连接数据库
            if (err) throw err;
            var dbase = db.db("test");
            dbase
                .collection("test")
                .find({}) //找到所有数据，转为数组
                .toArray(function (err, res) {
                    if (!err) {
                        ress.end(JSON.stringify(res));
                        db.close();
                        // 关闭连接
                    }
                });
        });
    }
}).listen(8000);
console.log("打开 http://localhost:8000/"); //先执行这个  再执行function中的
