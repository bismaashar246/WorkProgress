import React, { useState, useRef, useEffect } from "react";
import "../ToDoList.css";

function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const taskInputRef = useRef();
  const addButtonRef = useRef();

  //show mounting
  useEffect(() => {
    taskInputRef.current.focus();
  }, []);

  /*useEffect(() => {
    console.log("Task:", task);
    console.log("Date:", date);
  }, [task, date]);*/

  const handleAddTask = () => {
    if (task.trim() !== "" && date.trim() !== "") {
      onAddTask({ id: Date.now() , task, date });
      setTask("");
      setDate("");
    }
  };

  const handleFocus = (ref) => {
    ref.current.style.backgroundColor = "yellow";
  };

  const handleBlur = (ref) => {
    ref.current.style.backgroundColor = ""; 
  };

  return (
    <div className="addtask">
      <label>
        Task:
        <input type="text" name="mytask" value={task} onChange={(e) => setTask(e.target.value)}
               onFocus={() => handleFocus(taskInputRef)} onBlur={() => handleBlur(taskInputRef)} ref={taskInputRef} />
      </label>

      <br /><br />

      <label>
        Due Date:
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      </label>
      
      <br /><br />

      <button type="button" onClick={handleAddTask}
              onFocus={() => handleFocus(addButtonRef)} onBlur={() => handleBlur(addButtonRef)} ref={addButtonRef}>
        Add task
      </button>
    </div>
  );
}

export default AddTask;