//class component
import React , {Component} from 'react'

class Counter extends Component {

  componentDidUpdate(prevprops , prevState)
  {
    if(prevprops.number !== this.props.number){
        console.log("component updated")
    }
  }
//task 4
  render() {
    return(
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}

export default Counter;

