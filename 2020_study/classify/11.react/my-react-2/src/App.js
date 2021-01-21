import React from "react";
import { connect } from "react-redux";
// 引入connect连接器

import { add, setVal, getData } from "./store/actions";

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
            <div className="App">
                <h1> 测试 redux </h1>
                <p>{value}</p>
                <p onClick={onadd}>数字+++</p>
                <input onChange={e => onsetVal(e.target.value)} />
            </div>
        );
    }
}

const NewApp = connect(mapStateToProps, mapDispathToProps)(App);
// 连接 组件 属性 方法

export default NewApp;
