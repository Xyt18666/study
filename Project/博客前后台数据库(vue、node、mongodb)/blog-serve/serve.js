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
/*引入express*/
const bodyParser = require("body-parser");
/*引入中间键，获取post参数*/
let app = express();
/*实例化*/

/*
拦截所有请求
extended:false 方法内部使用querystring模块处理请求参数的格式
extended:true 方法内部使用第三方模块qs处理请求参数的格式
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*配置 bodyParser*/

app.all("*", function (req, res, next) {
  /*设置允许跨域的域名，*代表允许任意域名跨域*/

  res.header("Access-Control-Allow-Origin", "*");
  /*允许的header类型*/
  res.header("Access-Control-Allow-Headers", "content-type");
  /*跨域允许的请求方式*/
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") res.send(200);
  else next();
  /*让options尝试请求快速结束*/
});

/*---------------------express部分 end-----------------------*/

/*---------------------mongoose部分-----------------------*/

const mongoose = require("mongoose");
const { json } = require("body-parser");
/*引入mongoose*/ 

mongoose.connect("mongodb://localhost:27017/blog", {
  useUnifiedTopology: true,
});
/*连接数据库*/
const con = mongoose.connection;
/*创建 监听数据库连接 对象*/

con.on("error", console.error.bind(console, "连接数据库失败"));
/*连接失败触发*/

con.once("open", () => {
  /*成功连接*/
  console.log("成功连接数据库");

  /*将启动后台服务放到获取数据库后*/
  app.listen(8088, () => {
    /*开启服务器*/ 
    console.log("服务器启动成功,8088");
  });
});

/*---------------------mongoose部分 end-----------------------*/

/*---------------------约束参数部分-----------------------*/

/*
前端发送信息到后端是无约束的，除非前端限制
后端存入数据库时是有限制的
*/ 
let Schema = mongoose.Schema;
/*获取Schema*/

let schemaUserAll = new Schema({
  rUserNmae: String,
  rPassWord: String,
  jurisdiction: {
    type: Array,
    default: [],
  },
  landingStatus: {
    type: String,
    default: "0",
  },
  identity: {
    type: String,
    default: "用户",
  },
});
/*注册用户约束*/ 
var userAll = mongoose.model("userAll", schemaUserAll);

/*将约束绑定到指定的表*/  

/*--------------------分割线----------------------*/
let classIfication = new Schema(
  {
    userId: String,
  },
  { strict: false }
);
// 注册导航列表约束
var classAll = mongoose.model("classIfication", classIfication);

/*---------------------约束参数部分 end-----------------------*/

/*--------------------接口模板---------------------*/

app.post("/register", (req, res) => {
  // 注册接口
  console.log(req.body);
  userAll.find({ rUserNmae: req.body.rUserNmae }, "rUserNmae", (err, d) => {
    // 查找是否有此用户，没有就添加，有就返回
    console.log(d, "查询成功");
    if (d.length != 0) {
      res.send({
        code: 1,
        data: "用户已存在",
      });
    } else {
      userAll.create({ jurisdiction: ["h5"], ...req.body }, (err, d2) => {
        // 添加用户
        console.log(d2, "储存成功");
        classAll.create(
          {
            userId: d2._id,
            h5: [
              {
                title: "标题",
              },
              {
                title: "标题2",
              },
            ],
          },
          (err, d3) => {
            // 添加用户对应的列表
            console.log(d3, "储存成功");
          }
        );
        res.send({
          code: 0,
          data: "注册成功",
        });
      });
    }
  });
});

/*--------------------分割线----------------------*/
app.post("/longin", (req, res) => {
  // 登陆
  let { rUserNmae, rPassWord } = req.body;
  console.log(req.body);
  userAll.find(
    { rUserNmae: rUserNmae },
    "_id rPassWord identity jurisdiction",
    (err, d) => {
      console.log(d, "查询成功");
      if (d[0].rPassWord != rPassWord)
        res.send({
          code: 1,
          data: "密码错误",
        });

      if (d[0].identity == "用户") {
        console.log(11, req.body);

        userAll.update(
          req.body,
          { $set: { landingStatus: "1" } },
          (err, state) => {
            console.log(state, "修改成功", d);
            res.send({
              code: 0,
              msg: "登陆成功",
              data: {
                id: d[0]._id,
                jurisdiction: d[0].jurisdiction,
              },
            });
          }
        );
      } else if (d[0].identity == "管理员") {
        userAll.update(
          req.body,
          { $set: { landingStatus: "1" } },
          (err, state) => {
            console.log(state, "修改成功");
            res.send({
              code: 0,
              data: "管理登陆成功",
            });
          }
        );
      }
    }
  );
});

/*--------------------分割线----------------------*/
app.post("/getmsg", (req, res) => {
  classAll.find({ userId: req.body.id }, (err, d) => {
    // 查找某某模块
    let obj = {};

    req.body.jurisdiction.map((e, i) => {
      console.log(e, i, "jurisdiction");
      console.log(d[0].toJSON().h5);

      if (d[0].toJSON()[e]) {
        obj[e] = d[0].toJSON()[e];
      }
    });
    console.log(obj);

    res.send({
      code: 0,
      data: obj,
    });
  });

  // req.body
});

/*--------------------分割线----------------------*/

// app.get("/getuser", (req, res) => {
//     // get方式 获取 参数 req.query

//     Model.find({}, "-_id us", (err, d) => {
//         // 查找
//         console.log(d, "查询成功");
//     });
//     res.send({
//         code: 0,
//         data: "查询成功",
//     });
// });

// app.post("/setps", (req, res) => {
//     Model.update(req.body, { $set: { ps: 7988 } }, { multi: true }, (err, d) => {
//         // 修改
//         console.log(d, "修改成功");
//     });
//     res.send({
//         code: 0,
//         data: "修改成功",
//     });
// });

// app.post("/deluser", (req, res) => {
//     Model.remove(req.body, (err, d) => {
//         // 删除
//         console.log(d, "删除成功");
//     });
//     res.send({
//         code: 0,
//         data: "删除成功",
//     });
// });

/*--------------------接口模板 end---------------------*/
