# 一、Vue 是 什么类型的框架，有什么优势？

> 渐进式的框架，声明式渲染

# 二、Vue全家桶或者说Vue开发生态包括什么？

> `Vue、VueRouter、VueX`

# 三、Vue文本插值如何实现？

> `{{}}` 双花括号

# 四、Vue属性插值语法，缩写是什么？

> `v-bind`  缩写 `：`

# 五、Vue中直接输出HTML用到的指令是什么？

> `v-html`	

# 六、条件渲染和条件展示的指令分别是什么，有什么区别？

> 条件渲染  `v-if`		可以进行多重判断 ， 不适用 频繁切换
>
> 条件展示 `v-show`	适用于 频繁切换

# 七、列表渲染的指令是什么，为什么列表渲染需要加key?



> `v-for`
>
> 加key值，提高性能，每一个循环元素添加唯一标识

# 八、Vue对Class与Style绑定做了哪些增强？

> 使用 `对象语法`、`数组语法` 对Class和Style进行绑定

# 九、Vue中方法定义用什么属性？

> `methods:{ /*do something*/ }`

# 十、事件监听使用什么指令，缩写是什么？

> `v-on`  缩写 `@`

# 十 一、原生标签上监听事件，默认参数是什么？

> `$event`

# 十二、常用的事件修饰符有哪些，各有什么作用

> `prevent ` 	  取消默认行为
>
> `stop `		阻止事件冒泡		

# 十三、input双向绑定v-model的事件原理是？



> `<input :value="val" @input="val = $event.target.value">`

# 十四、如何定义计算属性，什么是计算属性？

> `computed:{ /* do something */ }`

```javascript
//computed特点： 
需要主动调用，具有缓存能力只有数据再次改变才会重新渲染
否则就会直接拿取缓存中的数据。
```



# 十五、如何定义侦听器，侦听器有什么作用？

> `watch:{}`  侦听组件内部数据的变化

```javascript
//watch特点：
无论在哪只要被绑定数据发生变化Watch就会响应，
这个特点很适合在异步操作时用上。
```



# 十六、Vue组件式开发有什么优势？

> 拆分，复用

# 十七、Vue中注册全局组件和注册局部组件，两种注册方式有什么区别？

```vue
//注册全局组件	在所有组件中都可以使用
vue.component('组件名称'，{

})
//注册局部组件	只能在当前组件内部使用
new Vue({
    components:{
		//组件名称
	}
})
```

# 十八、描述一下使用props和$emit实现父子之间传值的过程？

# 十九、Vue -CLI是什么？

> `vue`脚手架

# 二十、你了解哪些常用npm命令？

> `npm install`	安装依赖包
>
> `npm install 模块名称 --save`

# 二十一、什么是单文件组件？

> 以`.vue`为后缀名，包含`template、script、style`

# 二十二、Pug模板引擎

```javascript
div(class="wraper")
	p pug
    	| hello

```



# 二十三、Sass扩展

```sass
div
	font-size: 13px
```



# 二十四、组件Css作用域

> `<style scoped> ... </style>`

# 二十五、props类型定义和验证？

```javascript
props:['name','list']
props:{
    name:{
        type:String,
        default:'0'
    }
}
```



# 二十六、插槽slot、具名插槽？



# 二十七、Vue实例生命周期？

```
beforeCreate(){},
created(){},		//请求数据
beforeMount(){},
mounted(){},		//操作DOM
beforeUpate(){},
updated(){},
beforeDistroy(){},	//销毁三方插件
distroy(){}
```

# 二十八、混入mixin

> 代码   复用

# 二十九、组件缓存

```javascript
//keep-alive
//独享钩子
    activated(){},
    deactivated(){}
```



# 三十、父子通讯、兄弟组件通讯还有什么方法？

> `Props + $emit`
>
> ref="name" + $refs['name']
>
> `$parent`,`$evenBus`,`$root`

# 三十一、什么是单页面应用？

> `SglePaeAplication`,只有一个页面的应用

# 三十二、什么是路由？



> `url` 和 页面视图的对应

# 三十三、vue-router 中 Vue实例上的`$router`和`$route`

> `$router`是整个应用的路由实例 `this.$router.push(path)`
>
> `$route` 是当前匹配的路由对象

# 三十四、路由导航如何实现？

> `<router-link to="path"></router-link>`
>
> `this.$router.push(path)`

# 三十五、路由如何传参和取参

```javascript
this.$route.params
this.$route.query
```

# 三十六、路由嵌套如何实现？

```vuerouter
{
    path:'/home',
    component:()=>import('@/home.vue'),
    children:[
        {
            path:'id',
            component:()=>import('..')
        }
    ]
}
```

# 三十七、导航守卫有什么作用？

> 在路由跳转过程中进行拦截，判断

# 三十八、过滤器如何定义？

```vue
//定义
{
    filter:{
        formate(val){
            return val
        }
    }
}
//使用
{{ val | formate }}
```



# 三十九、Vue过渡和动画如何实现？

```javascript
//Dom
transition
	div(v-if)

//css
	v-enter,v-leave-to   //开始，结束
	v-enter-active,v-leave-active   //开始，结束 动画
```

# 四十、如何在Vue-CLI中后端开发进行接口联调？

```javascript
//vue.config.js
module.exports={
    devServer:{
        port:9000,	//设置本地端口号
        proxy:{
            '/api':{
                target:"后端服务器",
                changeOrigin: true, 	//是否设置虚拟站点
            }    
        }
    }
}
```



# 四十一、你了解哪些Vue开发使用的三方库？

> `swiper`,`better-scroll`,`vue-lazyload`,`day.js`,`base64.js`