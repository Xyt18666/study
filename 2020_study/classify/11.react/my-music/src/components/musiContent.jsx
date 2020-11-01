import React from "react";
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
class musicContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dqsc: 0,
            zsc: 0,
            bl: 0,
            borWidth: 0,
            butLett: 0,
        };
    }
    componentDidMount() {
        let audio = this.props.audios.current;
        audio.oncanplay = () => {
            console.log(audio.duration)
            this.props.mucisActive.zsc = audio.duration;
            this.props.mucisActive.dqsc = audio.currentTime;
            this.props.setMucisActive(this.props.mucisActive);

            this.setState({
                dqsc: this.props.mucisActive.dqsc,
                zsc: this.props.mucisActive.zsc,
            });
            this.setState({
                bl: this.state.dqsc / this.state.zsc,
            });
            this.setState({
                borWidth: this.state.bl * 100 + "%",
                butLett: this.state.bl * this.proCon.current.offsetWidth||0,
            });
            audio.play();
        };
        audio.ontimeupdate =() =>{
            this.props.mucisActive.zsc = audio.duration;
            this.props.mucisActive.dqsc = audio.currentTime;
            this.props.setMucisActive(this.props.mucisActive);

            this.setState({
                dqsc: this.props.mucisActive.dqsc,
                zsc: this.props.mucisActive.zsc,
            });
            this.setState({
                bl: this.state.dqsc / this.state.zsc,
            });
            this.setState({
                borWidth: this.state.bl * 100 + "%",
                butLett: this.state.bl * this.proCon.current.offsetWidth||0,
            });
        };
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

        this.proCon = React.createRef();
        this.proBor = React.createRef();

        return (
            <section
                style={{
                    width: "100vw",
                }}
            >
                <div>singConten</div>
                <p>{mucisActive.song}</p>
                <p>{mucisActive.singer}</p>
                <p onClick={this.toggleMusic}>开关</p>
                <p>
                    时间{this.getSML(this.state.dqsc)}----{this.getSML(this.props.mucisActive.zsc)}
                </p>
                <div
                    className="progress-bar-contenter"
                    ref={this.proCon}
                    style={{
                        width: "80vw",
                        height: "10px",
                        background: "#ccc",
                        position: "relative",
                        margin: "50px auto",
                    }}
                >
                    <div
                        className="progress-bar"
                        ref={this.proBor}
                        style={{
                            width: this.state.borWidth,
                            height: "10px",
                            background: "#0f0",
                        }}
                    ></div>
                    <div
                        className="progress-buto"
                        style={{
                            position: "absolute",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            background: "red",
                            top: "0",
                            left: this.state.butLett,
                            marginLeft: "-5px",
                            marginTop: "-5px",
                            touchAction: "none",
                        }}
                        onTouchStart={this.start}
                        onTouchMove={this.move}
                        onTouchEnd={this.end}
                    ></div>
                </div>
            </section>
        );
    }
    start = e => {
        let audio = this.props.audios.current;
        audio.pause();

    };
    move = e => {
        let bl =
            ((e.touches[0].clientX - this.proCon.current.offsetLeft) /
                this.proCon.current.offsetWidth) *
            100;
        bl = bl <= 0 ? 0 : bl >= 100 ? 100 : bl;
        this.setState({
            bl: bl / 100,
        });

        this.setState({
            borWidth: this.state.bl * 100 + "%",
            butLett: this.state.bl * this.proCon.current.offsetWidth,
        });
        this.setState({
            dqsc: this.state.bl * this.state.zsc,
        });
    };
    end = () => {
        let audio = this.props.audios.current;
        audio.currentTime = this.state.dqsc;
        audio.play();
    };
    toggleMusic = () => {
        this.props.mucisActive.playing = !this.props.mucisActive.playing;

        this.props.setMucisActive(this.props.mucisActive);
        let audio = this.props.audios.current;
        this.props.mucisActive.playing ? audio.play() : audio.pause();
    };
    getSML = data => {
        //时间转换 函数
        var s = Math.floor(data / 3600);
        var f = Math.floor((data % 3600) / 60);
        var m = Math.floor(data % 60);
        s = s < 10 ? "0" + s : s;
        f = f < 10 ? "0" + f : f;
        m = m < 10 ? "0" + m : m;
        return s + ":" + f + ":" + m;
    };
}

const NewmusicContent = connect(mapStateToProps, mapDispathToProps)(musicContent);
export default NewmusicContent;
