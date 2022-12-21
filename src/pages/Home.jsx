import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import "../Style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
