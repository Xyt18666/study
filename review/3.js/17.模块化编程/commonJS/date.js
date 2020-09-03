function getDate() {
  let date = new Date();
  return `今天是${date.getFullYear()}年${
    date.getMonth() + 1
  }月${date.getDate()}日`;
}
// 输出模块  (单个)
// module.exports = getDate;

//导出模块 (对象 )
module.exports = {
  getDate,
};
