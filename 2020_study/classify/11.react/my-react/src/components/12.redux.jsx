import React from 'react';


import {createStore} from "redux"

const reducer=(state={num:0},action)=>{
  switch(action.type){
    case "add":
      state.num++
      break
    case "dec":
      state.num--
      break
    default:
        break
  }
  return {...state} 
}
const store = createStore(reducer);


// store.subscribe(()=>{
    // 调用 刷新数据
// })



export default class GetRedux extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
      
    }
    render(){
        let state = store.getState()
        return(
            
                <section>
                    <h2 >size：{state.num}</h2>
                    <h1 onClick={this.zz}>++</h1>
                    <h1 onClick={this.jj}>--</h1>

                </section>

          
            
        )
    }
    zz=()=>{
        store.dispatch({type:"add"})
        console.log(store.getState())
    }
    jj=()=>{
        store.dispatch({type:"dec"})
        console.log(store.getState())
    }
}
