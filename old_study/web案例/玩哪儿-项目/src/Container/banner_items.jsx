import React from 'react'

// 轮播图项
export default class Parent extends React.Component{
   
    render() {
        return <li>
        <a href={this.props.url} style={{backgroundImage:"url("+this.props.img+")"}}></a>
    </li>
    }


}

