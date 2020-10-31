import React from 'react';
import { connect } from "react-redux";
function mapStateToProps(state) {
    return {
        songList: state.songList,
        copySongList: state.copySongList,
        mucisActive: state.mucisActive,
    };
}


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

class Home extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
            dataAll:null,
          
        }
    }
    componentDidMount(){
 
        Promise.all([
            this.axios.get("/api/slider-list"),
            this.axios.get("/api/hit-single-list")
        ]).then(res=> {
            this.setState({dataAll:[res[0].data.data,res[1].data.data]})
            console.log(this.state)
        });
       
    }
    render(){
          let {
            songList,
            copySongList,
            mucisActive,
            setSongList,
            setCopySongList,
            setMucisActive,
        } = this.props;

        return !this.state.dataAll?"loading":(
            <section>
                 <div>
                        <p>banner</p>
                        { 
                            this.state.dataAll[0].map((item,index)=>{
                                return <p key={index}>{item.link}</p>
                            })
                        }
                </div>
                      <div>
                        <p>hitList</p>
                        { 
                            this.state.dataAll[1].map((item,index)=>{
                                return <p key={index} onClick={this.setMusicACtive} data-url={item.url}>{item.url}</p>
                            })
                        }
                        
                 
                </div>
          
            </section>
        )
    }
    
    
    setMusicACtive=(e)=>{
     
        this.props.setMucisActive({url:e.target.dataset.url})
        // console.log(this.props.mucisActive)

      
    }
}
const NewHome = connect(mapStateToProps, mapDispathToProps)(Home);



export default NewHome;
