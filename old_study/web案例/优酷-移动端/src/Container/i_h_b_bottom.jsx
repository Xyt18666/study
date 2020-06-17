import React from 'react'
import $ from "jQuery"
import VideoIiems from "./VideoIiems.jsx"

export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bbottomL:[{
                "img":"https://liangcang-material.alicdn.com/prod/upload/2bcd783003044293aeb1c6436e9a6086.jpg?x-oss-process=image/resize,w_640/format,webp/interlace,1",
                "size":"更新至22级",
                "text":"我在北京等你❤️甜撩",
                "cont":"情话满满，李易峰在线撒娇蹭饭",
                "vip":"独播"
            },{
                "img":"https://liangcang-material.alicdn.com/prod/upload/f0e564ffc4a1454cbc98d6e1fb1f3853.gif",
                "size":"更新至54级",
                "text":"乡村爱情12🔥更新",
                "cont":"谢广坤满嘴胡说遭七哥暴揍",
                "vip":"VIP"
            },{
                "img":"http://liangcang-material.alicdn.com/prod/upload/f77540a746da4cc48410360a12db9dd7.jpg",
                "size":"02-29期",
                "text":"非诚勿扰·太卑微",
                "cont":"男嘉宾曝经常被使唤像保姆",
                "vip":"独播"
            },{
                "img":"http://liangcang-material.alicdn.com/prod/upload/4b9350dcdfdc4bc1a7f9bbbae37dfc5b.jpg",
                "size":"7.7",
                "text":"叶问4·拳拳到肉",
                "cont":"燃！甄子丹咏春对决特种兵",
                "vip":"独播"
            }]
        }
    }
    render(){
        return  <div style={{
            display:"flex",
            justifyContent:"space-between",
            flexFlow:"wrap row",
            marginTop:"20px"
        }}>
                {this.state.bbottomL.map((item,index)=>{
                    return <VideoIiems {...item} key={index}></VideoIiems>
                })}

        </div>
    }

  

    componentDidMount(){
       

    }

}