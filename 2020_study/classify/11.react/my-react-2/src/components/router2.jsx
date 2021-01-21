
import React from "react";


import {renderRoutes} from 'react-router-config';
import {Link} from 'react-router-dom'


class Tow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
       
    }
    render() {
      

        return (
          
                <div>
                    <h1>router22222</h1>
        
                    <Link to="/tow/child/key=789"  >to child </Link>
                    <button onClick={this.toChild}> js方式跳转 </button>

                    
                
                    <Link to={{
                            pathname:"/tow/child/key=789",
                            state:{                  
                                key:'success'
                            }
                    }}>query 和 state方式</Link>
                        
                    {renderRoutes(this.props.route.children, { state: "参数" })}   
                    {/* renderRoutes(子路由, {可传参}) */}

            
                </div>
           
        
        )
    }
    toChild = ()=>{
     
        this.props.history.push("/tow/child/key=789")
    }
}

export default Tow;