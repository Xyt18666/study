const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/case", { useUnifiedTopology: true });
// 连接数据库
const con = mongoose.connection; //创建 监听数据库连接 对象
con.on("error", console.error.bind(console, "连接数据库失败"));
con.once("open", () => {
    //成功连接
    console.log("成功连接");
});

let Schema_1 = mongoose.Schema;
// 创建一个约束

// 约定属性 和 类型
let sche_1 = new Schema_1({
    name: String,
    age: Number,
    sex: String,
    love: {
        type: Array, //数组
        default: [],
    },
    address: {
        //对象
        a: {
            //对象中的值
            type: String,
            default: "北京", //默认值
        },
        b: String,
    },
});

// var sche_2 = mongoose.Schema({
//     category: String,
//     name: String,
// });

//继承一个schema ,创建集合（集合名，使用哪个约束）
// var Model = mongoose.model("mongoose", sche_2);
var Model = mongoose.model("yys", sche_1);

//添加文档 ,增
// Model.create({ category: "apple2", name: "apple2" }, (err, d) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(d);
//     }
// });

// for(let a= 0; a<20; a++){
//     Model.create(
//     {
//         name: "鬼吞",
//         age: 23,
//         sex: "男",
//         love: ["起立", "退条"],
//         address: {
//             b: "珠海",
//         },
//     },
//     (err, d) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(d);
//         }
//     }
// );
// }

// 查找
// Model.find({ name: "鬼吞" }, (err, docs) => {
//     if (!err) {
//         console.log("查找成功", docs);
//         console.log(typeof docs);
//     } else {
//         throw err;
//     }
// });

// Model.find({}, { name: 1, _id: 0 }, (err, docs) => {
//     //定义查询结果显示字段
// });

/* skip:2 开始位置  limit:2 取出信息条数*/
// Model.find({}, "-_id name sex age", { skip: 0, limit: 0 }, (err, docs) => {
//     //定义查询结果显示字段,-_id 不显示 id  ，显示那些输出那些
// });

// 修改：
// Model.update({ name: "鬼吞" }, { $set: { age: 96 } }, { multi: true }, (err, docs) => {
//     if (!err) {
//         console.log("修改成功", docs);
//         console.log(typeof docs);
//     } else {
//         throw err;
//     }
// });

// 删除
// Model.remove({ name: "鬼吞" }, err => {
//     //删除所有匹配
//     if (!err) {
//         console.log("删除成功！！");
//     } else {
//         throw err;
//     }
// });

// 统计
// Model.countDocuments({}, (err, count) => {
//     if (!err) {
//         console.log(count);
//     } else {
//         throw err;
//     }
// });

// 排序
// Model.find({})
//     .sort({ age: 1 })
//     .exec(function (err, docus) {
//         if (!err) {
//             console.log("排序成功", docus);
//         } else {
//             throw err;
//         }
//     });

// ------------------------------------------------------
// 乱序
// function getRandom(max, mix) {
//     // 获取随机数
//     return parseInt(Math.random() * (max - mix + 1) + mix);
// }

// Model.find({}, (err, docs) => {
//     if (!err) {
//         console.log("查找成功");
//         Model.countDocuments({}, (err, count) => {
//             if (!err) {
//                 // console.log(count);

//                 for (let a = 0; a < count; a++) {
//                     let d = getRandom(count, 0);
//                     let b = getRandom(count, 0);
//                     [docs[d], docs[b]] = [docs[b], docs[d]];
//                     console.log(d, b, "-------------------------");
//                 }
//                 // for (let a = 0; a < docs.length; a++) {
//                 //     console.log(docs[a].age);
//                 // }
//                 // console.log(docs);
//                 //为数据乱序
//             } else {
//                 throw err;
//             }
//         });
//         console.log("乱序");
//     } else {
//         throw err;
//     }
// });
// ---------------------------------------------------------
