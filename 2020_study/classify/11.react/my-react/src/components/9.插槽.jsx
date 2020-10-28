import React from 'react';


export default class Cc extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
        }

        console.log(props)
        // 插槽内的内容没有被渲染到页面，但是在props 的 children 下能看到
        // 可以拿到 插槽 内容的 属性、变量...
    }
  
    render(){
        
        return(
            <section>
                <h1>组件插槽</h1>
                {this.props.children}
                {/* 直接把这个数组丢到这里 */}
            </section>
        )
    }
}






