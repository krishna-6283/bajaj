import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { toggleForm } from "../utils/formToggle";

const Navbar = () => {
  useEffect(() => {

  }, []);

  return (
    <div className="wrapper">
      <video autoPlay muted loop id="background-video">
        <source src="/b.mp4" type="video/mp4" />
      </video>
      <nav className="nav">
        <div className="nav-logo">
          <p>Flex-It-Out</p>
        </div>
        <div className="nav-button">
          <button className="btn white-btn" onClick={() => toggleForm("login")}>
            Sign In
          </button>
          <button className="btn" onClick={() => toggleForm("register")}>
            Sign Up
          </button>
        </div>
      </nav>
      <div className="form-box">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Navbar;
