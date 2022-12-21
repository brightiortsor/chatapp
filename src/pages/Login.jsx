import React from "react";
import "../Style.scss";

const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <span className="logo">iBiChat</span>
        <span className="title">Login</span>
        <form>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />

          <button>Login</button>
        </form>
        <p>Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
