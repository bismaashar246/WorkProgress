import React from "react";

const Counter2 = (props) => {

    return(
    <div>
    <h4>I am counter 2</h4>
    <button onClick={props.increment}>{props.count}</button>
    </div>
    )
}

export default Counter2