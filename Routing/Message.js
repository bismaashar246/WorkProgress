import React from "react";
import Hello from './hello.png'
import { useNavigate } from "react-router-dom";

const Message = () => {

    const navigate = useNavigate();

    const handleChange = () => {
        navigate("/home")

    }

    return (
        <div className = 'base'>
            <img src = {Hello} alt = 'cartoon'/>
            
            <h1>Hi There!</h1>
            
            <h3>I am your lil friend!</h3>

            <button onClick={handleChange}>Return Back</button>
        </div>
    )
}

export default Message;

