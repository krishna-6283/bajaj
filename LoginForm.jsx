import React, { useState } from "react";
import axios from "axios";
import { toggleForm } from "../utils/formToggle";
import { useNavigate } from "react-router-dom"; 

const LoginForm = () => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });
  const [rememberMe, setRememberMe] = useState(false); // state for remember me
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    console.log(input); 

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8080/user/login?rememberMe=" + rememberMe,  // Pass rememberMe as query parameter
        input,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );
      console.log(res); 

      if (res.data.success) {
        alert(res.data.message);
        setInput({ username: "", password: "" });
        navigate('/dashboard'); // Navigate to the Dashboard route
      } else {
        alert(res.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error); // Debugging log
      if (error.response) {
        if (error.response.status === 401) {
          alert("Unauthorized: Incorrect username or password.");
        } else {
          alert(error.response.data.message || "An error occurred. Please try again.");
        }
      } else {
        alert("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  const forgotPasswordHandler = () => {
    navigate("/verify"); // Navigate to the Verify OTP page
  };

  return (
    <div className="login-container" id="login">
      <div className="top">
        <span>
          Don't have an account?{" "}
          <a href="#" onClick={() => toggleForm("register")}>
            Sign Up
          </a>
        </span>
        <header>Login</header>
      </div>
      <form onSubmit={loginHandler}>
        <div className="input-box">
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            id="le"
            name="username"
            value={input.username}
            onChange={changeEventHandler}
          />
          <i className="bx bx-user"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            id="lp"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
          />
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="input-box">
          <input type="submit" className="submit" value="Sign In" id="lsubmit" />
        </div>
        <div className="two-col">
          <div className="one">
            <input
              type="checkbox"
              id="login-check"
              checked={rememberMe}
              onChange={toggleRememberMe}
            />
            <label htmlFor="login-check"> Remember Me</label>
          </div>
          <div className="two">
            <label>
              <a href="#" onClick={forgotPasswordHandler}>Forgot password?</a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
