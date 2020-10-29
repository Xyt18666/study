import React from 'react';

import {connect} from "react-redux"


// const addAction = {
//     type: "add",
// };
// const decAction = {
//     type: "dec",
// };

function mapStateToProps(state){
    return{
        value:state.num
    }
}


function mapDispathToProps(dispatch){
    return{
        ondec:()=>{dispatch({type:"dec"})},
        onadd:()=>{dispatch({type:"add"})},


    }
}

class GetRedux extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
      
    }
    render(){
        let {value,onadd,ondec} = this.props
        //等同于 vuex  mupMutation
        // const value= this.props.value
        // // 通过 store 传给 props

        // const onadd = this.props.onadd
        // // 将修改数据的 事件传递给 props     
        // const ondec = this.props.ondec


        return(
            
                <section>
                    <h2 >size：{value}</h2>
                    <h1 onClick={onadd}>++</h1>
                    <h1 onClick={ondec}>--</h1>
                </section>

       
        )
    }
 
}
const NewRedux = connect(mapStateToProps,mapDispathToProps)(GetRedux)





export default NewRedux