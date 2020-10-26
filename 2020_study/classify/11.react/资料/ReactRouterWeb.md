[TOC]

# [ReactRouter-Web](https://react-router.docschina.org/web/guides/philosophy)

安装

```npm
$ npm install react-router-dom
```

引用

```react
import { Prompt, Redirect, Switch, Link, NavLink, Route, HashRouter, MemoryRouter, StaticRouter} from 'react-router-dom'
```



## Prompt < 提示 >

路由跳转时，进行拦截

|    属性    |      类型       |               解释               |
| :--------: | :-------------: | :------------------------------: |
| `message ` | `String / Func` | 当用户试图导航离开时提示的消息， |
|  `when `   |     `bool`      |       阻止或允许相应的导航       |



## Redirect < 重定向 >

相对于vue-router中的`redirect`属性

| 属性        | 类型            | 解释                                   |
| ----------- | --------------- | -------------------------------------- |
| `from`      | String          | 要重定向的路径名                       |
| `to`        | String / Object | 重定向到的`URL`                        |
| `push`      | bool            | 是否存入历史记录，而不是替换当前条目   |
| `exact`     | bool            | 完全匹配，等价于Route.exact            |
| `strict`    | bool            | 严格匹配，等价于Route.strict           |
| `sensitive` | bool            | 区分大小写匹配; 等效于 Route.sensitive |



## Switch < 开关 >

> Switch只显示匹配到的第一个路由

| 属性        | 默认值   |                             解释                             |
| ----------- | -------- | :----------------------------------------------------------: |
| `location ` | `Object` | 用于匹配子元素而不是当前历史记录位置(通常是当前浏览器 URL)的 location 对象 |
| `children`  | `node`   | 所有 < switch > 的子元素都应该是 < route > 或 < redirect > 元素。只会呈现与当前位置匹配的第一个子元素。 |



1. **Switch匹配到第一个路由就不会继续匹配了,如果不加Route 里不加 exact，那么凡是Link里面 to 的路径包含了/（ /about, /topic 都包含了 / ，当点击about或者topic的Link的时候，path=’/'的路由都会匹配到，Switch匹配到了一个就停止向下匹配），那么就会被匹配到，于是Switch就不继续匹配下去**

2. **如果没有Switch也没有exact,不管点击哪个链接都会有path=’/的页面’**

3. **有Switch没有exact:不管点击哪个链接都只会出来path=’/'的页面（也就是Main页面）**

总结：

| Switch | Route.exact |                 结果                 |
| :----: | :---------: | :----------------------------------: |
|   有   |     有      |               匹配当前               |
|   有   |    没有     |   一直匹配到 --- 路径为 `/`的页面    |
|  没有  |    没有     | 匹配的页面总有 ---- 路径为 `/`的页面 |



## Link < 跳转 >

> 提供声明式的、可访问的导航链接

```react
import { NavLink } from 'react-router-dom'
<Link to="/about">跳转</Link>
```

属性：

| 属性       | 值              |                             解释                             |
| ---------- | --------------- | :----------------------------------------------------------: |
| `to`       | `String/Object` |                           跳转链接                           |
| `replace`  | `Boolean`       | 设置为true时，<br />点击链接后将替代历史堆栈中的当前条目，<br />而不添加新条目，默认false |
| `innerRef` | `function`      |                    运行访问组件的底层引用                    |
| `others`   | `...`           |       传递一些其他属性，如`title 、 id 、 className`等       |



## NavLink < 特殊跳转 >

> 一个特殊版本的`<Link>`，它会在与当前`URL`匹配时为其呈现元素添加样式属性

```react
import { NavLink } from 'react-router-dom'
<NavLink to='/about'>About</NavLink>
```

属性：

| 属性              | 值         |                       解释                       |
| ----------------- | ---------- | :----------------------------------------------: |
| `activeClassName` | `String`   |   当元素处于激活状态时应用的类，默认是‘active’   |
| `activeStyle`     | `Object`   |          当元素处于激活状态时应用的样式          |
| `exact`           | `Boolean`  | 如果为`true`,只有位置完全匹配时才应用激活类/样式 |
| `strict`          | `Boolean`  |               启用严格模式匹配路径               |
| `isActive`        | `function` |   添加额外逻辑以确定链接是否处于激活状态的函数   |
| `location`        | `object`   |      默认比较当前历史位置（当前浏览器URL）       |



## Route < 路由 >

method  渲染方法：

| 组件                  |                   解释                   | 实例                                                |                             警告                             |
| --------------------- | :--------------------------------------: | --------------------------------------------------- | :----------------------------------------------------------: |
| `<Route component > ` |     引入组件，使用commponent属性绑定     | `<Route path="/user/:username" component={User} />` | 切换路由，现有组件的卸载和新组件的<br />安装，而不仅仅是更新现有组件 |
| `<Route render >`     | 方便地进行内联渲染和包装，没有上面的重装 | `<Route render={routerprops=>(<User />)} />`        | < route component > 优先于 < route render > ，<br />所以不要在同一 < route > 中同时使用这两个组件。 |
| `<Route children >`   |                                          |                                                     | < route children > 优先于 < route component > 和 < route render > ，<br />所以在同一 < route > 中不要使用超过一个 |

 props  接受参数 (每一种渲染方法都有三个属性)

| props      | 解释 | 实例 |
| ---------- | ---- | ---- |
| `match`    |      |      |
| `location` |      |      |
| `history`  |      |      |

其他参数

| 属性        | 类型   | 解释                                             |
| ----------- | ------ | ------------------------------------------------ |
| `path`      | String | 匹配url路径                                      |
| `exact`     | bool   | 当路径与 location.pathname 完全匹配时才匹配      |
| `strict`    | bool   | strict 可用于强制 location.pathname 没有尾部斜杠 |
| `location`  | Object |                                                  |
| `sensitive` | bool   | 路径区分大小写                                   |



## Router < 路由器 >

分类：

| 组件             | 解释                                       |
| ---------------- | ------------------------------------------ |
| `<BrowerRouter>` | 使用HTML5 histroy API 记录,UI与URL保持同步 |
| `<HashRouter>`   | 使用URL的hash部分来保持UI和URL的同步       |
| `<MemoryRouter>` | 记忆路由器，保存`URL`历史记录在内存中      |
| `<NativeRouter>` |                                            |
| `<StaticRouter>` | 静态路由，永远不会改变地址                 |

### 1.BrowerRouter <浏览器路由>

> 使用HTML5 history API 记录（ `pushState`，`replaceState` 和 `popstate` 事件）的 router,使您的UI与URL保持同步



### 2. HashRouter <hash路由 > 

> `<HashRouter>`使用URL的hash部分来保持UI和URL的同步

```react
import { HashRouter } from 'react-router-dom'
<HashRouter>
    <App />
</HashRouter>
```

属性：

| 属性                  | 值         |                             解释                             |
| --------------------- | ---------- | :----------------------------------------------------------: |
| `basename`            | `String`   | 所有位置的基准 ,<br />正确格式是前面有前导斜杠，尾部没有斜杠 |
| `getUserConfirmation` | `function` |          用于确认导航的函数，默认使用window.confirm          |
| `hashType`            | `String`   | `slash` - 后面跟一个斜杠<br />`noslash` - 后面没有斜杠<br />`hashbang` - Google风格的路径 如 `#!/`和`#!/sunshine/1` |
| `children`            | `node`     |                      要呈现的单个子组件                      |



### 3.MemoryRouter <记忆路由 >

> 保存`URL`历史记录在内存中



### 4.StaticRouter  < 静态路由 > 

> 永远不会改变地址的 < 路由器 >



## Route.props < 路由参数 >

> Route中接受的三个 props 参数 

### 1. match

| 属性      | 类型      | 解释                                |
| --------- | --------- | ----------------------------------- |
| `params`  | `object`  | key/value 与动态路径的`URL`对应解析 |
| `path`    | `string`  | 用于匹配的路径模式                  |
| `url`     | `string`  | 用于匹配部分的`URL`                 |
| `isExact` | `boolean` | 是否开启完全匹配                    |



### 2. location

> location 对象永远不会发生变化，因此你可以在生命周期钩子中使用它来确定何时导航，这对数据抓取和动画非常有用



### 3. history

> ## [history 是可变的](https://react-router.docschina.org/web/api/history/history)

| 属性                    | 类型       | 解释                                                         |
| :---------------------- | ---------- | ------------------------------------------------------------ |
| `length`                | `number`   | history堆栈的条目数                                          |
| `action`                | `string`   | 当前的操作(`push replace pop`)                               |
| `location`              | `object`   | 当前的位置；具有以下属性<br />`pathname` - `URL`路径<br />`search` - `URL`中的查询字符串<br />`hash` - `URL`的哈希片段<br />`state` - 使用push操作时将location放入堆栈是的特定location状态 |
| `push(path,[state])`    | `function` | 在history堆栈添加新的条目                                    |
| `replace(path,[state])` | `function` | 替换在 history 堆栈中的当前条目                              |
| `go(n)`                 | `function` | 相当于 go(n)                                                 |
| `goBack()`              | `function` | 相当于 go(-1)                                                |
| `goForward()`           | `function` | 相当于 go(1)                                                 |
| `block(prompt)`         | `function` | 阻止跳转                                                     |

