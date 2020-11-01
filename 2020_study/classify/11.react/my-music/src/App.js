import React from "react";
import "./App.css";
import { HashRouter as Router, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router/index";

import SingerList from "./components/singerList";
import MusiContent from "./components/musiContent";

// import { Provider } from "react-redux";
// import Store from "./store/index";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        songList: state.songList,
        copySongList: state.copySongList,
        mucisActive: state.mucisActive,
    };
}
// 把 store属性 映射 到 props

function mapDispathToProps(dispatch) {
    return {
        setSongList: datas => {
            dispatch({ type: "setSongList", data: datas });
        },
        setCopySongList: datas => {
            dispatch({ type: "setCopySongList", data: datas });
        },
        setMucisActive: datas => {
            dispatch({
                type: "setMucisActive",
                data: datas,
            });
        },
    };
}
// 把 store方法 映射 到 props
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toggleContent: false,
            // store: Store.getState(),
        };
    }
    componentDidMount() {
        // Store.subscribe(() => {
        //     //实现实时响应
        //     this.setState({ store: Store.getState() });
        // });
    }
    render() {
        let {
            // songList,
            // copySongList,
            mucisActive,
            // setSongList,
            // setCopySongList,
            // setMucisActive,
        } = this.props;
        this.myRef = React.createRef();
        return (
            // <Provider store={Store}>
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
                    <audio src={mucisActive.url} ref={this.myRef}></audio>
                    <div
                        className="miniMusic"
                        onClick={() => {
                            this.setState({
                                toggleContent: !this.state.toggleContent,
                            });
                        }}
                    >
                        {mucisActive.song}----{mucisActive.singer}
                    </div>
                    <p onClick={() => this.toggleList()}>列表</p>

                    <div className={`musicList ${this.state.toggle ? "active" : ""}`}>
                        {/* <SingerList setAudio={this.setAudio}></SingerList> */}
                        <SingerList></SingerList>
                    </div>
                    <div className={`musicBox ${this.state.toggleContent ? "active" : ""}`}>
                        <MusiContent audios={this.myRef}></MusiContent>
                    </div>
                </div>
            </section>
            // </Provider>
        );
    }
    toggleList = () => {
        this.setState({
            toggle: !this.state.toggle,
        });
        // console.log(this.state.toggle);
    };
    // setAudio = d => {
    //     // console.log(d);

    //     this.myRef.current.src = d;
    // };
}

const NewApp = connect(mapStateToProps, mapDispathToProps)(App);
export default NewApp;
