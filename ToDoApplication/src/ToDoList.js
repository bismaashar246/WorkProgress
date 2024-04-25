import React, { useReducer, useEffect, useCallback } from 'react';
import SingleTask from './components/SingleTask';
import AddTask from './components/AddTask';
import './ToDoList.css';

function ToDoList() {
  const initialState = [];
  
  //create a useReducer to handle functions
  const [todos, dispatch] = useReducer((todos, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...todos, { id: action.payload.id, task: action.payload.task, date: action.payload.date }];
        
        case 'UPDATE_TODO':
        return todos.map(todo => {
          if (todo.id === action.payload.id) {
             return {...todo,task: action.payload.task};
           } else {
             return todo;
             }
      });

      case 'DELETE_TODO':
        return todos.filter(todo => todo.id !== action.payload);
      
        default:
        return todos;
    }
  }, initialState);

  const handleAddTask = useCallback((newTask) => {
    dispatch({ type: 'ADD_TODO', payload: newTask });
  }, []);

  const handleUpdateTask = useCallback((id, newTask) => {
    dispatch({ type: 'UPDATE_TODO', payload: { id, task: newTask } });
  }, []);

  const handleDeleteTask = useCallback((id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  }, []);

  useEffect(() => {
    console.log("Current tasks:", todos);
  }, [todos]);

  return (
    <div className="form">
      <h1>My To-Do List</h1>
      <AddTask onAddTask={handleAddTask}/>

      {todos.map(todo => (
        <SingleTask key={todo.id} task={todo} onUpdateTask={handleUpdateTask} onDeleteTask={() => handleDeleteTask(todo.id)} />
      ))}
    </div>
  );
}

export default ToDoList;