import React from 'react';


export default class Fu extends React.Component{
    constructor(props){  
        super(props)
       
        this.state = {
            isShow:"true",
        }

    }
    componentDidMount(){
    }
    render(){
        return(
            <section>
              <h2>父block</h2>
              <Zi is={this.state.isShow}

              getSon={this.getSon}
               />
            </section>
            
        )
    }
    getSon= (d)=>{
        console.log(d)
    }
}


class Zi extends React.Component{
    constructor(props){  
        super(props)
       
        this.state = {
            son:"子属性"
        }

    }
    componentDidMount(){
    }
    render(){

        return(
            <section>
               <h3>
                <p> {this.props.is}</p> 
                子block</h3>
                <h2 onClick={()=>{this.props.getSon("直接调用props的函数")}} >子向父</h2>
            </section>
            
        )
    }
}
