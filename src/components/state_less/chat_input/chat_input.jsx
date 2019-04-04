import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

import module_css from "./css/chat_input.module.scss";
import js_css from "./css/chat_input.css.js";

function Chat_Input({ value, onChange, placeholder, type, inputStyle, name }) {

  return (
    <div className={module_css.layout}>
      <input
        name={name}
        style={{ ...inputStyle }}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

Chat_Input.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.oneOf([
    "text",
    "number",
    "button",
    "checkbox",
    "radio",
    "password"
  ])
};

export default Chat_Input;
