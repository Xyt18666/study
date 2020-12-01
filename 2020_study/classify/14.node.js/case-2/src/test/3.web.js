let http = require("http");
let url = require("url");
// 导入url
let qs = require("querystring");

let serve = http.createServer();
serve.on("listening", () => {
    //服务连接启动
    console.log("listening");
});
serve.on("request", (request, res) => {
    // 设置请求头
    // res.setHeader("content-type", "text/html;charset=utf-8");
    // 设置一个

    res.writeHead(200, "name", {
        "content-type": "text/html;charset=utf-8",
    });
    // 设置一个对象

    console.log(res.statusCode);
    // 获取状态码

    // 请求端口后
    // console.log("request", request, res);
    //获取请求与响应信息

    let newurl = url.parse(request.url);
    console.log(request.host);
    console.log(request.url);
    console.log(newurl); //获取url的值，包含路径内的所有信息
    //     Url {
    //   protocol: null,
    //   slashes: null,
    //   auth: null,
    //   host: null,
    //   port: null,
    //   hostname: null,
    //   hash: null,
    //   search: null,
    //   query: null,
    //   pathname: '/a=aa&b=46',
    //   path: '/a=aa&b=46',
    //   href: '/a=aa&b=46'
    // }
    let u = newurl.query.split("&");
    let r = {};
    console.log(u);
    for (let a = 0; a < u.length; a++) {
        r[u[a].split("=")[0]] = u[a].split("=")[1];
        // console.log(u[a].split("=")[0]);
        // console.log(u[a].split("=")[1]);
    }
    console.log(r);

    // -------------------------------------------------
    // 优化写法
    let obj = {};
    newurl.query
        .split("&")
        .map(item => item.split("="))
        .forEach(item2 => (obj[item2[0]] = item2[1]));

    console.log(obj);
    // -------------------------------------------------
    console.log(qs.parse(newurl.query));
    // 获取路径传递的参数

    console.log(qs.stringify({ k: "aaa", g: "gg2" }));
    // 把对象转换为路径样式

    // -----------------------------------

    // 响应
    res.write("dd");
    res.end();
});
serve.on("error", () => {
    // 错误触发
    console.log("error");
});
serve.listen(8088, () => {
    //服务启动成功
    console.log("启动成功");
});
