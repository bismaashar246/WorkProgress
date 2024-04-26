import { useParams } from "react-router-dom";
import React from "react";

const User = () => {

    const params = useParams();
    const {name} = params
  return (
    <div>
     <h2>Hey this is {name}'s page</h2>
    </div>
  )
}

export default User;