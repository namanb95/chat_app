import module_css from "./css/message_bar.module.scss";
import js_css from "./css/message_bar.css.js";

import React from "react";
import propTypes from "prop-types";
import Chat_Textarea from "../chat_textarea/chat_textarea";

import "../../../assets/scss/overrides.scss"

function Message_Bar(props) {
  return (
    <div className={module_css.layout} data-test="message-bar-component">
      <div className={module_css.textAreaWrapper} data-test="text-are-wrapper">
        <Chat_Textarea
          editorStyle={js_css.editorStyle}
          editorVal=""
          isEditor={false}
          placeholder="Enter You Text"
          handleOnChange={e => console.log(e)}
        />
      </div>
      <div className={module_css.actionWrapper} data-test="action-wrapper">
        <button >
          <i className="far fa-paper-plane" />
        </button>
      </div>
    </div>
  );
}

Message_Bar.propTypes = {};

export default Message_Bar;
