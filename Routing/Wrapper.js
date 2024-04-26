import React from "react";

class Wrapper extends React.Component{

    state = {count : 0};

    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    render(){
        return(
            <div>
              {this.props.render(this.state.count , this.increment)}
            </div>
        )
    }
}

export default Wrapper