import React from 'react';
import routes from  '../router/index'
import {renderRoutes, matchRoutes} from 'react-router-config';
import {HashRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'
export default class Ly extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
            /* 
        matchRoutes 查找匹配的路由，返回一个匹配的数组
        [
        {
            match: ...,
            route: ...
        },
        ...
        ]
    */
    console.log('matchRoutes', matchRoutes(routes, "/two"));
    console.log(this.props);
        
    }
    
    render(){
        return(
            <section>
                <div>22222222222222</div>
                <div>{console.log(this.props.route)}</div>
                  <Router> 
                    <Link to="/two/"  style={{display:'block'}}>to 孙子 </Link>
                    {/* 渲染当前路由下的子路由所对应的组件，第二个参数是给子路由传入的额外自定义的参数 */}
                    
                    {renderRoutes(this.props.route.routers, { someProp: "these extra props are optional" })}
                     {/* {renderRoutes(this.props.route.routers)} */}
            
                 </Router>
            </section>
        )
    }
}
