import React from "react";
import "../Style.scss";
import { FcAddImage } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <span className="logo">iBiChat</span>
        <span className="title">Sign Up</span>
        <form>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email@gmail.com" />
          <input type="text" placeholder="password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <FcAddImage className="signup-icon" />
            <span>Add an Avatar</span>
          </label>
          <button>Register</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Signup;
