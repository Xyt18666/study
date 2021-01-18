require('./tests.css');
// import "./tests.css";

const { n, add } = require('./1.js');

console.log(n);
console.log(add());
// js: 默认没有HMR功能（需要修改js代码，添加支持HMR的代码,如下）

// 一旦 有此值 ，就说明，开启了 HMR
if (module.hot) {
  module.hot.accept('./1.js', () => {
    // 方法会监听 xx 文件 ，一旦发生变化，其他默认不会重新打包构建

    // 会执行后面的回调函数
    // print();
  });
}
