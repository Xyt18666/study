// 这个配置文件，其实就是一个js文件，通过node 中的模块 ，向外暴露一个配置对象
const path = require('path')
const htmlWebpackPluqin = require('html-webpack-plugin')
				//只要是插件，就都放到pluguns中
				//当我们使用了 这个插件，就不在需要手动书写script标签



module.exports = {
	entry:path.join(__dirname,'./src/js/main.js'),//入口
	output:{
		path:path.join(__dirname,'./dist'),//出口
		filename:'bundle.js'
	},
	plugins:[
		new htmlWebpackPluqin({//创建一个 在内存中 生成HTML 页面的插件
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		})
	],
	module: {//用于配置所有第三方模块 加载器
		rules: [
			{ test:/\.css$/, use: ['style-loader','css-loader'] },
			// {
            //     test: /\.css$/,
            //     use: [
            //         {loader: "style-loader"}, 
            //         {loader: "css-loader",
            //          options: {
            //             modules: {
            //                 localIdentName: "[path][name]-[local]-[hash:5]"
            //             }
            //          }
            //         }],   //打包处理css样式表的第三方loader ,启用模块化
			// },
	
			{
                test: /\.less$/,
                use: [
					{loader: "style-loader"}, 
                    {loader: "css-loader",
                     options: {
                        modules: {
                            localIdentName: "[path][name]-[local]-[hash:5]"
                        }
                     }
					},
					{loader: "less-loader"},
				]  //打包处理css样式表的第三方loader ,启用模块化
			},
			
					
			{ test:/\.(jpg|png|bmp|jpeg)$/, use: 'url-loader?limit=2000&name=[hash:8]-[name].[ext]'},
									//limit给定的是图片大小，单位是字节byte，如果图片大于limit则不会被转为base64，小于则反之
									//name是 图片命名 哈希值 原名.原后缀
            { test:/\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            
			{test:  /\.jsx?$/, use:'babel-loader',exclude:/node_modules/},
                                            //排除其他的包，只转换自己的


            
		]
	},
	resolve:{//路径的缩写配置.这里还有问题，未实现
		alias:{
			Image:path.resolve(__dirname,'../images')
		}
	}
}

//配置文件
//通过书写配置文件
//使用 webpack 命令 
//更新修改后的代码 

//当我们输入 webpack 命令后执行了
//1.首先，webpack 发现，我们并没有通过命令的形式给他指定入口和出口
//2.webpack 就会去 项目的 根目录 中，查找一个叫 webpack.config.js 的配置文件
//3.当找到配置文件后，解析执行这个配置文件，当解析执行完，就得到了配置文件中的配置对象
//4.当webpack拿到配置对象后，就拿到了 入口和出口，然后 进行打包构建




/*
 nodemon 自动执行 node

安装 cnpm npm install -g cnpm --registry=https://registry.npm.taobao.org
使用 npm i webpack-dev-server -D 这个工具 ，来实现自动打包编译功能
用法和webpack命令完全一致
由于我们是在项目中，本地安装， 所以无法把他当做命令，在powershell终端中直接运行
删除node_m文件   重装 npm install

想要运行，必须在本地项目中，安装webpack     cnpm i webpack -D

npm run dev

 */