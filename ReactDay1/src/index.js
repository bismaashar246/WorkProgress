import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>Hello World</h1> 
  </React.StrictMode>
);
//Task1 + Task3 : hello world can be directly rendered to root
reportWebVitals();
