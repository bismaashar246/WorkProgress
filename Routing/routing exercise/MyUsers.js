import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyUsers = () => {
  const navigate = useNavigate();
  const [myOption, setMyOption] = useState("");

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setMyOption(selectedOption);
    console.log("My option is: " + selectedOption);
    navigate(`/myusers/${selectedOption}`); 
  };

  return (
    <div>
      <br />
      <br />
      <select onChange={handleChange} value={myOption}>
        <option value="">Choose Option</option>
        <option value="Bisma">Bisma</option>
        <option value="Izzah">Izzah</option>
        <option value="Fatima">Fatima</option> 
      </select>
      <h3>Selected option is {myOption}</h3>
      <br />
      <br />
    </div>
  );
};

export default MyUsers;