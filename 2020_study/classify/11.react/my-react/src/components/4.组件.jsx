import React from 'react';



function HanShuZuJian(props) {
    let title = <h2>函数组件</h2>
    return (
      <div>
         函数式组件:
         {title}
         {props.water === "下雨"?"不出门":"出门"}
      </div>
    );
}
  
export default class LeiZuJian extends React.Component{
    constructor(props){  //构造器
        super(props)//把数据传递给 class 从而 能够使用 this.props
        // 状态(数据)
        this.state = {
            time: new Date().toLocaleTimeString(),
            c1:"cont active",
            c2:"cont"
        }
        // this.clickEvent = this.clickEvent.bind(this) //改变this的指向
    }
 
    render(props){
        console.log(this.props.water)
        // 通过 this.pprops 获取参数

        return (
            <div className="bxo">
                类组的 hello
                <h2>{this.props.datas.age}</h2> 
            
                <h2>{this.props.water}</h2>

                <HanShuZuJian water={this.props.water}/>
                {/* 组件嵌套、参数传递 */}

                    <div className="box2">
                    <h5>实例：点击切换</h5>

                    {/*  通过 onClick = { this.xxx }       绑定事件 */}
                    <button onClick={this.clickEvent} data-index="1">1</button>

                    {/* 通过 data-index=""                 绑定下标             通过 事件对象 e.target.dataset.index  提取 */}
                    <button onClick={this.clickEvent} data-index="2">2</button>
                    <ul className="list">
                        <li className={this.state.c1}>li1</li>
                        <li className={this.state.c2}>li2</li>
                    </ul>
                </div>
            </div>
            
        )
    }
    clickEvent=(e)=>{ //被绑定的 点击事件

        console.log(e.target.dataset.index)//获取下标

        if(e.target.dataset.index === 1){// 根据下标 改变 state的状态，改变 class名 从而改变样式
            this.setState({//设置数据的方法   setState()
                c1:"cont active",
                c2:"cont"
            })
        }else{
            this.setState({//设置数据的方法   setState()
                c1:"cont",
                c2:"cont active"
            })
        }

        // 除了改变class名以外，还有很多方法可以使用
    }
}

