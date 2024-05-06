import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/Storage';
import LoginForm from './LoginForm';
import Home from './Home';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} /> 
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
