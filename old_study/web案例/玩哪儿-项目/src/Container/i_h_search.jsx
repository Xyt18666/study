import React from 'react'
import $ from "jQuery"
import IHSearchCss from "../css/i_h_search.less" // 引入模块化css
import  "../iconfont/chahao/font_hm2pbud6uke/iconfont.css"//引入叉号
import  "../iconfont/sanjiao/font_6esvokjkz9t/iconfont.css"//引入字体三角图标
import  "../iconfont/dianhua、xinx/font_apwgftd3ps8/iconfont.css"//引入电话信息图标
import  "../iconfont/fadajing/font_7btpv2o9gce/iconfont.css"//引入放大镜信息图标
import  "../iconfont/xunhuan/font_lbl2t4bn80i/iconfont.css"//引入循环图标

console.log(IHSearchCss)


// 顶部通栏模块
export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return <div>
             <section className={IHSearchCss.Advertisement}>
                <a href="#"><img src={require('../images/20191028.jpg').default} alt=""/></a>
                <div className="button"><i className="iconfont icon-cha"></i>关闭</div>
            </section>
            <section className={IHSearchCss.IHSearch}>
                 <a href="#">
                     <h1></h1>
                 </a>
                 <form action="#" method="post">
                     <input type="text" placeholder="搜索目的地/景点/旅游团"/>
                     <i className="iconfont icon-fangdajing"></i>
                 </form>
                 <div className="tel">
                     <i className="iconfont icon-tel-fill"></i>
                     <ul className="telList">
                        <li><span>888-928-2988</span>(北美)</li>
                        <li><span>400-803-8618</span>(中国大陆)</li>
                        <li><span>3008-5867</span>(香港)</li>
                        <li><span>02-5592-4871</span>(台北)</li>   
                        <li><span>1-650-388-9282</span>(国际直拨)</li>     
                     </ul>
                     <b className="iconfont icon-sanjiao" style={{fontSize:"26px",color:"#ccc"}}></b>   
                 </div>
                <div className="zxkf">
                    <i className="iconfont icon-iconset0140"></i>
                    <b className="iconfont icon-xunhuan"></b>
                    <span>在线客服</span>
                </div>
            </section>
        </div>
    }

    componentDidMount(){
        let onoff = true;

        $("."+IHSearchCss.Advertisement+" .button").click(()=>{
            $("."+IHSearchCss.Advertisement).slideUp()  
        })


        $(".tel").on("mouseenter",()=>{
            if(onoff){
                $(".tel").css({
                    boxShadow:"0 0 10px 1px #ccc"
                })
                $(".tel b").hide()
                $(".tel").animate({
                    marginTop:(115-37)+"px",
                    height:"115px"
                },200)
                $(".tel ul").animate({
                    marginTop:"10px",
                    height:"105px"
                },200)

                setTimeout(()=>{
                    onoff = false
                },200)
            }else{
                null
            }
        
    })
    

    $(".tel").on("mouseleave",()=>{
        if(!onoff){
            $(".tel").css({
                boxShadow:"none"
            })
            $(".tel b").show()
            $(".tel").animate({
                marginTop:"0px",
                height:"37px"
            },200)
            $(".tel ul").animate({
                marginTop:"0px",
                height:"37px"
            },200)

            setTimeout(()=>{
                onoff = true
            },200)
    
        }else{
            null
        }
        
    })
    
        

       $(".zxkf").click(()=>{
            $(".zxkf span").text("正在连接···")
            $(".zxkf i").hide()
            $(".zxkf b").show()

            $(".RasideList li:nth-child(1) i").hide()
            $(".RasideList li:nth-child(1) b").css({
                display:"block"
            })
       })

    }
}


