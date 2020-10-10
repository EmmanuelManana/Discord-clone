import { Avatar } from "@material-ui/core";
import React from "react";
import '../styles/Message.css'

const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          username here
          <span className="message__timestamp">timestamp</span>
        </h4>

        <p>
            message
        </p>
      </div>
    </div>
  );
};

export default Message;
