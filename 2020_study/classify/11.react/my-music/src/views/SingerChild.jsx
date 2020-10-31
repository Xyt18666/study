import React from 'react'

export default class Ly extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        console.log(this.props.location.state.id)
    }
    render(){
        return(
            <section style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background:"rgba(255,255,255,1)"
            }}>
            <div>singerchild</div>
            <div>{this.props.location.state.id}</div>
            <div onClick={()=>this.back()}>back</div>
            </section>
        )
    }
    back = ()=>{
        window.history.back()
    }
}
