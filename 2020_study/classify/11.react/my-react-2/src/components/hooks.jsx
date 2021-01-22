/*
// 未使用 hook ，使用hook的在下面

import React, { Component } from 'react'

class test extends Component{
    constructor(props){
        super();
        this.state = {
            num :0
        }
    }
    render(){

        return(
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.addNum}>未使用hook的写法++</button>
                <button onClick={()=>{this.setState({num:this.state.num+1})}}>未使用hook的写法++</button>
                
            
            </div>
        )
    }
    addNum = ()=>{
        this.setState({num:this.state.num+1})
    }
}


export default test
*/

import React, { useState,useEffect ,createContext,useContext ,useReducer, useMemo,useRef} from 'react'

import CheckColor from "./replaceRedux/CheckColor"

const CreateContext = createContext()



function Example (){
    const [num ,setNum] = useState(0);
    const [names,setName] = useState("阿离(不知火)");

    const [count,dispatch] = useReducer((state,action)=>{
        switch(action){
            case "add":
                return state+1 
            case "sub":
                return state-1 
            default:
                return state

        }
    },0)

    const inputEl = useRef(null)

    const textRef = useRef()

    function changeNames(){
        console.log(names)
    }
    const checkInput = ()=>{
        inputEl.current.value = "改值"
        console.log(inputEl)
    }
  
    useEffect(()=>{
        console.log("num的值是",{num})

        textRef.current = num
        console.log(textRef)
        return ()=>{
            console.log("解绑函数")
        }
    },[num])

    useMemo(()=>{
        // 当names发生改变时执行
        changeNames()
    },[names])



     return(
            <div>
                <p>使用hook{num}</p>
                <button onClick={()=>{setNum(num+1)}}>使用hook的写法++</button>
                <p onClick={()=>{setName("小缘")}}>{names}</p>
                <CreateContext.Provider value={num}>
                    <Child></Child>
               
                </CreateContext.Provider>

                <h2>使用useReducer {count}</h2>
                <p onClick={()=>{dispatch("add")}}>使用useReducer +++</p>
                <p onClick={()=>{dispatch("sub")}}>使用useReducer --</p>

                <CheckColor></CheckColor>
                <input type="text" ref={inputEl}/>
                <button onClick={checkInput}>在input展示文字</button>
            </div>
        )


}



function Child(){
    let num = useContext(CreateContext)
     return(
            <div>
              <p>接收参数{num}</p>
            </div>
        )
}

export default Example
