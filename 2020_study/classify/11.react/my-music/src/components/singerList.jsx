import React from 'react'
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
class singerList extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
 
    }
    render(){
        return(
            <section>
            <div>singerlist</div>
            <ul>
                 { 
                this.props.songList.map((item,index)=>{
                    // return <li key={index} onClick={()=>this.setAu(item.url)}>{item.song}</li>
                    return <li key={index} onClick={()=>this.setAud(item)}>{item.song}</li>

                })
            }
            </ul>
      
            </section>
        )
    }
    // setAu=(d)=>{
    //     // console.log(this.props.setAudio)
    //     this.props.setAudio(d)
       
    // }
    setAud=(d)=>{
        this.props.setMucisActive(d)
    }
  
}

const NewSingerList = connect(mapStateToProps, mapDispathToProps)(singerList);
export default NewSingerList;
