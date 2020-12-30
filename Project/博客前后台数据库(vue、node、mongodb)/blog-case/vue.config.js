module.exports = {
  //   devServer: {
  //     proxy: {
  //       "/api": {
  //         //代理的路径
  //         target: "http://localhost:8088", //请求模块化后的路径
  //         // http://192.168.36.200:3000   请求别人的
  //         // http://localhost:8088/api   请非模块化
  //         // 配置代理后请求路径 应该更改 为 /api/xx  ,  /api == http://localhost:8088/api

  //         changeOrigin: true, // 改请求头 的  host 字段 为target
  //         pathRewrite: {
  //           "^/api": "/",
  //         },
  //       },
  //     },
  //   },
  publicPath: "./",
};
