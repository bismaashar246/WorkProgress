import React from "react";
import Turninvalid from "./Turninvalid";
import Turnvalid from "./Turnvalid";

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Show my count
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

function Valid({turn}){

    if(turn < 10){
        console.log("small")
        return <Turnvalid/>
    }
     console.log("big")
        return <Turninvalid/> 
    
    //{turn < 10 ? ( <TurnValid /> ) : ( <TurnInvalid />)}
}

export default Valid