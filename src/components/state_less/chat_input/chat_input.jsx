import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import module_css from "./css/chat_input.module.scss";
import js_css from "./css/chat_input.css.js";

function Chat_Input(props) {
  const [inputVal, setInputVal] = useState("hello");

  const handleChange = e => {
    setInputVal(e.currentTarget.value);
    console.log(inputVal);
  };

  // useEffect(() => {
  //   console.log("hello functional component is loaded.");

  //   return () => {
  //     console.log("hello functional component un-mounted");
  //   };
  // });

  return (
    <div>
      <input type="text" defaultValue={inputVal} onChange={handleChange} />
    </div>
  );
}

Chat_Input.propTypes = {};

export default Chat_Input;
