import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
   
    localStorage.setItem('token', 'true'); 
    navigate('/');
  };

  return (
    <div>
      <h1>Login Page</h1>  
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
