//class component
import React , {Component} from 'react'
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import User from './components/User';
import Clock from './components/Clock';
import Form from './components/Form';

class App extends Component {

  constructor(){ //initialize something before page loads
    super();

    this.state = {count : 0}
  }

  componentDidMount() //Task 5: Life cycle method
  {
    console.log("when component first render")
  }

  //Task 5: setState()
  increment(){
    this.setState({count : this.state.count + 1})
  }

  componentWillUnmount() //when i will remove count component it will be displayed
  {
    console.log("when component removed")
  }
  //Task 4 : rendering a component : <Counter></Counter> 
  //Task 4 : composing components like <User> and passing different name
  //Task 6 : onClick to trigger an event + passing arguments
  render() {
    return(
      <div>
        <p>Hey</p>
        <User name = 'Sara'></User>
        <User name = 'Zain'></User>
        <User name = 'Hania'></User>
        <button onClick = {()=>{this.increment()}}>Click me</button>
        <Counter number = {this.state.count}></Counter>
        <Counter1 number = {this.state.count}></Counter1>
        <Clock/> 
        <Form/>
      </div>
    )
    //Task 5: Implement <Clock/> 
  }
}

//functional component
/*function App() {
  return (
    <div className="App">
     <p>Hello</p>
    </div>
  );
}*/

export default App;

