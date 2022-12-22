import React from "react";
import { IoMdSend } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { CgAttachment } from "react-icons/cg";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type a message..." />
      <div className="send">
        <CgAttachment className="attach-icon" />
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <MdAddPhotoAlternate className="send-icon" />
        </label>
        <button>
          <IoMdSend className="btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default Input;
