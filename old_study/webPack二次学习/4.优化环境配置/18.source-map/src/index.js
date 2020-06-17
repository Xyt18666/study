import './font_6nzanaidj2u/iconfont.css'
import './child.js'
import './a.css'
function nesfn(){
    console.log("new fn")
}
nesfn()


/*





*/



// 一旦 有此值 ，就说明，开启了 HMR 
if(module.hot){
    module.hot.accept('./child.js',function(){
        // 方法会监听 xx 文件 ，一旦发生变化，其他默认不会重新打包构建
        
        //会执行后面的回调函数
        print()
    })
}