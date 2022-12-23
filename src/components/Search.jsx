import React from "react";
import { FcSearch } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { CgSortAz } from "react-icons/cg";

const Search = () => {
  return (
    <div className="search">
      <div className="search-box">
        <div className="search-form">
          <FcSearch className="search-icon" />
          <input type="text" placeholder="Search" />
          <MdCancel className="close-icon" />
        </div>
        <CgSortAz className="sort-icon" />
      </div>
      <div className="user-chat">
        <img
          src="https://images.pexels.com/photos/7705119/pexels-photo-7705119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        />
        <div className="user-chat_info">
          <span className="username">Theresa</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
