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
调用时是请求 /api/regist


/*定义接口*/

router.post("/register", (req, res) => {
  // 注册接口

  userAllModel.find(
    { rUserNmae: req.body.rUserNmae },
    "rUserNmae",
    (err, d) => {
      // 查找是否有此用户，没有就添加，有就返回
      console.log(d, "查询成功");
      if (d.length != 0) {
        res.send({
          code: 1,
          data: "用户已存在",
        });
      } else {
        userAllModel.create(
          { jurisdiction: ["HTML5", "CSS3"], ...req.body },
          (err, d2) => {
            // 添加用户
            console.log(d2, "储存成功");
            classIficationModel.create(
              {
                userId: d2._id,
                HTML5: [
                  {
                    title: "title1",
                    msg: {
                      author: "作者",
                      times: new Date().toLocaleDateString(),
                      read: 0,
                      comment: 0,
                    },
                    text: "文章内容1",
                    commentList: [
                      {
                        nuser: "xx用户",
                        times: new Date().toLocaleDateString(),
                        text: "写的真好，自己都看不懂",
                      },
                    ],
                  },
                ],
                CSS3: [
                  {
                    title: "title1",
                    msg: {
                      author: "作者",
                      times: new Date().toLocaleDateString(),
                      read: 0,
                      comment: 0,
                    },
                    text: "文章内容1",
                    commentList: [
                      {
                        nuser: "xx用户",
                        times: new Date().toLocaleDateString(),
                        text: "写的真好，自己都看不懂",
                      },
                    ],
                  },
                  {
                    title: "title1",
                    msg: {
                      author: "作者",
                      times: new Date().toLocaleDateString(),
                      read: 0,
                      comment: 0,
                    },
                    text: "文章内容1",
                    commentList: [
                      {
                        nuser: "xx用户",
                        times: new Date().toLocaleDateString(),
                        text: "写的真好，自己都看不懂",
                      },
                    ],
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
          }
        );
      }
    }
  );
});

router.post("/longin", (req, res) => {
  // 登陆
  let { rUserNmae, rPassWord } = req.body;
  // console.log(req.body);
  userAllModel.find(
    { rUserNmae: rUserNmae },
    "_id rPassWord identity jurisdiction commentList",
    (err, d) => {
      // console.log(d, "查询成功");
      if (d[0].rPassWord != rPassWord)
        res.send({
          code: 1,
          data: "密码错误",
        });

      if (d[0].identity == "用户") {
        // console.log(11, req.body);

        userAllModel.update(
          req.body,
          { $set: { landingStatus: "1" } },
          (err, state) => {
            // console.log(state, "修改成功", d);
            res.send({
              code: 0,
              identity: 1,
              msg: "登陆成功",
              data: {
                id: d[0]._id,
                jurisdiction: d[0].jurisdiction,
              },
            });
          }
        );
      } else if (d[0].identity == "管理员") {
        userAllModel.update(
          req.body,
          { $set: { landingStatus: "1" } },
          (err, state) => {
            // console.log(state, "修改成功");
            res.send({
              code: 0,
              identity: 2,
              data: "管理登陆成功",
            });
          }
        );
      }
    }
  );
});

router.post("/getmainlist", (req, res) => {
  // 获取首页分页信息列表
  console.log(req.body.pages);
  mainListModel
    .find({})
    .sort({ _id: -1 })
    .skip((req.body.pages - 1) * 3)
    .limit(3)
    .exec((i, d) => {
      console.log("获取分页数据", d);

      res.send({
        code: 0,
        data: d,
      });
    });
});

router.post("/getlistlength", (req, res) => {
  // 获取首页列表总数
  mainListModel.countDocuments({}, (err, count) => {
    res.send({
      code: 0,
      data: count,
    });
  });
});

router.post("/addcomment", (req, res) => {
  // 添加评论

  // console.log(req.body);
  //   console.log(req.body.section, req.body.index, req.body.data);
  // req.body.id不需要找用户的表,需要找到某一条
  // req.body.data是评论列表
  // req.body.index是操作的下标
  // commentList

  if (req.body.section == "mainList") {
    mainListModel.find({ _id: req.body.id }, (err, d) => {
      console.log(d);
    });
    mainListModel.update(
      { _id: req.body.id },
      {
        $set: {
          commentList: req.body.data,
        },
      },
      (err, d) => {
        console.log(d);
      }
    );
  } else {
    classIficationModel.update(
      { userId: req.body.id },
      {
        $set: {
          [`${req.body.section}.${req.body.index}.commentList`]: req.body.data,
        },
      },
      (err, d) => {
        console.log(d);
      }
    );
  }

  // classIficationModel.find({ userId: req.body.id }, (err, d) => {
  //     console.log(d, "查找到的数据");
  // });

  // 要获取对应 的数据库的数据，然后进行添加，
  // 不会找对象深层，使用笨方法替换
  // 现在搞成单独用户单独评论了，不对
});

router.post("/setread", (req, res) => {
  // 设置读取数
  if (req.body.section == "mainList") {
    mainListModel.update(
      { _id: req.body.id },
      {
        $set: {
          msg: req.body.data,
        },
      },
      (err, d) => {
        console.log(d);
      }
    );
  } else {
    classIficationModel.update(
      { userId: req.body.id },
      {
        $set: {
          [`${req.body.section}.${req.body.index}.msg`]: req.body.data,
        },
      },
      (err, d) => {
        console.log(d);
      }
    );
  }

  // classIficationModel.find({ userId: req.body.id }, (err, d) => {
  //     console.log(d, "查找到的数据");
  // });

  // 要获取对应 的数据库的数据，然后进行添加，
  // 不会找对象深层，使用笨方法替换
  // 现在搞成单独用户单独评论了，不对
});

router.post("/releasemsg", (req, res) => {
  // 发布文章
  if (req.body.section == "mainList") {
    console.log("首页操作");
    mainListModel.create(req.body.datas, (err, d) => {
      console.log(d);
      mainListModel.find({}, (err, d2) => {
        console.log(d2, "添加后的新首页列表");
      });
    });
  } else {
    classIficationModel.update(
      { userId: req.body.id },
      {
        $push: {
          [req.body.section]: { $each: [req.body.datas], $position: 0 },
        },
      },
      (err, d) => {
        console.log(d);
      }
    );
  }
});

router.post("/creartaction", (req, res) => {
  // 创建板框
  console.log(req.body.id);
  console.log(req.body.datas);
  userAllModel.update(
    {
      _id: req.body.id,
    },
    { $addToSet: { jurisdiction: req.body.datas } },
    (err, state) => {
      console.log(state);
    }
  );

  classIficationModel.update(
    { userId: req.body.id },
    { $set: { [req.body.datas]: [] } },
    (err, state) => {
      console.log(state);
    }
  );
});

router.post("/getmsg", (req, res) => {
  // 获取登陆后的信息

  classIficationModel.find({ userId: req.body.id }, (err, d) => {
    // 查找某某模块
    let obj = {};

    req.body.jurisdiction.map((e, i) => {
      // console.log(e, i, "jurisdiction");

      // console.log("获取的数据库信息", d[0].toJSON());

      if (d[0].toJSON()[e]) {
        obj[e] = d[0].toJSON()[e];
      }
    });
    // console.log("获取的数据库信息obj", obj);

    res.send({
      code: 0,
      data: obj,
    });
  });

  // req.body
});

/*定义接口 end*/

module.exports = router;
/*抛出模块*/
