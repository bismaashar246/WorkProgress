import './App.css';

import Counter1 from './Counter1';
import Counter2 from './Counter2';
import Wrapper from './Wrapper';
import Call from './Call';
import Contact from './Contact';
import Email from './Email';
import User from './User';
import Message from './Message';
import Routing from './Routing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyUsers from './MyUsers';

function App() {
  return (
    <div className="App">
      
     <Router>
      <Routes>
        <Route path = "/count" element = { <Wrapper render = {(count , increment) => {
                                            return <Counter1 count={count} increment={increment}/>}}/>}/>
        <Route path = "/count2" element = { <Wrapper render = {(count , increment) => {
                                            return <Counter2 count={count} increment={increment}/>}}/>}/>

        <Route path = "/home" element = { <Routing/>}/>
        <Route path = "/Message" element = { <Message/>}/>

        <Route path="contactus" element={<Contact />}>
          {/*Add nested Routes for Contact Us inside its route*/}
          <Route path="user/:name" element={<User/>}/>
          <Route path="email" element={<Email />} />
          <Route path="call" element={<Call />} />
        </Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
