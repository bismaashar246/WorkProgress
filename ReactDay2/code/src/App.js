//class component
import React , {Component} from 'react'
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import User from './components/User';
import User2 from './components/User2';
import Clock from './components/Clock';
import Form from './components/Form';
import Player from './components/Player';
import List from './components/List';
import Temperature from './Temperature';
import ShowText from './components/ShowText';
import Animal from './components/Animal';

class App extends Component {

  constructor(){ //initialize something before page loads
    super();

    this.state = {count : 0}
  }

  componentDidMount() //Task 5: Life cycle method
  {
    console.log("when component first render")
  }

  //Task 5: setState() - class component
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

    const person = { //a prop object 
      name: 'Bisma',
      age: '21',
      gender: 'female'
    };

    return(
      <div>
        <p>Hey</p>
        <List/>
        <User name = 'Sara'/>
        <User name = 'Hania'></User>    
        <User2 name = 'Shanzay'></User2>
        <User2 person = {person}></User2>
        <button onClick = {()=>{this.increment()}}>Click me</button>
        <Counter number = {this.state.count}></Counter>
        <Counter1 number = {this.state.count}></Counter1>
        <Clock/> 
        <Form/>
        <Player/>
        <Temperature/>
        <ShowText><p>Hello I am composition Example</p></ShowText>
        <ShowText><div><h3>Composition</h3><h3>Example 2</h3></div><p>Hello I am composition Example</p></ShowText>
        
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

