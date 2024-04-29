import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handleChange = () => {
    localStorage.setItem('token', 'false'); 
    navigate('/login')
  }

  return (
    <div>
    <h2>This is Home Page</h2>
    <button onClick={handleChange}>Back to Log in</button>
    </div>
  )
}

export default Home
