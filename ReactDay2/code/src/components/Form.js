import React, { useState , useRef} from "react";
import Custominput from "./CustomInput";

//Lift State Up
function Form(){

    function getName(name){
        console.log("User name is:" + name)
    }

    return(
      <MyForm getName = {getName}/>
    )
}

function MyForm(props){

    const [name , setName] = useState()
    const inputRef = useRef()


    function showSubmit(e)
    {
       e.preventDefault();
       alert("Your form is submitted!")
       console.log("Your form is submitted!")
       props.getName(name);
    }
    //specify the event onSubmit for form
    //for button it will be onClick
    return(
        <form onSubmit = {showSubmit}>
            <Custominput ref={inputRef} value = {name} type = "text" name = "fName"  onChange ={(e) => setName(e.target.value)}/>
            <br /><br />
            <button type = 'submit' onClick = {() => inputRef.current.message()}>Show Text</button>
            <label>DoB: &nbsp;<input type = "date" name = "dob"></input></label>
            <br /><br />
            <label>Password: <input type = "password" name = "password"></input></label>
            <br /><br />
            <select>
                <option value= "female">Female</option>
                <option value= "male">Male</option>
                <option defaultValue = "not specified">Not Specified</option>
            </select>
            <br /><br />
            <button type = 'submit'>Submit</button>
        </form>
    )

}

export default Form