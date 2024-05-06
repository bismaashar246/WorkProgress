import { connect } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = ({user}) => {

  const username = localStorage.getItem('username');
  const gender = localStorage.getItem('gender');
  const age = localStorage.getItem('age');
  const areasOfInterestStr = localStorage.getItem('areasOfInterest') || '';
  const areasOfInterest = areasOfInterestStr.split(',').map(item => item.trim()); 

  return (
    <div>
      <h1>Hello, {username}!</h1>
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <h2>Areas of Interest</h2>
      <ul>
        {areasOfInterest.map((interest, index) => (
        <li key={index}>{interest}</li> ))}
      </ul> 
    </div>
  );
};

export default Home;
