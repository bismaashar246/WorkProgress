import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className="contactNav">
        <Link to="/contactus/user/sara">Open Sara</Link>
        <br/><br/>
        <Link to="/contactus/user/bisma">Open Bisma</Link>
        <br/><br/>
        <Link to="/contactus/user/wania">Open Wania</Link>

        <br/><br/>
        <Link to="/contactus/email"> Contact via Email </Link>
        <br /> <br />
        <Link to="/contactus/call"> Contact via Call </Link>
        <br /><br/>
      </div>
      <Outlet />
    </div>
  );
}

export default Contact;