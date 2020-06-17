import React from 'react'
import $ from "jQuery"
import IAsideCss from "../css/i_aside.less" // 引入模块化css

import  "../iconfont/dianhua、xinx/font_apwgftd3ps8/iconfont.css"//引入电话信息图标
import  "../iconfont/xunhuan/font_lbl2t4bn80i/iconfont.css"//引入循环图标
import  "../iconfont/youjian、ysjt/font_3s8qd6km3el/iconfont.css"//引入邮件、右上箭头图标
import  "../iconfont/ycdw：wx、fh、gwc/font_v7nne1sdi0n/iconfont.css"//引入wx gwc fhdb






// 右侧定位模块
export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return <div className={IAsideCss.Raside}>
                <ul className="RasideList">
                    <li>
                        <i className="iconfont icon-iconset01401"></i>
                        <b className="iconfont icon-xunhuan1"></b>
                        <p>客服</p>
                    </li>
                    <li>
                        <i className="iconfont icon-tel-fill1"></i>
                        <p>电话</p>
                        <div className="AHov dhho">
                            <h6>客服电话</h6>
                            <div className="AHfgx"></div>
                            <h6>888-928-2988 (美国)</h6>
                            <h6>3008-5867 (香港)</h6>
                            <h6>400-803-8618 (中国)</h6>
                            <h6>02-5592-4871 (台湾)</h6>
                        </div>
                    </li>
                    <li>
                        <i className="iconfont icon-email-s3"></i>
                        <p>邮箱</p>
                        <div className="AHov yxho">
                            <h6>客服邮箱</h6>
                            <div className="AHfgx"></div>
                            <h5>service@mail.wannar.com</h5>
                            <div className="AsMargin"></div>
                            <h6>包团定制</h6>
                            <div className="AHfgx"></div>
                            <h5>vip@mail.wannar.com</h5>
                        </div>
                    </li>
                    <li>
                        <i  className="iconfont icon-icon"></i>
                        <p>微信</p>
                        <div className="AHov wxho">
                            <img src={require('../images/qrcode_wannar_go.jpg').default} alt=""/>
                            <h5>微信公众号：玩哪儿网</h5>
                        </div>
                    </li>
                    <li>
                        <i  className="iconfont  icon-gouwuche"></i>
                        <p>购物车</p>
                        <div className="size">0</div>
                    </li>
                    <li>
                        <i  className="iconfont icon-icon-arrow-top4"></i>
                        <p>返回顶部</p>
                    </li>
                </ul>
          </div>
                
    }

    componentDidMount(){
      
        


    }
}


