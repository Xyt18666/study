import React from "react";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="App">
                <h1> 测试 插槽 </h1>
               {
                    this.props.children.def
               }
               {
                   this.props.children.footer
               }
            </div>
        );
    }
}

export default Test;