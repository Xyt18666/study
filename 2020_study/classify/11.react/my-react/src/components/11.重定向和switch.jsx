
import React from 'react';

import {BrowserRouter as Router,Link,Route,Redirect,Switch} from 'react-router-dom'


// 判断登录状态组件,然后重定向 到  某个页面
function loginfor(props){
    if(props.islong){
        return <Redirect to="/tj"></Redirect>
    }else{
        return <Redirect to="/yz"></Redirect>
    }
    
}


export default class Cdx extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
    }
    render(){
       
        return(
            <section>
                <div>switch 和 重定向</div>
                
                {/* <Router>
                    <Link to="/loginfor">loginfor</Link>
                    <Switch>
                        <Route path="/" exacrt component={()=>(<h3>首页</h3>)}></Route>
                        <Route path="/tj"  component={this.yzfn}></Route>
                        <Route path="/yz"  component={()=>(<h3>验证</h3>)}></Route>
                        <Route path="/loginfor"  component={loginfor}></Route>
                    </Switch>
                </Router> */}
                
            </section>
        )
    }
    yzfn(){
        return (
            <div>
                <h1>表单yz</h1>
                <Link to={{
                        pathname:"/loginfor",
                        state:{
                            islog:'success'
                        }
                }}>登录后页面</Link>
            </div>
        )
    }
}


