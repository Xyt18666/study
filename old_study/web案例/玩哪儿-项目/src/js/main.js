import React from 'react'  //引入react
import ReactDOM from 'react-dom'  //引入虚拟dom
import "reset-css"     // cnpm i reset-css   全局引入重置样式
import "../css/currency.css"     // 全局引入通用样式



import IHTopFence from '../Container/i_h_topFence.jsx' //引入顶部通栏
import IHSearch from '../Container/i_h_search.jsx'  //引入搜索栏
import IMNav from '../Container/i_m_nav.jsx'  //引入搜索栏
import IFooter from '../Container/i_footer.jsx'  //引入尾部
import IAside from '../Container/i_aside.jsx'  //引入侧边绝对定位



ReactDOM.render(<section>
   <header>
        <section className="topFence">
            {/* 顶部通栏 */}
            <IHTopFence></IHTopFence>
        </section>
        <section className="search">
        <IHSearch></IHSearch>
        </section>
    </header>
    <main>
        <nav>
            <IMNav></IMNav>
        </nav>
        {/* <section className="bannerAndSideNav">
            <section className="banner">轮播图</section>	
            <section className="sideNav">侧导航</section>			
        </section>
        <section className="bAS_button">
            轮播图下面的模块
        </section>
        <section className="floor">
            <section className="specialWeek">
                本周特卖
            </section>
            <section className="sellWell">
                爆款热销
            </section>
            <section className="placeMust">
                必玩景点
            </section>
            <section className="comfortGroup">
                舒适小团
            </section>
            <section className="localAmusement">
                当地游乐
            </section>
            <section className="article">
                文章列表
            </section>
        </section> */}
    </main>
    <footer>
       <IFooter></IFooter>
    </footer>
    <aside>
       <IAside></IAside>
    </aside>

</section>,document.getElementById('content'))



