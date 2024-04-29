import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Login from './Login'
import ProtectedRoute from './utils/ProtectedRoute'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<ProtectedRoute />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<Products/>} path="/products"/>
            </Route>
            <Route element={<Login/>} path="/login"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;