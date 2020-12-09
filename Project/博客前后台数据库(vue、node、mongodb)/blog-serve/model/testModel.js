const mongoose = require("mongoose");
let testSchema = require("../schema/testSchema");
/*导入对应的Schema */

let testModel = mongoose.model("testAll", testSchema);
/*创建 model */

module.exports = testModel;
/*导出model */
