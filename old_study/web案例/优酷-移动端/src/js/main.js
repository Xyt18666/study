import React from 'react'  //引入react
import ReactDOM from 'react-dom'  //引入虚拟dom
import "../css/remove.less"     // 全局引入 html 自适应 font-size
import IHTopFence from '../Container/i_h_topFence.jsx' //引入顶部通栏
import $ from "jQuery"

if(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
// 判断是否是什么设备

    console.log("移动端")
    ReactDOM.render(<section>
        <IHTopFence></IHTopFence>
        
    </section>,document.getElementById('content'))

}else{
    console.log("PC端")
    ReactDOM.render(<section>
        <div>PC端</div>
    </section>,document.getElementById('content'))
}





$(".childs").click(function(){
    $("header").css({
        display:"none"
    })
    $(window).scrollTop("0px")
})

$("b:contains(独播)").css({
    background:"#fc4273"
})
$("b:contains(vip)").css({
    background:"#ebba73"
})




