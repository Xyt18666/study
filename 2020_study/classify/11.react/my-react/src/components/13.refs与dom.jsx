import React from 'react';



export default class Cdx extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
        }
        this.myRef = React.createRef();
    }
    componentDidMount(){
    }
    render(){
       
        return(
            <section>
                <div ref={this.myRef}>refs和dom</div>
                <div onClick={this.getRefs}>get</div>
                <input type="text" ref={(input)=>{console.log(this.textInput,input)}} />
                
            </section>
        )
    }
    getRefs=()=>{
        console.log(this.myRef.current)
    }
   
}


