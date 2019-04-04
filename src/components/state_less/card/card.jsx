import module_css from "./css/card.module.scss";
import js_css from "./css/card.css.js";

import React from "react";
import PropTypes from "prop-types";

function Card({ children, height, width }) {
  if(height && width){
    js_css.layout = js_css.updateLayout(height,width)
  }
  return <div className={module_css.layout} style={js_css.layout} >{children}</div>;
}

Card.propTypes = {};

export default Card;
