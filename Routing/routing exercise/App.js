// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyUsers from "./MyUsers";
import User from "./User";
import MyUsersInput from "./MyUsersInput";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/myusers" element={<MyUsers />} />
          <Route path="/myusers/:name" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
