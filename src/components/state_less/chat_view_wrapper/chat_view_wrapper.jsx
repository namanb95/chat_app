import module_css from "./css/chat_view_wrapper.module.scss";
import js_css from "./css/chat_view_wrapper.css.js";

import React from "react";
import PropTypes from "prop-types";
import User_Info_Bar from "../user_info_bar";
import Chat_Message_Block from "../chat_message_block";
import Message_Bar from "../message_bar";
import Conversation_Block from "../../state_full/conversation_block";

function Chat_View_Wrapper(props) {
  console.log("right block rerendered")
  return (
    <div className={module_css.layout}>
      <div className={module_css.upperWrapper}>
        <div className={module_css.infoWrapper}>
          <User_Info_Bar />
        </div>
        <div className={module_css.msgsWrapper}>
          <Conversation_Block />
        </div>
      </div>
      <div className={module_css.lowerWrapper}>
        <Message_Bar />
      </div>
    </div>
  );
}

Chat_View_Wrapper.propTypes = {};

export default Chat_View_Wrapper;
