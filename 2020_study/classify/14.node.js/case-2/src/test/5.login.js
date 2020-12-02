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

function getRandom(max, mix) {
    // 获取随机数
    return parseInt(Math.random() * (max - mix + 1) + mix);
}
function getCode() {
    // 获取4位验证码
    return "" + getRandom(9, 0) + getRandom(9, 0) + getRandom(9, 0) + getRandom(9, 0);
}

let datas = [];
// 保存信息的数组

app.post("/code", (req, res) => {
    let tel = req.body.tel;
    if (!tel) res.send({ code: "-1", msg: "请输入手机号" });
    // 判断是否输入手机号
    if (tel.length != 11) res.send({ code: "-1", msg: "请输入正确的手机号格式" });
    // 手机号的校验，这里是大概模拟一下

    if (datas.findIndex((i, d) => i.tel == tel) != -1)
        res.send({ code: -1, data: "已发送过了，请在倒计时结束后重新获取" });

    let codes = getCode();
    datas.push({
        tel: tel,
        codes: codes,
    });
    console.log(datas);

    setTimeout(() => {
        let index = datas.findIndex((i, d) => i.tel == tel);
        datas.splice(index, 1);
    }, 10000);
    res.send({
        code: 0,
        data: codes,
    });

});

app.post("/login", (req, res) => {
    let { tel, codeding } = req.body;
    if (!tel || !codeding) res.send({ code: "-1", msg: "请输入完整信息" });

    console.log(tel, codeding);

    let index = datas.findIndex((i, d) => i.tel == tel);

    if (datas[index].codes != codeding)
        res.send({
            code: -2,
            data: "登陆失败，请输入正确的验证码",
        });
    res.send({
        code: 0,
        data: "登陆成功",
        token: codeding + new Date().getTime(),
    });

   
});

app.listen(8088, () => {
    // 开启服务器
    console.log("服务器启动成功,8088");
});
