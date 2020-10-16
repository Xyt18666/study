module.exports = {
    devServer: {
        proxy: {
            "/api": {
         
                target: "http://m.jxsjs.com",
                changeOrigin: true, 
                // pathRewrite: {
                //     "/api": "", 
                // },
            },
        },
    },
};
