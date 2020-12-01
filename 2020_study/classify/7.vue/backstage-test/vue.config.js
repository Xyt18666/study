module.exports = {
    devServer: {
        proxy: {
            "/api": {
                //代理的路径
                target: "http://localhost:8088", //请求路径
                changeOrigin: true, // 改请求头 的  host 字段 为target 
                pathRewrite: {
                    "^/api": "/",
                },
            },
        },
    },
};
