import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="user-chat">
        <img
          src="https://images.pexels.com/photos/7705119/pexels-photo-7705119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        />
        <div className="user-chat_info">
          <span className="username">Clement</span>
          <p>Hello!</p>
        </div>
      </div>

      <div className="user-chat">
        <img
          src="https://images.pexels.com/photos/7705119/pexels-photo-7705119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        />
        <div className="user-chat_info">
          <span className="username">Jane</span>
          <p>Hello!</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
