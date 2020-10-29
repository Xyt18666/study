import React from 'react';
import {HashRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'
import {renderRoutes} from 'react-router-config';
import routes from  '../router/index'

export default class Ly extends React.Component{
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
                <Router> 
               
                   <div>
 
                        <ul>
                            <li><Link to="/"  style={{display:'block'}}>1 页 面  </Link></li>
                            <li><Link to="/two" style={{display:'block'}}>2 页 面  </Link></li>
                            <li><Link to="/three" style={{display:'block'}}>3 页 面  </Link></li>
                        </ul>

                        {renderRoutes(routes)}
                        {/* {
                            routes.map((item,idx)=>{
                            if(item.exact){
                                return <Route key={idx} exact path={item.path} component={item.component}></Route>
                            }else{ 
                                return <Route key={idx} path={item.path} component={item.component}></Route>
                            }
                            })
                        } */}

                    </div>   

                </Router>
            </section>
        )
    }
}
