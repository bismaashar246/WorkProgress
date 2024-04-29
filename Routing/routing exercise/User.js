// User.js
import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const { name } = useParams();
    console.log("Name parameter:", name);

    return (
        <div>
            <h2>Hey, this is {name}'s page</h2>
        </div>
    );
};

export default User;
