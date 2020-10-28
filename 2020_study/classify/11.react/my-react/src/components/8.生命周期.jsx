import React from 'react';


/*

生命周期： 就是 组件 从实例化 => 渲染 => 到最终页面 => 销毁 整个过程就是生命周期
在这个生命周期中 有很多 可以调用的 事件 ，也俗称钩子函数



生命周期的三个状态：
    挂载： 
    更新：
    销毁：


*/





class Smzq extends React.Component{
    constructor(props){  
        super(props)//调用继承的 Component 的类 
        this.state = {
            msg:"这是数据"
        }
    }

    componentWillMount(){
        // 组件将要渲染，但是此时为创建虚拟dom,也不能获取元素，但是可以获取属性、状态、函数
        
        //大部分用来做ajax，动画前的类

        console.log("组件将要渲染")
    }

    render(){
        // 生成虚拟dom

        console.log("生成虚拟dom")
        return(
            <section>
                <h1>{this.state.msg}</h1>
                <div onClick={this.djFn}>点击切换</div>
            </section>
        )
    }
    djFn=()=>{
        this.setState({
            msg:"新的数据",
        })
    }

    componentDidMount(){
        // 组件渲染完成，此时页面有可见dom

        //添加动画

        console.log("组件渲染完成")
    }

    // 挂载阶段结束  end

   


    // componentWillReceiveProps(){
    //     // 组件将要接收 props 传递的新值时触发， 当子组件第一次被渲染时不会触发
        
    //     //查看接收props的数据是什么

    //     console.log("组件将要接收 props")
    // }
    // static getDerivedStateFromProps(nextProps, prevState){
    //    console.log(nextProps, prevState,"new 新 getDerivedStateFromProps")
    // }

    shouldComponentUpdate(){
        // 在组件接收到 新的 状态或者props 后，是否需要更新，返回布尔值
        console.log("组件是否更新")
        return true
        // 希望更新 return true  反之 false
        
    }

    // componentWillUpdate(){
    //     // 组件将要更新，但是其未更新
    //     console.log("组件将要更新")
        
    // }
    // static getSnapshotBeforeUpdate(nextProps, prevState){
    // console.log(nextProps, prevState,"new 新 getSnapshotBeforeUpdate")
    // }

    componentDidUpdate(){
        //组件更新完成，此时页面的内容都是新的
        console.log("组件更新完成")
    }

    // 更新阶段结束  end


    componentWillUnmount(){
        // 组件将要被销毁，此时组件还可用

        // 保留状态，提交后台

        console.log("组件将要被销毁")
    }

    // 销毁阶段结束  end
}







export default class SmzqF extends React.Component{
    constructor(props){  
        super(props) 
        this.state = {
            isShow:true  //增加状态，用于判断是否移除
        }
    }
    render(){   
        if(this.state.isShow){
            // 为true则 成长某组件
            return (
                <div>
                    <h3 onClick={this.remove}>移出</h3>{/* 增加事件，改变状态，移除该元素 */}
                    <Smzq></Smzq>
                </div>
                 )
        }else{
            return <h1>没有 没有</h1>
            // 反正生成另一个
        }
    }
    remove=()=>{
        this.setState({
            isShow:false
        })
    }
}