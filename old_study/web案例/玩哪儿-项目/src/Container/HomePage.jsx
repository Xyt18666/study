import React from 'react'
import $ from "jQuery"

import BannerJ from "../jsons/bannerJ.json"  //轮播图json数据
import BanNavJ from "../jsons/banNav.json"  //导航json数据
import SpecialWeek from "../jsons/specialWeek.json"  //本周特卖json数据

import BanItems from "./banner_items.jsx"    //轮播图子项
import BanDian from "./banner_dian.jsx"    //轮播图点

import "../css/i_m_homePage.css"    //非模块化css

import "../iconfont/zb、yjt/font_tu6i4m4cf9/iconfont.css"  //引入坐标和右箭头

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
                banner:BannerJ
             }
    }


    
    render() {
        return  <div> 
            <section className="bannerAndSideNav">
                {/* 轮播图 */}
                <section className="banner">
                    <ul className="BanList">
                        {this.state.banner.map((item,i)=>{
                            return <BanItems key={i} {...item}></BanItems>
                        })}
                    </ul>
                    <ol className="BanDian">
                        {this.state.banner.map((item,i)=>{
                            return <BanDian key={i} {...item}></BanDian>
                        })}
                    </ol>
                    <div className="nextBan">〉</div>
                    <div className="preverBan">〈</div>
            
                </section>	

                {/* 轮播图上的导航 */}
                <section className="sideNav">
                    <div className="navLCon">
                        <h2><i className="iconfont icon-zuobiaofill"></i>全部目的地</h2>
                        <div className="BNavList">     
                        </div>
                    </div>
                    <a href="#" className="banMask"></a>
                </section>			
           
            </section>

            {/* 轮播图下的模块 */}
            <section className="bAS_button">
                <ul className="BBList">
                    <li>
                        <div className="BBLImgBox"></div>
                        <div className="textBox">
                            <h4>美国旅行社执照</h4>
                            <h5>CST#2119862-40</h5>
                        </div>
                    </li>
                    <li>
                        <div className="BBLImgBox"></div>
                        <div className="textBox">
                            <h4>最高评级A+旅行网站</h4>
                            <h5>Better Business Bureau<sup>&#174;</sup></h5>
                        </div>
                    </li>
                    <li>
                        <div className="BBLImgBox"></div>
                        <div className="textBox">
                            <h4>旅游产品直采</h4>
                            <h5>欧美当地最优地接社</h5>
                        </div>
                    </li>
                    <li>
                        <div className="BBLImgBox"></div>
                        <div className="textBox">
                            <h4>买完再比价</h4>
                            <h5>48H内同款退差保证</h5>
                        </div>
                    </li>
                </ul>
            </section>



            {/* 本周特卖                 */}
            <section className="specialWeek">
                <section>
                    <div className="SWTop">
                        <h3>
                            <i></i>
                            <p>本周特卖</p>
                            <span>每周四准时更新，必看的特价精选</span>
                        </h3>
                        <div className="SWTRButt">
                           
                        </div> 
                    </div>
                    <div className="SWTRItemBox">
                       
                    </div>
                </section>
            </section>
        

            <section className="placeMust">
                <div className="PMcon">
                    <div className="PMCT">
                        <h3>
                            <i></i>
                            <p>必玩景点</p>
                        </h3>
                    </div>  
                    <div className="PMItems">
                        <div className="PMIL">〈</div>
                            <div className="PMListBox">
                                <ul className="PMList">
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-niagara.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>尼亚加拉大瀑布</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-antelope-canyon.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>羚羊峡谷</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-grand-canyon.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>大峡谷</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-yellowstone.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>黄石国家公园</p>
                                        </a>
                                    </li>
                                
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-banff.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>班夫国家公园</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-yosemite-2.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>优美胜地</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-orlando.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>奥兰多</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-arches.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>拱门国家公园</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-niagara.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>尼亚加拉大瀑布</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-antelope-canyon.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>羚羊峡谷</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-grand-canyon.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>大峡谷</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-yellowstone.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>黄石国家公园</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-banff.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>班夫国家公园</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-yosemite-2.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>优美胜地</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-orlando.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>奥兰多</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="https://us-website.wannar.com/images/index/theme/theme-arches.jpg?x-oss-process=image/resize,h_321" alt=""/>
                                            <p>拱门国家公园</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        <div className="PMIR">〉</div>
                    </div>
                </div>    
            </section>
         </div>   
    }




    componentDidMount(){

        $(function(){
            var index=0;
        
            $(".preverBan").click(function(){
                index--
                if(index<0){
                    index=4
                }
                tab()
            })
        
            $(".nextBan").click(function(){
                index++
                if(index>4){
                    index=0
                }
                tab()
            })
        
        
            var ds=setInterval(function(){
                $(".nextBan").click()
            },2000)
            
            $(".banner,.banMask").mouseover(function(){
                clearInterval(ds)
            })
            $(".banner,.banMask").mouseout(function(){
                ds=setInterval(function(){
                    $(".nextBan").click()
                },2000)
            })
        
            for(let a=0; a<$(".BanDian li").length; a++){
                $(".BanDian li").eq(a).mouseover(function(){
                    index=a
                    tab()
                })
            }
        
            function tab(){
                $(".BanDian li").eq(index).css("background","#ff3573").siblings().css("background","rgba(0,0,0,0.7)")
                $(".BanList li").eq(index).css({
                    opacity:1,
                    zIndex:99
                }).siblings().css({
                    opacity:0,
                    zIndex:0
                })
            
                $(".banMask").attr("href",$(".BanList li").eq(index).find("a").attr("href"))
               
            }





            // 以下是动态创建的nav
            for(let a=0; a<BanNavJ.items.length; a++){
                let li= ``
                for(let b=0; b<BanNavJ.items[a].list.length; b++){
                    li+=`<li><a href="#">${BanNavJ.items[a].list[b]}</a></li>`
                }

                let spanStr= ``
                if(BanNavJ.items[a].span){
                    spanStr =` <span>${BanNavJ.items[a].span}</span>`
                }else{
                    spanStr =``
                }

                let BHovUl=``
                for(let c=0; c<BanNavJ.items[a].hov.length; c++){
                   


                    let iahc = BanNavJ.items[a].hov[c]

                    let BHovUlLi= ``
                    for(let d=0; d<iahc.length; d++){
                        let iahcd = iahc[d]  
                        let NHovol =``
                        let NHovOlli =``
                        let NHova =``
                        let NHovp =``
                        let NHovih =``
                        if(iahcd.p){
                            NHovp =`<p>${iahcd.p}</p>`
                        }else{
                            NHovp =``
                        }


                        
                        if(iahcd.ollist){
                            for(let e=0; e<iahcd.ollist.length; e++){
                                NHovOlli+= ` <li><a href="#">${iahcd.ollist[e]}</a></li>`
                            }
                            NHovol=`<ol>${NHovOlli}</ol>`
                        }else{
                            NHovol =``
                        }

                       
                        if(iahcd.alist){
                            for(let f=0; f<iahcd.alist.length; f++){
                                NHova+= `<a href="#">${iahcd.alist[f]}</a>`
                            }
                        }else{
                            NHova =``
                        }

                        if(iahcd.hovimg && iahcd.hovhref){
                            NHovih+= `<a href=${iahcd.hovhref}><img src=${iahcd.hovimg} alt=""/></a>`
                        }else{
                            NHovih=``
                        }

                        BHovUlLi+=`<li>${NHovp} ${NHovol} ${NHova} ${NHovih}</li>`

        
                    }
                    BHovUl+=`<ul class="BNH">${BHovUlLi}</ul>`
                    
    
                }



               $(` <div class="BNItem BNItem${a+1}">
                   <a href="#"><h3><p>${BanNavJ.items[a].p} ${spanStr}</p>  <i class="iconfont icon-tubiaozhizuo-"></i></h3></a>
                    <ul>${li}</ul>
                    <div class="BNavHov">
                        <div class="BNavHovJ"></div> 
                        ${BHovUl}
                    </div>
                </div>`).appendTo(".BNavList")



            }

            $(".BNItem>ul>li>a:contains(纽约),.BNItem>ul>li>a:contains(伦敦),.BNItem>ul>li>a:contains(卡尔加里)").css({
                color:"#FFB830"
            })
        
            $(".BNItem .BNavHov").hide()
            $(".BNItem").each((index,items)=>{

                $(".BNItem").eq(index).hover(()=>{
                    $(".BNItem").eq(index).children(".BNavHov").show()
                    $(".BNItem").eq(index).find("h3 i").hide()
                },()=>{
                    $(".BNItem").eq(index).children(".BNavHov").hide()
                    $(".BNItem").eq(index).find("h3 i").show()
                })
            })

           
        })

       
        // 本周特卖
        for(let q=0; q<SpecialWeek.length; q++){
            console.log(SpecialWeek[q])
            $(`<div>${SpecialWeek[q].title}</div>`).appendTo(".SWTRButt")
           
            let SWli=``
           
            for(let w=0; w<SpecialWeek[q].list.length; w++){
                SWli+=` <li>
                        <div class="SWTRUBL">
                            <a href="#">
                                <h2>${SpecialWeek[q].list[w].h2}</h2>
                                <h3><span>${SpecialWeek[q].list[w].h3}</span>折</h3>
                                <h4>${SpecialWeek[q].list[w].h4}</h4>
                                <h5><span>${SpecialWeek[q].list[w].h5}</span>/人起</h5>
                                <s>${SpecialWeek[q].list[w].h5}</s>
                            </a>
                        </div>
                        <div class="SWTRUBR">
                            <img src=${SpecialWeek[q].list[w].img} alt=""/>
                            <div class="BRmarsk">
                                ${SpecialWeek[q].list[w].text}
                            </div>
                        </div>
                    </li>`
            }

            $(`<div><ul>${SWli}</ul></div>`).appendTo(".SWTRItemBox")

        }
        
        $(".SWTRButt>div:nth-child(1)").addClass("SWTRButtCli").siblings().addClass("SWTRButtHov")

        $(".SWTRItemBox>div ul li:nth-child(1) h3,.SWTRItemBox>div ul li:nth-child(1) h4,.SWTRItemBox>div ul li:nth-child(1) s").hide()

        $(`<b>低价保证<i></i></b>`).appendTo(".SWTRItemBox>div ul li:nth-child(1) .SWTRUBL")


        $(".SWTRButt>div").each((inde,item)=>{
            $(".SWTRButt>div").eq(inde).click(()=>{

                $(".SWTRItemBox>div").eq(inde).show().siblings().hide()

                $(".SWTRButt>div").eq(inde).removeClass("SWTRButtHov").addClass("SWTRButtCli").siblings().removeClass("SWTRButtCli").addClass("SWTRButtHov")
               

            })
        })


        // 必玩景点
        var BWindex=0;

        $(".PMList").animate({
            left:-BWindex*237
        },300)

        $(".PMIR").click(function(){
            BWindex++
            if(BWindex>11){
                BWindex=4
                $(".PMList").css({
                    left:-711
                })
            }
            $(".PMList").animate({
                left:-BWindex*237
            },300)

        })
        $(".PMIL").click(function(){
            BWindex--
            console.log(BWindex)
            if(BWindex<0){
                BWindex=7
                $(".PMList").css({
                    left:-1896
                })
                
                
            }
            $(".PMList").animate({
                left:-BWindex*237
            },300)
            
        })


    }
    

}

