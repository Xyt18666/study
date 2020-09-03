//入口文件
require.config({
  //配置路径
  baseUrl: "./models", //基础路径
  paths: {
    data: "data",

    math: "math",
    jquery: "jq",
  },
});

require(["data", "math"], (data, math) => {
  //执行操作
  console.log(data.getDate());
  console.log(math.add([1, 2]));
});

//能够实现异步加载模块，在页面输出

//异步模块编辑

//依赖关系前置
