import React from 'react'
import $ from "jQuery"
import IMNavCss from "../css/i_m_nav.less" // 引入模块化css
import {HashRouter,Route,Link} from 'react-router-dom'//路由

import HomePage from './HomePage.jsx' //引入所需组件
import USA from './USA.jsx'
import Canada from './Canada.jsx'
import Europe from './Europe.jsx'
import SouthAmerica from './SouthAmerica.jsx'
import CharteredCar from './CharteredCar.jsx'
import SmallRegiment from './SmallRegiment.jsx'
import TouringCar from './TouringCar.jsx'


// 导航模块
export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return <div>
            <HashRouter>
                <ul className={IMNavCss.navList}>
                    <li><Link to="/homePage">首页</Link></li>
                    <li>
                        <Link to="/USA">美国</Link> 
                        <span>热销</span>
                    </li>
                    <li><Link to="/Canada">加拿大</Link></li>
                    <li><Link to="/Europe">欧洲</Link></li>
                    <li><Link to="/SouthAmerica">南美洲</Link></li>
                    <li><Link to="/CharteredCar">定制包车</Link></li>
                    <li><Link to="/SmallRegiment">舒适小团</Link></li>
                    <li><Link to="/TouringCar">房车</Link></li>
                </ul>

                <Route path="/" component={HomePage} exact ></Route>
                {/* /后不写内容 并加入 exact 属性  默认显示 */}
                    


                <Route path="/homePage" component={HomePage}></Route>
                <Route path="/USA" component={USA}></Route>
                <Route path="/Canada" component={Canada}></Route>
                <Route path="/Europe" component={Europe}></Route>
                <Route path="/SouthAmerica" component={SouthAmerica}></Route>
                <Route path="/CharteredCar" component={CharteredCar}></Route>
                <Route path="/SmallRegiment" component={SmallRegiment}></Route>
                <Route path="/TouringCar" component={TouringCar}></Route>

            </HashRouter>
        </div>
    }

    componentDidMount(){
      
    }
}


