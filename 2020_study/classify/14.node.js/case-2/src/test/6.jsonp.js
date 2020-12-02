const express = require("express");

let url = require("url");
let qs = require("querystring");

let app = express();
app.get("/list", (req, res) => {
    // let datas = qs.parse(url.parse(req.url).query);
    let datas = req.query;
    // 可以直接获取 ,无需 url 和 qs模块

    let data = {
        a: "aa",
        b: "dd",
    };
    let data2 = [
        {
            a: "aa",
            b: "dd",
        },
        {
            a: "aa22",
            b: "dd22",
        },
    ];

    if (datas.callback) {
        let { callback } = datas;

        console.log(data2.toString());

        res.send(`${callback}(${JSON.stringify(data)})`);
        // data.toString() 和 JSON.stringify(data) 都是为了 转换为 字符串
        // 以字符串的形式返回 ，函数调用,函数名是获取到的,参数是要返回的值
    } else {
        res.send({
            code: -1,
            msg: "错误",
        });
    }
});
app.listen(8088, () => {
    // 开启服务器
    console.log("服务器启动成功,8088");
});
