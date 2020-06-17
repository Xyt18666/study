import React from 'react'
import $ from "jQuery"

import IHTopFenceCss from "../css/i_h_topFence.less" // 引入模块化css
import  "../iconfont/quanqiu/font_h59ow6knqk8/iconfont.css"//引入字体全球图标
import  "../iconfont/sanjiao/font_6esvokjkz9t/iconfont.css"//引入字体三角图标

import imgZz from '../images/CST2020.jpg' //引入图片方式1


// 顶部通栏模块
export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return <div className={IHTopFenceCss.div}>
            {/* <script src={replaceF}/></script> */}
            <section>
                <div className={IHTopFenceCss.IHTF_left}>
                    <div className={IHTopFenceCss.IHTF_left_hover}> 
                        <p><i className="iconfont icon-quanqiu ii"></i><span>简体</span> | <span>美元</span><b className="iconfont icon-sanjiao"></b></p>
                        <div className={IHTopFenceCss.IHTF_left_hoverTo}>
                            <h5>语言 Language</h5>
                            <ul  className="clearFloat zt">
                                <li className="jt"><span onClick={this.jt}>简体中文</span></li> 
                                <li className="ft"><span onClick={this.ft}>繁體中文</span></li>
                                <li className="en"><a href="#"><span>English</span></a></li>
                            </ul>
                            <h5>货币单位 Currency</h5>
                            <ul className="clearFloat hb">
                                <li className="my"><span>美元 USD</span></li> 
                                <li className="rmb"><span>人民币 CNY</span></li> 
                                <li className="xtb"><span>新台币 TWD</span></li> 
                                <li className="oy"><span>欧元 EUR</span></li> 
                                <li className="jy"><span>加元 CAD</span></li> 
                                <li className="yb"><span>英镑 GBP</span></li> 
                                <li className="pb"><span>澳元 AUD</span></li> 
                                <li className="xxl"><span>新西兰元 NZD</span></li> 
                            </ul>
                                
                        </div>
                    </div>
                    <a href="#">English Site</a>
                </div>
                <div className={IHTopFenceCss.IHTF_right}>
                    <p><a href="#">[登录]</a><span> | </span><a href="#">[注册]</a></p>
                    
                    <div className={IHTopFenceCss.IHTFR_zhiz }>
                        <h6>美国旅行社执照<b className="iconfont icon-sanjiao"></b></h6>    
                        <a href="#"><img src={imgZz}/></a>
                        
                    </div>
                    <div className={IHTopFenceCss.IHTFR_renz}>
                        <h6>美国旅游协会NTA认证<b className="iconfont icon-sanjiao"></b></h6>
                        <a href="#"><img src={require('../images/nta_2019_800x600.jpg').default} /></a>
                        {/* 引入方式2 */}
                   
                    </div>
                </div>
            </section>
        </div>
    }

    componentDidMount(){

        // 点击切换简体繁体

        $(".zt .jt").click(()=>{
            $(".ii+span").text("简体")
            qhTAb(".zt li",0)
            // zh_tran('t')
        })
        $(".zt .ft").click(()=>{
            $(".ii+span").text("繁体")
            qhTAb(".zt li",1)
            // zh_tran('s')
        })
        $(".zt .en").click(()=>{
            $(".ii+span").text("English")
            qhTAb(".zt li",2)
        })


        // 点击切换货币
        $(".hb li").each((index,item)=>{
            $(".hb li").eq(index).click(()=>{
                $(".ii+span+span").text($(".hb li").eq(index).text().replace(/[A-Z]/gi,""))

                qhTAb(".hb li",index)
                
            })

        })

        function qhTAb(obj,index){
            $(obj).eq(index).css({
                color:"#fff",
                background:" #ff3573"
            }).siblings().css({
                background: "rgba(228, 227, 227, 0.788)",
                color:"#333"
            })
        }




    }
   
    jt=()=>{
        // zh_tran('t')
       
    
    }
    ft=()=>{
        // zh_tran('t')
    }
}


