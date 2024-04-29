import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyUsersInput = () => {
  const navigate = useNavigate();
  const [myOption, setMyOption] = useState("");
  const [newName, setNewName] = useState("");
  const [names, setNames] = useState(["Bisma", "Izzah", "Fatima"]);

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setMyOption(selectedOption);
    navigate(`/myusers/${selectedOption}`);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAddName = () => {
    setNames([...names, newName]);
    setNewName("");
  };

  return (
    <div>
      <br/><br/>
      <select onChange={handleChange} value={myOption}>
        <option value="">Select a name</option>
        {names.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <br/><br/>
      <input type="text" value={newName} onChange={handleInputChange} />
      <br/><br/>
      <button onClick={handleAddName}>Add</button>
      <br/><br/>
    </div>
  );
};

export default MyUsersInput;