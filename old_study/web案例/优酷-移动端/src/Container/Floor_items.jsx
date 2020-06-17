import React from 'react'
import FloorHeadCss from "../css/Floor_items.less" // 引入模块化css
import { Link } from 'react-router-dom'


export default function ComItem(props){
	return <div className={FloorHeadCss.fitems}>
         <Link to={"/child/xxx?state="+props.id} className="childs" >
        <div className={FloorHeadCss.imgbox}>
           <img src={props.img} alt=""/>
           <span>{props.size}</span>
           <b>{props.vip}</b>
       </div>
       <h5>{props.name}</h5>
        <h6>{props.content}</h6>
        </Link>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
}
