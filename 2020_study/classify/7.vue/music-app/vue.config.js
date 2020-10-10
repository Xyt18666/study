module.exports = {
    devServer: {
        proxy: {
            "/api": {
                //代理的路径
                target: "http://m.jxsjs.com", //请求路径
                changeOrigin: true, // 改请求头 的  host 字段 为target  http://jxsjs.com
                // pathRewrite: {
                //     "/api": "", //把路径中的 /api 置空
                // },
            },
        },
    },
};
// 配置跨域
