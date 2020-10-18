

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

> 需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。
>作用主要是为了高效的更新虚拟DOM。



# 八、Vue对Class与Style绑定做了哪些增强？

> 使用 `对象语法`、`数组语法` 对Class和Style进行绑定
>
> 

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
//需要主动调用，具有缓存能力只有数据再次改变才会重新渲染
//否则就会直接拿取缓存中的数据。
```



# 十五、如何定义侦听器，侦听器有什么作用？

> `watch:{}`  侦听组件内部数据的变化

```javascript
//watch特点：
//无论在哪只要被绑定数据发生变化Watch就会响应，
//这个特点很适合在异步操作时用上。
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

> 1.父组件为子组件绑定要传递的值
>
> 2.子组件使用 props接收参数
>
> 3.子组件使用参数



# 十九、Vue -CLI是什么？

> `vue`脚手架
>
> 它是一个专门为单页面应用快速搭建繁杂的脚手架,它可以轻松的创建新的应用程序而且可用于自动生成vue和webpack的项目模板
>
> 构建项目，配置项目依赖
>
> 项目打包
>
> 



# 二十、你了解哪些常用npm命令？

> `npm install`	安装依赖包
>
> `npm install 模块名称 --save`      项目依赖
>
> `npm install 模块名称 --save-dev `    开发依赖
>
> `npm  init `   初始化
>
> `npm  install`  安装依赖





# 二十一、什么是单文件组件？

> 以`.vue`为后缀名，包含`template、script、style`
>
> 

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

> 组件定义时，组件内使用 `<slot>`标签
>
> 组件使用时，组件标签内的 html 内容 将插入 组件内
>
> 具名卡槽就是同时定义多个 slot ，使用 name作为区分
>
> 

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



# 二十八、混入mixins

> 代码   复用





# 二十九、组件缓存

```javascript
//<keep-alive>
```



# 三十、父子通讯、兄弟组件通讯还有什么方法？

> `Props + $emit`
>
> ref="name" + $refs['name']
>
> `$parent ` `$root`  `$children`
>
> `evenBus`
>
> `$attrs`  `$listeners`
>
> `provide` `inject`
>
> 

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

# 

# 四十二、vue-loader是什么？使用它的用途有哪些？

> 解析和转换.vue文件.提取出其中的逻辑代码 script,样式代码style,以及HTML 模板template，再分别把他们交给对应的loader去处理。
> 用途：js可以写es6、style样式可以scss或less、template可以使用pug等



# 四十三、vue组件中data为什么必须是一个函数？

> 因为JavaScript的特性所导致，在component中，data必须以函数的形式存在，不可以是对象。
>
> 组建中的data写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的data，相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。
>
> 而单纯的写成对象形式，就是所有的组件实例共用了一个data，这样改一个全都改了。



# 四十四、Vue中双向数据绑定是如何实现的？

> vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；
> 核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法。



# 四十五、单页面应用和多页面应用区别及优缺点

> 单页面应用（SPA），通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于pc端。
>
> 多页面（MPA），就是指一个应用中有多个页面，页面跳转时是整页刷新
>
> 单页面的优点：
> 用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。
>
> 单页面缺点：
> 不利于seo；导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）；初次加载时耗时多；页面复杂度提高很多。



# 四十六、assets和static的区别

> 相同点：assets和static两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下，这是相同点
>
> 不相同点：
>
> assets中存放的静态资源文件在项目打包时，也就是运行npm run build时会将assets中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在static文件中跟着index.html一同上传至服务器。
>
> static中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是static中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于assets中打包后的文件提交较大点。在服务器中就会占据更大的空间。
>
> 建议：将项目中template需要的样式文件js文件等都可以放置在assets中，走打包这一流程。减少体积。而项目中引入的第三方的资源文件如iconfoont.css等文件可以放置在static中，因为这些引入的第三方文件已经经过处理，我们不再需要处理，直接上传。



# 四十七、SPA首屏加载慢如何解决

> 安装动态懒加载所需插件；使用CDN资源。



# 四十八、Vue-router跳转和location.href有什么区别

> 使用location.href='/url'来跳转，简单方便，但是刷新了页面；
>
> 使用history.pushState('/url')，无刷新页面，静态跳转；
>
> 引进router，然后使用router.push('/url')来跳转，使用了diff算法，实现了按需加载，减少了dom的消耗。
> 其实使用router跳转和使用history.pushState()没什么差别的，因为vue-router就是用了history.pushState()，尤其是在history模式下。



# 四十九、Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？

> Vue路由在Android机上有问题，babel问题，安装babel polypill插件解决。



# 五十、params和query的区别

> 用法：query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.$route.query.name和this.$route.params.name。
>
> url地址显示：query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示
>
> 注意点：query刷新不会丢失query里面的数据
> params刷新 会 丢失 params里面的数据。

> 

# 五十一、vue初始化页面闪动问题

> 答：使用vue开发时，在vue初始化之前，由于div是不归vue管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于{{message}}的字样，虽然一般情况下这个时间很短暂，但是我们还是有必要让解决这个问题的。
> 解决：在css里加上[v-cloak] {
> display: none;
> }。



# 五十二、vue修改打包后静态资源路径的修改

> cli2版本：将 config/index.js 里的 assetsPublicPath 的值改为 './' 。

```javascript
build: {
//...
assetsPublicPath: './',
//...
}
```



> cli3版本：在根目录下新建vue.config.js 文件，然后加上以下内容：（如果已经有此文件就直接修改）

```javascript
module.exports = {
publicPath: '', // 相对于 HTML 页面（目录相同） 
}

```



# 五十三、什么是 vue 生命周期？有什么作用？

> 每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做 生命周期钩子 的函数，这给了用户在不同阶段添加自己的代码的机会。（ps：生命周期钩子就是生命周期函数）例如，如果要通过某些插件操作DOM节点，如想在页面渲染完后弹出广告窗， 那我们最早可在mounted 中进行。



# 五十四、简述每个周期具体适合哪些场景

> beforeCreate：在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化。不能在这个阶段使用data中的数据和methods中的方法
> create：data 和 methods都已经被初始化好了，如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中
>
> beforeMount：执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的
> mounted：执行到这个钩子的时候，就表示Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。 如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行
>
> beforeUpdate： 当执行这个钩子时，页面中的显示的数据还是旧的，data中的数据是更新后的， 页面还没有和最新的数据保持同步
> updated：页面显示的数据和data中的数据已经保持同步了，都是最新的
>
> beforeDestory：Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁
> destroyed： 这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。



# 五十五、mvvm 框架是什么？

> vue是实现了双向数据绑定的mvvm框架，当视图改变更新模型层，当模型层改变更新视图层。在vue中，使用了双向绑定技术，就是View的变化能实时让Model发生变化，而Model的变化也能实时更新到View。



# 五十六、vue-router的两种模式

> 答:hash模式：即地址栏 URL 中的 # 符号；
> history模式：window.history对象打印出来可以看到里边提供的方法和记录长度。利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）。



# 五十七、vue-router实现路由懒加载（ 动态加载路由 ）

> 第一种：vue异步组件技术 ==== 异步加载，vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 .但是,这种情况下一个组件生成一个js文件。
> 第二种：路由懒加载(使用import)。
> 第三种：webpack提供的require.ensure()，vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。



# 五十八、vuex是什么？怎么使用？哪种功能场景使用它？

> vue框架中状态管理。在main.js引入store，注入。
> 新建了一个目录store.js，….. export 。
> 场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车



# 五十九、vuex有哪几种属性？

> 答：有五种，分别是 State、 Getter、Mutation 、Action、 Module
> state => 基本数据(数据源存放地)
> getters => 从基本数据派生出来的数据
> mutations => 提交更改数据的方法，同步！
> actions => 像一个装饰器，包裹mutations，使之可以异步。
> modules => 模块化Vuex



# 六十、Vue.js中ajax请求代码应该写在组件的created中还是vuex的actions中？

> 如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。
> 如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用。



