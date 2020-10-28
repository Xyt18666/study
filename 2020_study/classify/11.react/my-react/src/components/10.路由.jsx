import React from 'react';

import {BrowserRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'


export default class Ly extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
            id:78
        }
    }
    componentDidMount(){
    }
    render(){
        {/* 可以 以对象的 形式传参 */}
        let datas = {
            pathame:"/home",
            search:"?username=meindex",
            hash:"#729"
            }
        return(
            <section>
                <Router basename="/me"> {/* basename="/me" 基础路径 */}
                {/*  
                当使用HashRouter后，把app根组件包裹以后，就启用路由了
                在一个网站中，只需要一次HashRouter，一个HashRouter中只能有一个唯一的根元素 */}

                    <div className="nav">
                        <Link to="/">首页</Link>  
                            {/* 可以 以对象的 形式传参 */}
                            
                        
                        <Link to="/move" replace>电影</Link>
                        {/* Link 的 replace 属性 将新地址替换成历史访问记录的原地址 */}
                        <Link to={"/dh/id="+this.state.id}>动画</Link>
                         <Link to="/xxx">首页xxx</Link>  



                    </div>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        {/* /后不写内容 并加入 exact 属性  默认显示 */}

                        <Route path="/move"  component={Move}></Route>
                        <Route path="/dh/:id" component={Dh}></Route>
                        <Redirect to="/move"></Redirect>
                    </Switch>
                    {/* 
                    默认情况下，路由中的规则是模糊匹配的，如果路由部分匹配成功，就会展示这个路由对应的组件
                    如果想要精确匹配，可以添加 exact 属性


                    如果要匹配参数，可以在匹配规则中 使用 : 修饰符  表示这个位置匹配的参数 */}

                </Router>
            </section>
        )
    }
}


function Home(props){
    console.log(props)//获取传入的参数
    return(
        <div>home</div>
    )
}

function Move(){
    return(
        <div>move</div>
    )
}

function Dh(props){

    return(
        <div>动画 {props.match.params.id}</div>
    )
}



