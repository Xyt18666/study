module.exports = {
    devServer: {
        proxy: {
            "/api": {
                //代理的路径
                target: "http://localhost:8088", //请求路径
                // http://192.168.36.200:3000/api   请求别人的
                changeOrigin: true, // 改请求头 的  host 字段 为target
                pathRewrite: {
                    "^/api": "/",
                },
            },
        },
    },
};
