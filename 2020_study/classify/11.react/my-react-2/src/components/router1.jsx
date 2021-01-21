
import React from "react";

import {Redirect} from 'react-router-dom'


class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
       
    }
    render() {
      

          return (
        <h1>router1

            <Redirect to="/tow"></Redirect>
        </h1>
    )
    }
    
}

export default One;