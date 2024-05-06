import { connect } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = ({user}) => {
  const state = useSelector((state)=> state);
  console.log('state', state)

  return (
    <div>
      <h1>Hello, {state.username}!</h1>
      <p>Gender: {state.gender}</p>
      <p>Age: {state.age}</p>
      <h2>Areas of Interest</h2>
      <ul>
        {state.areasOfInterest.map((interest, index) => (
        <li key={index}>{interest}</li> ))}
      </ul> 
    </div>
  );
};

export default Home;
