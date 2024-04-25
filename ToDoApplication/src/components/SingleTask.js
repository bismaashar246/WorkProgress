import React, { useState } from "react";
import "../ToDoList.css";

function SingleTask({ task, onUpdateTask, onDeleteTask }) {
  const [newTask, setNewTask] = useState(task.task);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    onUpdateTask(task.id, newTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className="mytask">
      {isEditing ? (
        <>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <h2>{task.task}</h2>
          <h2>{task.date}</h2>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default SingleTask;
