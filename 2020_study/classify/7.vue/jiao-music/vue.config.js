module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        compress: true,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://jxsjs.com/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
};
