import React , {useState , useEffect} from "react";

//this is parent
function CheckFever(props) {
    if (props.celsius >= 99 && props.celsius <= 111) {
      return <p>You have fever</p>; 
    }

    if (props.celsius > 111) {
        return <p>Fatal condition</p>; 
    }

    return <p>The do not have fever</p>;
}

//class component
/*class GetTemperature extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};  }
  
    handleChange(e) {
      this.setState({temperature: e.target.value});  }
  
    render() {
      const temperature = this.state.temperature;    
      return (
        <div>
          <h2>Enter temperature in Fahrenheit:</h2>
          <input value={temperature} onChange={this.handleChange} /> 
          <p>Recorded temperature: {temperature}</p>         
          <CheckFever celsius={parseFloat(temperature)} />     
        </div>
      );
    }
}*/

//this is parent
function Temperature()
{
   function getTemp(temp){
       console.log("In Parent: " + temp);
   }

   return(
    <GetTemperature getTemp = {getTemp}/>
   )
}

//changing class component to functional
//this is child
function GetTemperature(props){

   const [temperature , setTemperature] = useState(99);

   const handleChange = (e) => {
     setTemperature(e.target.value)
     props.getTemp(parseFloat(temperature))
   }

    return(
        <div>
          <h2>Enter temperature in Fahrenheit:</h2>
          <input value={temperature} onChange={handleChange} />   
          <p>Recorded temperature: {temperature}</p>    
          <CheckFever celsius={parseFloat(temperature)} />     
        </div>
    )

}

export default Temperature

//this is lift state up