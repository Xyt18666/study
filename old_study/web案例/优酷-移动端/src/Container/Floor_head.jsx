import React from 'react'
import FloorHeadCss from "../css/Floor_head.less" // 引入模块化css


export default function ComItem(props){
	return <div className={FloorHeadCss.fhBox}>
        <h4>{props.title}</h4>
        <a href="#">
            <img src={props.img} alt=""/>
            <span>{props.size}</span>
        </a>
            <h5>{props.name}</h5>
            <h6>{props.content}</h6>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
}
