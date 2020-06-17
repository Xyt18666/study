import React from 'react'
import "../css/i_h_topFence.css" // 引入css
import $ from "jQuery"
import {HashRouter,Route,Link} from 'react-router-dom'//路由
import HomePage from './HomePage.jsx' //引入所需组件
import JuJi from './JuJi.jsx' 
import DianY from './DianY.jsx' 
import HuiY from './HuiY.jsx' 
import Child from './Child.jsx' 

// 顶部通栏模块
export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return <div>
            <HashRouter>
        <header>
             
            <section className="search">
                <a href="#"><img src="https://img.alicdn.com/tfs/TB1XqTXka61gK0jSZFlXXXDKFXa-180-36.png" alt=""/></a>
                <form action="#">
                    <input type="text" placeholder="法政先锋3"  onClick={this.clicked.bind(this)}  onChange={this.change.bind(this)} />
                    <img src="https://img.alicdn.com/tfs/TB15zSoX21TBuNjy0FjXXajyXXa-48-48.png" alt=""/>
                </form>
                <div className="loding">
                    <img src="https://img.alicdn.com/tfs/TB10zdbXL5TBuNjSspmXXaDRVXa-44-44.png" alt=""/>
                </div>

                <div className="searClickBox"  ref='searchC'>
                    <h6><p></p>大家都在搜</h6>
                    <ul>
                        <li>
                            <i>1</i>
                            <p>如影随心</p>
                        </li>
                        <li>
                            <i>2</i>
                            <p>哪吒之魔童降世</p>
                        </li>
                        <li>
                            <i>3</i>
                            <p>狮子王</p>
                        </li>
                        <li>
                            <i>4</i>
                            <p>海蒂与爷爷</p>
                        </li>
                        <li>
                            <i>5</i>
                            <p>猩球崛起3</p>
                        </li>
                    </ul>
                    <div className="close"  onClick={this.clickedTo.bind(this)}>关闭</div>
                </div>  
            </section>
            <nav>
                <ul  onTouchStart={this.handleTouchStart}
                     onTouchMove={this.handleTouchMove}
                     onTouchEnd={this.handleTouchEnd}>
                    <li>
                        <Link to="/homePage"><h3>首页</h3></Link>
                        <h4></h4>
                    </li>
                    <li>
                        <Link to="/juJi"><h3>剧集</h3></Link>
                        <h4></h4>
                    </li>
                    <li>
                        <Link to="/dianYing"><h3>电影</h3></Link>
                        <h4></h4>
                    </li>
                    <li>
                        <Link to="/huiY"><h3>会员</h3></Link>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>综艺</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>音乐</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>动漫</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>少儿</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>资讯</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>实际</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>财经</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>体育</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>教育</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>娱乐</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>游戏</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>科技</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>搞笑</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>生活</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>旅游</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>汽车</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>时尚</h3>
                        <h4></h4>
                    </li>
                    <li>
                        <h3>直播</h3>
                        <h4></h4>
                    </li>
                </ul>
                <div className="rigJ">
                    <img src="https://img.alicdn.com/tfs/TB18vFaXGmWBuNjy1XaXXXCbXXa-44-44.png" alt=""/>
                </div>  
            </nav>
            <div className="rigJC">
                <ul className="clearFolat">
                    <li>首页</li>
                    <li>剧集</li>
                    <li>电影</li>
                    <li>会员</li>
                    <li>综艺</li>
                    <li><img src="https://img.alicdn.com/tfs/TB1qJ0cXKuSBuNjy1XcXXcYjFXa-44-44.png" alt=""/></li>
                    <li>音乐</li>
                    <li>动漫</li>
                    <li>少儿</li>
                    <li>资讯</li>
                    <li>纪实</li>
                    <li>财经</li>
                    <li>体育</li>
                    <li>教育</li>
                    <li>娱乐</li>
                    <li>游戏</li>
                    <li>科技</li>
                    <li>搞笑</li>
                    <li>生活</li>
                    <li>旅游</li>
                    <li>汽车</li>
                    <li>时尚</li>
                    <li>直播</li>
                </ul>
            </div>


                <Route path="/" component={HomePage} exact ></Route>
                {/* /后不写内容 并加入 exact 属性  默认显示 */}
                    


                <Route path="/homePage" component={HomePage}></Route>
                <Route path="/juJi" component={JuJi}></Route>
                <Route path="/dianYing" component={DianY}></Route>
                <Route path="/huiY" component={HuiY}></Route>


 
            
        </header>
            <Route path="/child" component={Child}></Route>
        </HashRouter>
        </div>
    }

    clicked = ()=>{
        this.refs.searchC.style.display = "block"
    }
    clickedTo = ()=>{
        let arr2 = ["1","2","3","4","5"]
        for(let a=0; a< $(".searClickBox ul li p").length; a++){
            $(".searClickBox ul li p").eq(a).text(arr2[a])
        }
        this.refs.searchC.style.display = "none"
        $(".search form input").val("")
        $(".searClickBox ul li i").show()
    }
    change = ()=>{
        let arr2 = ["1","2","3","4","5"]
        if($(".search form input").val()){
            var scr=document.createElement("script")
            $(scr).attr("src","http://suggestion.baidu.com/su?wd="+ $(".search form input").val() +"&cb=fn")
            //通过创建的script的src获取数据，并传入对应的参数和函数名
            $("body").append($(scr))
            $(".searClickBox ul li i").hide()
        }else{
            $(".searClickBox ul li i").show()
            for(let a=0; a< $(".searClickBox ul li p").length; a++){
                $(".searClickBox ul li p").eq(a).text(arr2[a])
            }
        }
    }


    handleTouchStart = (e) => {
        this.startX = e.touches[0].clientX;
        window.ml = $("nav ul").offset().left
    }
    handleTouchMove = (e) => {
        this.endX = e.touches[0].clientX;
        
        if(this.startX - this.endX < 0){
            let cz = Math.abs(this.startX - this.endX)
            $("nav ul").css({
                left:ml+cz+"px"
            })
        }else{
            let cz = -(this.startX - this.endX)
            $("nav ul").css({
                left:ml+cz+"px"
            })
        }
        if($("nav ul").css("left").replace(/[px]/gi,"") >= 0 ){
            $("nav ul").css({left:"0px"})
        }
        if($("nav ul").css("left").replace(/[px]/gi,"") <= -1020 ){
            $("nav ul").css({left:"-1020px"})
        }
      
    }
    handleTouchEnd = (e) => {
      
    }


    componentDidMount(){
        for (let a=0; a<$("nav ul li").length; a++){

            

            $("nav ul li").eq(a).click(function(){
                TStab()
                $("nav ul li").eq(a).find("h3").css({
                    color:"#0baefa"
                })
                $("nav ul li").eq(a).find("h4").css({
                    background:"#0baefa"
                })
            })
        }
        function TStab(){
            for (var b=0; b<$("nav ul li").length; b++){
                $("nav ul li").eq(b).find("h3").css({
                    color:"#666"
                })
                $("nav ul li").eq(b).find("h4").css({
                background:"transparent"
                })
            }
        }
    
        $(".rigJ").click(function(){
            $(".rigJC").show()
        })
        $(".rigJC ul li:nth-child(6)").click(function(){
            $(".rigJC").hide()
        })


        
        $(".childs").click(function(){
            $("header").css({
                display:"none"
            })
            $(window).scrollTop("0px")
        })

    }

}
