/*

创建 webpack.config.js 文件
    作用： 指示webpack 干那些活（当个运行webpack时，会加载里面的配置）

    所有构件工具都是基于node 平台运行的 ，模块化默认使用 commonjs

    书写 webpack.config.js 配置文件

    下载 loader 

    npm i css-loader style-loader -D

    输入 webpack  运行

    此时样式已经生效

    如果要使用 lees  sass 的资源
    要配置 less sass  loader  还要安装包
    npm i less -D   
    npm i less-loader -D


*/


import'./index.css'
import'./index.less'