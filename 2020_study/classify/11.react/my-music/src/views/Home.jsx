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
        //   let {
            // songList,
            // copySongList,
            // mucisActive,
            // setSongList,
            // setCopySongList,
            // setMucisActive,
        // } = this.props;

        return !this.state.dataAll?(<p>loading</p>):(
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
                                return <p key={index} onClick={()=>this.setMusicACtive(item)} >{item.url}</p>
                            })
                        }
                        
                 
                </div>
          
            </section>
        )
    }
    
    
    setMusicACtive=(e)=>{
        // console.log(e)
        this.props.setMucisActive(e)

        this.props.songList.push(e)
        this.props.copySongList.push(e)

        this.props.setSongList([...new Set( this.props.songList)])
        this.props.setCopySongList([...new Set( this.props.copySongList)])
        // console.log(e.target.dataset.url)
        // console.log(this.props.CopySongList)

      
    }
}
const NewHome = connect(mapStateToProps, mapDispathToProps)(Home);



export default NewHome;
