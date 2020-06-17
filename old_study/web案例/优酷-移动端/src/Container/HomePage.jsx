import React from 'react'
import $ from "jQuery"
import IHBanner from '../Container/i_h_banner-SWP.jsx' //引入banner
import IHBBottom from '../Container/i_h_b_bottom.jsx' //引入banner bottpm
import IHFlorHead from '../Container/Floor_head.jsx' //引入floor head
import IHFlorItems from '../Container/Floor_items.jsx' //引入floor items
import { Link } from 'react-router-dom'



export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            floorHead:[
                {
                    title:"剧集",
                    img:"http://liangcang-material.alicdn.com/prod/upload/00b847cebc444f59b5f71812641f8119.jpg",
                    size:"更新至56集",
                    name:"<乡村爱情12>更新🔥谢广坤端架子惹恼众人",
                    content:"老徐低姿态主动求和，谢广坤蹬鼻子上脸提要求",
                    id:"9818"
                }
            ],
            floorItem:[
                {
                    img:"https://liangcang-material.alicdn.com/prod/upload/6aae6edb5ae24cff9e14ac3d09ea4ec0.gif",
                    size:"更新至15集",
                    name:"法证先锋🔥",
                    vip:"vip",
                    content:"水泥藏身身份成迷",
                    id:"8686"
                },
                {
                    img:"http://liangcang-material.alicdn.com/prod/upload/f61c8c5f2dc342a7b385fcfc34a37a4c.jpg",
                    size:"更新至27集",
                    name:"我在北京等你",
                    vip:"独播",
                    content:"李易峰江疏影逐梦"
                },
                {
                    img:"https://liangcang-material.alicdn.com/prod/upload/4fe810213a834c9f892c3cc6a6021d44.gif",
                    size:"更新至5集",
                    name:"重生🔥超好看",
                    vip:"vip",
                    content:"张译变身硬汉查悬案"
                },
                {
                    img:"http://liangcang-material.alicdn.com/prod/upload/ca7d97eea1544db49449a83903653ec9.jpg",
                    size:"更新至15集",
                    name:"法证先锋🔥",
                    vip:"vip",
                    content:"水泥藏身身份成迷"
                },
                {
                    img:"https://liangcang-material.alicdn.com/prod/upload/6aae6edb5ae24cff9e14ac3d09ea4ec0.gif",
                    size:"更新至50集",
                    name:"热血同行艳势番",
                    vip:"vip",
                    content:"滔滔千禧并肩作战"
                },
                {
                    img:"http://liangcang-material.alicdn.com/prod/upload/47a389fbc5dd42d5871f6fa613d41ee5.jpg",
                    size:"更新至8集",
                    name:"无心法师3",
                    vip:"vip",
                    content:"韩东君陈瑶续前缘"
                }
            ]
        }
     
    }
    render(){
        return  <div>
            <IHBanner></IHBanner>
            <IHBBottom></IHBBottom>
            {this.state.floorHead.map((item,index)=>{
                return <IHFlorHead {...item} key={index}></IHFlorHead>
            })}

            <section style={{
                display:"flex",
                justifyContent:"space-between",
                flexFlow:"wrap row",
                marginTop:"20px"
            }}>
                {this.state.floorItem.map((item,index)=>{
                    return <IHFlorItems {...item} key={index}></IHFlorItems>
                })}
            </section>

        
            {/* <Link to="/child/xxx?某某子页面参数=值" className="childs" ><h3>child</h3></Link> */}
            {/* search 传参 
            
                更多传参方式 ：https://www.jianshu.com/p/ad8cc02b9e6c
            
            */}
   
       
                    

            
        </div>
    }

  

    componentDidMount(){

        
        $(".childs").click(function(){
            $("header").css({
                display:"none"
            })
            $(window).scrollTop("0px")
        })

        

    }

}