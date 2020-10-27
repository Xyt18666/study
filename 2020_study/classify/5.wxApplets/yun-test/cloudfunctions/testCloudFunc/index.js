// 云函数入口文件
const cloud = require("wx-server-sdk");

//初始化 云函数
cloud.init();

// const db = cloud.database();
// 定义 调用 云对象 引用函数
// const _ = db.command;
// 获取指令对象

// 云函数入口函数
// exports.main = async (event, context) => {
//event 事件对象，可以接收传递的参数
// content 上下文对象，调用信息和运行状态

// const wxContext = cloud.getWXContext()

//默认返回用户信息
// return {
//   event,
//   openid: wxContext.OPENID,
//   appid: wxContext.APPID,
//   unionid: wxContext.UNIONID,
//   sun:888,
//   db:wx
// }

//自定义 返回数据库 数据
// let data = await db.collection("counters").add({
//     data: {
//         love: "亚鲲",
//     },
// });

// return {data};
// };
//-----------------------------------------------------
const got = require("got");
exports.main = async (event, context) => {
    //   let getResponse = await got("httpbin.org/get");
    let postResponse = await got("httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "标题",
            val: "123",
        }),
    });

    return postResponse.body;
};
