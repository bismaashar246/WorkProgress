import React, { useState, useRef } from "react";
import SingleTask from "./components/SingleTask";
import AddTask from "./components/AddTask";

function ToDoList() {
  const [tasks, setTasks] = useState([]); // Define tasks state

  const tasksRefs = useRef([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to tasks state using spread operator
    tasksRefs.current.push(React.createRef());
  };

  const handleUpdateTask = (index, newTask) => {
    setTasks(prevTasks => { return prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, task: newTask };
        } else {
          return task;
        }
      });
    });
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((item, i) => i !== index)); // Remove task from tasks state
  };

  return (
    <div className="form">
      <AddTask onAddTask={handleAddTask} />
      {tasks.map((task, index) => (
        <SingleTask
          key={index}
          ref={tasksRefs.current[index]}
          task={task.task}
          date={task.date}
          onUpdateTask={(newTask) => handleUpdateTask(index, newTask)}
          onDeleteTask={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
}

export default ToDoList;
