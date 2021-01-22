
import React from "react";

// import {Redirect} from 'react-router-dom'

import "../css/Animation.css"
import "animate.css";
import { CSSTransition }  from "react-transition-group";

// import Transition from "./Transition"

class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false,
            transition:"animate__backInDown",

        };
    }
    componentWillMount() {
        console.log('路由跳转前的拦截', this.props)
        let { history: { replace }, location } = this.props
        if(location != "/123"){
            // replace("/tow")
            // 模拟导航守卫
        }
    }


    componentDidMount() {
       
    }
    divControl = () => {
        this.setState(() => ({ show: this.state.show ? false : true }))
    }
    hanldleMenu = ()=>{
        this.setState({
     
            transition:'animate__backInDown' === this.state.transition ? 'animate__backInRight' : 'animate__backInDown'
        })
    }
    render() {
      

        return (
            <div className="box">
                <h1>router1

                        {/* <Redirect to="/tow"></Redirect> */}
                </h1>

                <div className={this.state.show ? 'show' : 'hide'}>hello</div> 
                <button onClick={this.divControl}>按钮</button>
                {/* 点击按钮hello展示或隐藏 */}
               <CSSTransition
                    in={this.state.show}
                    timeout={2000}
                    classNames="alert"
                    unmountOnExit
                >
                    <div style={{border:"1px solid black",backgroundColor:"red"}}>
                        <p>
                            This alert message is being transitioned in and
                            out of the DOM.
                        </p>
                    </div>
                </CSSTransition>
                 <CSSTransition
                    in={this.state.show}
                    timeout={2000}
                    classNames={{
                        exit: 'animate__animated',
                        enter: "animate__animated",
                        enterActive: "animate__backInDown",
                        exitActive: "animate__backOutUp",
                    }}
                    unmountOnExit
                >
                    <div style={{border:"1px solid black",backgroundColor:"red"}}>
                        <p>
                            This alert message is being transitioned in and
                            out of the DOM.
                        </p>
                    </div>
                </CSSTransition>


    
                {/* <Transition>
                    <div onClick={this.hanldleMenu}
                        className={`animate__animated ${this.state.transition}`}>
                       <p>另一个插件</p> 
                    </div>
                </Transition> */}
          
            </div>
        )
    }
    
}

export default One;