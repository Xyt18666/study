// 云函数入口文件
const cloud = require("wx-server-sdk");
const got = require("got");
let appid = "wx0c2ac02d50b3a01e";
let secret = "18f2432b222488ada8d35c9209f9c860";

let msgCheckUrl = "https://api.weixin.qq.com/wxa/msg_sec_check?access_token=";
let tokenUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`;

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
    let tokeRes = await got(tokenUrl);
    let token = JSON.parse(tokeRes.body).access_token;

    let checkRes = await got(msgCheckUrl + token, {
        body: JSON.stringify({
            content: event.text,
        }),
    });
    return checkRes.body;
};
