import "./App.css";
import Jsx from "./components/2.jsx基础.jsx";
import ZuJian from "./components/4.组件.jsx";
import FuToZi from "./components/5.父向子传值.jsx";
import XuanRan from "./components/6.条件渲染、列表渲染.jsx";
import ShengMingZhouQi from "./components/8.生命周期.jsx";
import ChaCao from "./components/9.插槽.jsx";
// import LuYou from "./components/10.路由.jsx";
import NewLuYou from "./components/10.嵌套路由.jsx";

// import ChongDingXiangAndSwitch from "./components/11.重定向和switch.jsx";
import Redux from "./components/12.redux.jsx";
import ReactRedux from "./components/12.react-redux.jsx";

import REFS from "./components/13.refs与dom.jsx";

function App() {
    return (
        <div className="App">
            <Jsx></Jsx>
            <ZuJian
                water="下雨"
                datas={{
                    name: "names",
                    age: 18,
                }}
            ></ZuJian>
            <FuToZi></FuToZi>
            <XuanRan></XuanRan>
            <ShengMingZhouQi></ShengMingZhouQi>
            <ChaCao>
                <div>我是插槽内容</div>
            </ChaCao>
            {/* <LuYou></LuYou> */}
            <NewLuYou></NewLuYou>
            {/* <ChongDingXiangAndSwitch></ChongDingXiangAndSwitch> */}
            <REFS></REFS>
            <Redux></Redux>
            <ReactRedux></ReactRedux>
        </div>
    );
}

export default App;
