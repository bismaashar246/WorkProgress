import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './Redux/Slice/userSlice';
import Select from 'react-select';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    password: '',
    age: '',
    gender: '',
    areasOfInterest: []
  };

  const handleSubmit = (values) => {
    dispatch(setUser(values)); 
    navigate('/home');
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  const interestOptions = [
    { value: 'arts', label: 'Arts' },
    { value: 'music', label: 'Music' },
    { value: 'sports', label: 'Sports' },
    { value: 'tech', label: 'Tech' },
    { value: 'gaming', label: 'Gaming' }
  ];

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>

            <h1>Log in Form</h1>
            <br/>
            <label>Username:  </label>
            <br/><br/>
            <Field type="text" name="username" id="username" placeholder="Username" />
            <ErrorMessage name="name" component="div" className="error" />
          
          <br/><br />
            <label>Password:   </label>
            <br/><br/>
            <Field type="password" name="password" id="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
          
          <br /><br />
            <label>Age:   </label>
            <br/><br/>
            <Field type="number" name="age" id="age" placeholder="Age" />
            <ErrorMessage name="age" component="div" className="error" />
          
          <br /><br />
          <label>Gender:</label>
          <br/><br/>
            <Select 
              name="gender"
              value={genderOptions.find(option => option.value === values.gender)}
              onChange={(selectedOption) => setFieldValue("gender", selectedOption.value)}
              options={genderOptions}
              placeholder="Select Gender"
            />
            <ErrorMessage name="gender" component="div" className="error" />
          
          <br />
          <label>Areas of Interest:</label>
          <br/><br/>
          
            <Select 
              name="areasOfInterest"
              value={interestOptions.filter(option => values.areasOfInterest.includes(option.value))}
              onChange={(selectedOptions) => setFieldValue("areasOfInterest", selectedOptions.map(option => option.value))}
              options={interestOptions}
              isMulti
              placeholder="Select Areas of Interest"
            />
            <ErrorMessage name="areasOfInterest" component="div" className="error" />
          
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
