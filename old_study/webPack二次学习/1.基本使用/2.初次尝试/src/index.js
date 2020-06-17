/*
index.js  此文件是webpack的入口文件

------------------------------------------------

npm init  初始化 文件
写 一个 名字  其他默认 （此时生成了package.json）

npm i webpack webpack-cli -g    全局安 webpack webpack-cli
npm i webpack webpack-cli -D    在进行本地安装 （此时生成 package-lock.json）

src : 项目源代码目录
build ： 输出的目录

运行执行：
    开发环境指令： webpack ./src/index.js -o ./build/built.js --mode=development
                webpack会以  index.js 为入口文件 开始打包 ， 打包好后输出到 build 下的 xx文件
    
                打包后输出： Hash: fec77c639c91d1b42a26
                            Version: webpack 4.42.0
                            Time: 247ms
                            Built at: 2020/03/21 下午5:56:31
                            Asset      Size  Chunks             Chunk Names
                            built.js  4.54 KiB    main  [emitted]  main       
                            Entrypoint main = built.js
                            [./src/index.js] 744 bytes {main} [built]

                此时 在 build 下生成了 打包好的 文件


    生成环境指令：webpack ./src/index.js -o ./build/built.js --mode=production
                压缩版的


    webpack能识别 js 和 json 文件 ，但是并不能识别 css img less 等其他资源


    把高级es6/7语法 替换成浏览器能识别的js代码
*/


import data from './index.json'

function add(x,y){
    return x + y 
}
console.log(add(1,2))
console.log(data)