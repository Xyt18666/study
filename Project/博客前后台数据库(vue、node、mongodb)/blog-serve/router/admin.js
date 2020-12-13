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
  // 获取用户信息
  userAllModel.find({ identity: { $not: { $eq: "管理员" } } }, (err, data) => {
    console.log(data);

    res.send({
      code: 0,
      datas: data,
    });
  });
});

router.post("/checkjurisdiction", (req, res) => {
  // 操作用户展示的权限
  userAllModel.findOne({ _id: req.body.id }, (err, data) => {
    if (data.jurisdiction[req.body.index] == null) {
      userAllModel.update(
        { _id: req.body.id },
        {
          $set: {
            [`jurisdiction.${req.body.index}`]: data.jurisdictionOld[
              req.body.index
            ],
          },
        },
        (err, data) => {
          console.log(data);
        }
      );
    } else {
      userAllModel.update(
        { _id: req.body.id },
        {
          $unset: { [`jurisdiction.${req.body.index}`]: 1 },
        },
        (err, data) => {
          console.log(data);
        }
      );
    }
  });
});

router.post("/getdetails", (req, res) => {
  // 获取用户信息
  classIficationModel.findOne({ userId: req.body.id }, (err, data) => {
    console.log(data);
    res.send({
      code: 0,
      datas: data,
    });
  });
});

router.post("/getmanagement", (req, res) => {
  // 获取用户信息
  mainListModel.find({}, (err, data) => {
    console.log(data);
    res.send({
      code: 0,
      datas: data,
    });
  });
});

router.post("/dletemanagement", (req, res) => {
  mainListModel.remove({ _id: req.body.id }, (err, data) => {
    console.log(data);
    res.send({
      code: 0,
      datas: data,
    });
  });
});
/*定义接口 end*/

module.exports = router;
