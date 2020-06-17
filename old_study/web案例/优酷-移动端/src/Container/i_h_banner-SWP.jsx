import React from 'react'
import "../css/i_h_banner.css" // 引入css
import $ from "jQuery"


import Swiper from '../../node_modules/swiper/js/swiper.js'
import '../../node_modules/swiper/css/swiper.min.css'


// banner模块
export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return  <div className="swiper-container" id="swiper_container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><a href="#">    
                            <img src="https://liangcang-material.alicdn.com/prod/upload/a9bfc673aacf442a8ccf77ed05ed36e5.jpg?x-oss-process=image/resize,w_640/format,webp/interlace,1" alt=""/>
                            <h2>&lt; 干将莫邪 &gt; 燃情少年爆怒斩</h2>
                            <span>全网首播</span>
                        </a></div>
                        <div className="swiper-slide"><a href="#">    
                            <img src="https://liangcang-material.alicdn.com/prod/upload/fd9ba4a711d641a1a09ca06f8677662d.jpg?x-oss-process=image/resize,w_640/format,webp/interlace,1" alt=""/>
                            <h2>&lt; 河西走廊 &gt; 蒙古大军横扫欧洲</h2>
                            <span>全网首播</span>
                        </a></div>
                        <div className="swiper-slide"><a href="#">    
                            <img src="https://liangcang-material.alicdn.com/prod/upload/c6f692d0e94b4e24aa6fd1215abbaac8.jpg?x-oss-process=image/resize,w_640/format,webp/interlace,1" alt=""/>
                            <h2>&lt; 法证4 &gt; 废屋藏尸留下证据</h2>
                            <span>全网独播</span>
                        </a></div>
                        <div className="swiper-slide"><a href="#">    
                            <img src="https://liangcang-material.alicdn.com/prod/upload/f99e3ba6d3744665a34f4941b67d8849.png?x-oss-process=image/resize,w_640/format,webp/interlace,1" alt=""/>
                            <h2>&lt; 无心法师3 &gt; 无心岳绮罗续前缘</h2>
                            <span>全网首播</span>
                        </a></div>
                        <div className="swiper-slide"><a href="#">    
                            <img src="https://liangcang-material.alicdn.com/prod/upload/0ab2e19308bb4811a70190b2f37430ec.jpg?x-oss-process=image/resize,w_640/format,webp/interlace,1" alt=""/>
                            <h2>&lt; 王牌 &gt; 沈腾演“书恒”渣男名句</h2>
                            <span>全网独播</span>
                        </a></div>
                        <div className="swiper-slide"><a href="#">    
                            <img src="https://liangcang-material.alicdn.com/prod/upload/572176ea0ed74ffb934a1aa61937103e.jpg?x-oss-process=image/resize,w_640/format,webp/interlace,1" alt=""/>
                            <h2>&lt; 新相亲 &gt; 本季超甜牵手合集</h2>
                            <span>全网独播</span>
                        </a></div>
                        <div className="swiper-slide"><a href="#">    
                            <img src="https://liangcang-material.alicdn.com/prod/upload/f80524badf244f98ab53d0bf97b2ba95.jpg?x-oss-process=image/resize,w_640/format,webp/interlace,1" alt=""/>
                            <h2>&lt; 长城 &gt; 长城在，故乡就在</h2>
                            <span>全网首播</span>
                        </a></div>
                    </div>
                    <div className="swiper-pagination" id="swiperD"></div>
                </div>
           
    }

  

    componentDidMount(){
        //可以加上你需要的条件等，然后生成Swiper对象，
        //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
        let swiper = new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
        
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                delay: 2500,
                disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,    // 允许点击跳转
            },
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });

        //鼠标移入

        $('.swiper-slide').mouseenter(function () {
            swiper.autoplay.stop();
        })
        $('.swiper-slide').mouseleave(function () {
            swiper.autoplay.start();
        })
 

    }

}
