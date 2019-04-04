import module_css from "./css/chat_message_block.module.scss";
import js_css from "./css/chat_message_block.css.js";

import React from "react";
import propTypes from "prop-types";
import Chat_Image from "../chat_image";

function Chat_Message_Block({msg,  msgTime = Date.now(),from,user,typing = false}) {
  let time = new Date(msgTime).toLocaleString();
  const MessageWrapper = (
    <div data-test="message-wrapper" className={module_css.messageWarpper}>
      <div
        className={`${module_css.textWrapper} ${from==="SELF" ? module_css.selfMsg : module_css.otherMsg}`}
        data-test="message-text-wrapper"
        >
        {msg}
        {/* <div dangerouslySetInnerHTML={{__html : {}}}></div> */}
      </div>
      <div 
          className={module_css.timeWrapper} 
          data-test="time-wrapper"
        >
        <div>{time}</div>
      </div>
    </div>
  );

  const TypingWrapper = (
    <div 
      data-test="typing-wrapper" 
      className={`${module_css.textWrapper} ${from==="SELF" ? module_css.selfMsg : module_css.otherMsg}`} 
      >
      ...
    </div>
  );

  return (
    <div 
      data-test="chat-message-block-component" 
      className={`${module_css.layout} ${from === "OTHER" ? module_css.fromOther : ''}`}
      >
      <div className={module_css.leftSec}>
        <div data-test="image-wrapper">
          <Chat_Image imageData={user} imageSize="L" />
        </div>
      </div>
      <div className={`${module_css.rightSec}`} >{typing ? TypingWrapper : MessageWrapper}</div>
    </div>
  );
}

Chat_Message_Block.propTypes = {
  msg    : propTypes.string,
  msgTime: propTypes.objectOf(Date),
  from   : propTypes.oneOf(["SELF", "OTHER"]).isRequired,
  user   : propTypes.object.isRequired
};

export default Chat_Message_Block;
