import React from 'react';

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
                <div>-------22222child------</div>
                 {/* 拿到父路由组件传入的自定义属性 */}
                <div>??{this.props.someProp} ??</div>
            </section>
        )
    }
}
