import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

import module_css from "./css/chat_input.module.scss";
import js_css from "./css/chat_input.css.js";

function Chat_Input({
	label,
	labelColor = "#000000",
  value,
  onChange,
  placeholder,
  type,
  inputStyle,
  name,
  autoFocus = false,
	required = false,
	disabled = false
}) {
  return (
    <div className={module_css.layout}>
      {label && (
        <label style={{color : labelColor}} >
          {label} {required ? <span style={{ color: "red" }}>*</span> : ""}{" "}
        </label>
      )}
      <div className={module_css.inputWrapper}>
        <input
          // key={Math.random()}
          name={name}
          style={{ ...inputStyle }}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
					autoFocus={autoFocus}
					disabled={disabled}
        />
      </div>
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
    "password",
    "email"
  ])
};

export default Chat_Input;
