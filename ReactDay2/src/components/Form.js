import React from "react";

function Form(){

    function showSubmit(e)
    {
       e.preventDefault();
       alert("Your form is submitted!")
       console.log("Your form is submitted!")
    }
    //specify the event onSubmit for form
    //for button it will be onClick
    return(
        <form onSubmit = {showSubmit}>
            <label>Name: <input type = "text" name = "fName"></input></label>
            <br /><br />
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