import React from "react";
import PropTypes from "prop-types";

import anchor_style from "./anchor.module.scss"

const sendPostMsg = (e) =>{
  console.log(e)
  window.parent.postMessage(e,"http://localhost:5500/index.html#!/dashboard")
}

function anchor({ eventType, content }) {
  return (
    <div className={anchor_style.anchorTag}>
      <button onClick={()=>sendPostMsg(eventType)} >{content}</button>
    </div>
  );
}

anchor.propTypes = {
  eventType : PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default anchor;
