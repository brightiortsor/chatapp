import React from "react";
import { FiVideo, FiMoreVertical } from "react-icons/fi";
import { VscCallOutgoing } from "react-icons/vsc";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Bright</span>
        <div className="chat-icons">
          <VscCallOutgoing />
          <FiVideo />
          <FiMoreVertical />
        </div>
      </div>
    </div>
  );
};

export default Chat;
