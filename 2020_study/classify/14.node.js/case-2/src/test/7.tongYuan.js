const express = require("express");
const path = require("path");
const fs = require("fs");

const bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "/public")));
// 同源获取静态资源配置

app.get("/index", (req, res) => {
    fs.readFile("7.index.html", (er, d) => {
        if (er) {
            return console.log("错误" + er);
        } else {
            // console.log(d);

            res.send(d.toString());
        }
    });
});



app.listen(8088, () => {
    // 开启服务器
    console.log("服务器启动成功,8088");
});
