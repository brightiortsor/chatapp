import React from "react";
import "../Style.scss";
import { FcAddImage } from "react-icons/fc";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";

const Signup = () => {
  const handleSignup = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  };
  return (
    <div className="container">
      <div className="wrapper">
        <span className="logo">iBiChat</span>
        <span className="title">Sign Up</span>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email@gmail.com" />
          <input type="password" placeholder="password" />
          {/* <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <FcAddImage className="signup-icon" />
            <span>Add an Avatar</span>
          </label> */}
          <button>Register</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Signup;
