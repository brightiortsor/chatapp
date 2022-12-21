import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="user-chat">
        <img
          src="https://images.pexels.com/photos/7705119/pexels-photo-7705119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        />
        <div className="user-chat_info">
          <span className="username">Bright Clement</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
