import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router/index";

import { Provider } from "react-redux";
import Store from "./store/index";
// import { connect } from "react-redux";
import "./App.css";

// function mapStateToProps(state) {
//     return {
//         songList: state.songList,
//         copySongList: state.copySongList,
//         mucisActive: state.mucisActive,
//     };
// }
// 把 store属性 映射 到 props

// function mapDispathToProps(dispatch) {
//     return {
//         setSongList: datas => {
//             dispatch({ type: "setSongList", data: datas });
//         },
//         setCopySongList: datas => {
//             dispatch({ type: "setCopySongList", data: datas });
//         },
//         setMucisActive: datas => {
//             dispatch({
//                 type: "setMucisActive",
//                 data: datas,
//             });
//         },
//     };
// }
// 把 store方法 映射 到 props
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: Store.getState(),
        };
    }
    componentDidMount() {}
    render() {
        // let {
        //     songList,
        //     copySongList,
        //     mucisActive,
        //     setSongList,
        //     setCopySongList,
        //     setMucisActive,
        // } = this.props;

        setInterval(() => {
            this.setState({
                store: Store.getState(),
            });
        }, 1000);

        return (
            <Provider store={Store}>
                <section className="App">
                    <div className="header">header</div>
                    <Router>
                        <nav>
                            <Link to="/">首页</Link>
                            <Link to="/singer">歌手</Link>
                            <Link to="/serach">搜索</Link>
                            <Link to="/user">我的</Link>
                        </nav>
                        {renderRoutes(routes)}
                    </Router>

                    <div className="musicContent">
                        <div className="miniMusic">miniMusic</div>
                        <div className="musicList">musicsList</div>
                        <div className="musicBox">musicsList</div>

                        <audio src={this.state.store.mucisActive.url}></audio>
                        {/* <p>data{this.state.store.mucisActive}</p> */}
                    </div>
                </section>
            </Provider>
        );
    }
}

// const NewApp = connect(mapStateToProps, mapDispathToProps)(App);
// export default NewApp;
