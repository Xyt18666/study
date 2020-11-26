let fs = require("fs");

// let data = fs.readFileSync("../json/1.json"); //同步
// console.log(data.toString()); //burrer数据 转 字符串 返回数据


fs.readFile("../json/1.json", (er, d) => {
    if (er) {
        return console.log(er);
    } else {
        return console.log(d.toString());
    }
}); //异步
