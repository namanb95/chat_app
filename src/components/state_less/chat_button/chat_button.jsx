import { Link } from "react-router-dom";
import js_css from "./css/chat_button.css.js";
import module_css from "./css/chat_button.module.scss";

import propTypes from "prop-types";
import React from "react";

function Chat_Button({
  name,
  value,
  btnType,
  action,
  handleOnClick,
  path = "/"
}) {
  let btnWrapper = (
    <button
      onClick={ handleOnClick }
      className={ module_css[btnType] }
      name={ name }
      value={ value }
      type={ action }
    >
      {value}
    </button>
  );
  if (action === "link") {
    btnWrapper = <Link to={ path }>{btnWrapper}</Link>;
  }
  return <div className={ module_css.layout }>{btnWrapper}</div>;
}

Chat_Button.propTypes = {
  btnType: propTypes.oneOf(["primary", "default"])
};

export default Chat_Button;
