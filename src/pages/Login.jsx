import React from "react";
import "../Style.scss";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // get username and password from form
    const authObject = {
      "Project-ID": "467ac5c7-a3d2-4a59-9c0a-fbd9f0aa2188",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      // call to get messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      // if it works, store username and password in local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // reload page after pessting login
      window.location.reload();
    } catch (error) {
      // if it doesn't work, show error
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <span className="logo">iBiChat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />

          <button type="submit">Login</button>
          <h4 className="error">{error}</h4>
        </form>
        <p>Use 'John' and '12345' to test.</p>
      </div>
    </div>
  );
};

export default Login;
