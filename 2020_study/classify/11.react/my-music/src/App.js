import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router/index";
import { connect } from "react-redux";
import "./App.css";

function mapStateToProps(state) {
    return {
        value: state.num,
    };
}
// 把 store属性 映射 到 props

function mapDispathToProps(dispatch) {
    return {
        // ondec: () => {
        //     dispatch({ type: "dec" });
        // },
        // onadd: () => {
        //     dispatch({ type: "add" });
        // },
    };
}
// 把 store方法 映射 到 props

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}
    render() {
        let { value } = this.props;
        return (
            <section className="App">
                <div>header</div>
                <Router>
                    <nav>
                        <Link to="/">首页</Link>
                        <Link to="/singer">歌手</Link>
                        <Link to="/serach">搜索</Link>
                        <Link to="/user">我的</Link>
                    </nav>
                    {renderRoutes(routes)}
                </Router>

                <div>{value}</div>
            </section>
        );
    }
}
const NewApp = connect(mapStateToProps, mapDispathToProps)(App);
export default NewApp;
