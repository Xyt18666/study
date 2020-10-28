import React from 'react';


function Use(props){//登陆成功的组件
    return (
        <h3>欢迎登陆</h3>
    )
}
function NotUse(props){//未登陆的组件
    return (
        <h3>请先登陆</h3>
    )
}



export default class Tj extends React.Component{
    constructor(props){  
        super(props)
       
        this.state = {//条件
           isUse:true,
           qwe:"null",
           arr2:[1,2,3,4,5,645,65],
            arr:[
                {
                    name:"小黑",
                    size:18
                },
                {
                    name:"小柒",
                    size:18
                },
                {
                    name:"小久",
                    size:18
                }
            ],
        }

    }
 

    render(){
        if(1==="1"){//第二种
          var qwe = <Use/>   // eslint-disable-line no-unused-vars
          console.log(1)
        }else{
          var qwe = <NotUse/>  // eslint-disable-line no-unused-vars
          // 报错原因：  定义了变量了，也使用了这个变量了，但是eslint还是提示定义了但没有使用过的错误。
          console.log(2)
          
        }

        // -----------------------------------
           //    第一种
        let listArr = [];
        for(let a=0; a<this.state.arr2.length; a++){
            listArr.push(<li key={a}>{this.state.arr2[a]}</li>)
        }
        console.log(listArr)
        //    第一种 end

        // 第二种
        let listArr2 = this.state.arr.map((item,index)=>{   
                return <li key={index}>{item.name} <span>age</span> {item.size}</li>
                // 必须以加 key 值
            })
        //    第二种 end
        

        return(
            <section>
                <div>
                    {this.state.isUse===true?<Use/>:<NotUse/>}
                    {/* 判断需要用 ===   严格模式 */}

                  
            

                </div>
                <div>{qwe}</div>{/* 第二种 */}
                {/* ---------------------------------------- */}
                {listArr} {/* 第一种方式 */}

                {listArr2} {/* 第二种方式 */}
                {this.state.arr.map((item,index)=>{   {/*  第二种  改进版*/}
                    return <NChildLi {...item} index={index} key={index}></NChildLi>
                    // 不使用组件，也可以，直接把 输出的拿过来，事件直接写到该组件下
                })}
              

            </section>
        )
    }


}

class NChildLi extends React.Component{
// 有事件，动态，用 类组件

    constructor(props){  
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
    }
    render(){
        return (
            <li onClick={(e)=>{this.oClick(this.props.index,e)}}>{this.props.name} <span>age</span> {this.props.size}</li>
            )
    }

    oClick=(index,e)=>{
        console.log(index,"输出信息",e)
    }

}

// -----------------------------





