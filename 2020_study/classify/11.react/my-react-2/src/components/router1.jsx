
import React from "react";

// import {Redirect} from 'react-router-dom'


class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        console.log('路由跳转前的拦截', this.props)
        let { history: { replace }, location } = this.props
        if(location != "/123"){
            replace("/tow")
        }
    }


    componentDidMount() {
       
    }
    render() {
      

          return (
        <h1>router1

            {/* <Redirect to="/tow"></Redirect> */}
        </h1>
    )
    }
    
}

export default One;