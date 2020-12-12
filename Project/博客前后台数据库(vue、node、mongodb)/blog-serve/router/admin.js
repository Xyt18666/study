const express = require("express");

let router = express.Router();
/* 实例路由 */

/*引入model*/

const userAllModel = require("../model/userAllModel");
const classIficationModel = require("../model/classIficationModel");
const mainListModel = require("../model/mainListModel");

/*引入model end*/

/*

以后这样写接口，app.xx 替换成router.xx
router.post("/regist", (req, res) => {
});

该文件写所有前端接口
调用时是请求 /admin/regist


/*定义接口*/

router.post("/getuserall", (req, res) => {
  userAllModel.find({}, (err, data) => {
    console.log(data);

    res.send({
      code: 0,
      datas: data,
    });
  });
});

/*定义接口 end*/

module.exports = router;
