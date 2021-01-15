define(function (require, exports, module) {
  let getDate = () => {
    let date = new Date();
    return `今天是${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日`;
  };
  module.exports = {
    getDate,
  };
});
//定义一个不存在依赖的模块
