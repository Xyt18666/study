import React from 'react'
import BBItemsCss from "../css/i_h_bbItems.less" // 引入模块化css
import { Link } from 'react-router-dom'

export default function ComItem(props){

	return <div className={BBItemsCss.items}>
        <Link to={"/child/xxx?state="+props.id} className="childs" >
                <div className={BBItemsCss.imgbox}>
                    <img src={props.img} alt=""/>
                    <span>{props.size}</span>
                    <b>{props.vip}</b>
                </div>
                <h3>{props.text}</h3>
                <p>{props.cont}</p>
        </Link>
    </div>
}

