import React from "react";
import { FiVideo, FiMoreVertical } from "react-icons/fi";
import { VscCallOutgoing } from "react-icons/vsc";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Bright</span>
        <div className="chat-icons">
          <VscCallOutgoing className="all-icons" />
          <FiVideo className="all-icons" />
          <FiMoreVertical className="all-icons" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
