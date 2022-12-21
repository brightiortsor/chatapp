import React from "react";
import "../Style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user">
        <img
          src="https://images.pexels.com/photos/7705119/pexels-photo-7705119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        />
        <span className="username">Bright</span>
      </div>
      <button>LogOut</button>
    </div>
  );
};

export default Navbar;
