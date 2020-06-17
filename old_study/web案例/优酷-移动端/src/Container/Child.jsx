import React from 'react'
import $ from "jQuery"
import { Link } from 'react-router-dom'

export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
     
    }
    render(){
        return  <div>
            {/* search传参：
            通过this.props.location.search 拿到参数值 */}
              <Link to="/homePage"><div className="Toindex">返回首页</div></Link>
            拿到所点击的项的参数：{this.props.location.search} {this.state.id}
            通过参数匹配ajax数据生成固定结构的子页面

        </div>
    }

  

    componentDidMount(){
       $(".Toindex").click(function(){
            $("header").css({
                display:"block"
            })
            $(window).scrollTop("0px")
            document.title = '优酷视频-首页';
            
       })

    
       let id = this.props.location.search.split("=")[1] ||s
       document.title = 'xxx值';
      
    }

}