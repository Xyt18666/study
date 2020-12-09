const express = require("express");

let router = express.Router();
/* 实例路由 */

/*引入model*/

const testAll = require("../model/testModel");

/*引入model end*/

/*
以后这样写接口，app.xx 替换成router.xx
router.post("/regist", (req, res) => {
    获取参数
    一顿判断操作 不符合 就返回 res.send({}) 并 return

    符合就 操作数据库
    此时 引入的 testAll 就是 某个表

  
});
该文件写所有前端接口
调用时是请求 /api/regist

*/

module.exports = router;
/*抛出模块*/
