const mongoose = require("mongoose");
/*引入*/

let Schema = mongoose.Schema;
/*获取实例*/

/* 定义约束 */
let schemaUserAll = new Schema({
    xx: String,
});

/*导出约束*/
module.exports = schemaUserAll;
