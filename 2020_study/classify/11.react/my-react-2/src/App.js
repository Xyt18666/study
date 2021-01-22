import React from "react";
import { connect } from "react-redux";
// 引入connect连接器

import { add, setVal, getData } from "./store/actions";
// 引入action

import TestSlot from "./components/testSlot";
// 引入插槽

import Hooks from "./components/hooks";

import { HashRouter as Router, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
//  router工具,用于嵌套路由
import routes from "./router/index";
// 引入 router

function mapStateToProps(state) {
    // 映射属性
    return {
        value: state.num,
    };
}

function mapDispathToProps(dispatch) {
    // 映射方法

    return {
        onadd: () => {
            dispatch(add());
        },
        onsetVal: val => {
            dispatch(setVal(val));
        },
        onGetData: () => {
            // 使用中间键的函数
            dispatch(getData());
        },
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.onGetData();
        // 执行映射方法
    }
    render() {
        let { value, onadd, onsetVal } = this.props;

        return (
            <Router>
                <div className="App">
                    <h1> 测试 redux </h1>
                    <p>{value}</p>
                    <p onClick={onadd}>数字+++</p>
                    <input onChange={e => onsetVal(e.target.value)} />
                    <TestSlot>
                        {{
                            def: (
                                <>
                                    <h1>组件复合</h1>
                                    <p>复合组件给与你足够的敏捷去定义自定义组件的外观和行为</p>
                                </>
                            ),
                            footer: <button onClick={() => alert(" react真好")}>确定</button>,
                        }}
                    </TestSlot>
                    <Hooks></Hooks>
                    <Link to="/"> to 1</Link>
                    <Link to="/tow"> to 2</Link>
                    {renderRoutes(routes)}
                    {/* 使用工具 直接承载 路由 ，就像 vue的 router-view */}
                </div>
            </Router>
        );
    }
}

const NewApp = connect(mapStateToProps, mapDispathToProps)(App);
// 连接 组件 属性 方法

export default NewApp;
