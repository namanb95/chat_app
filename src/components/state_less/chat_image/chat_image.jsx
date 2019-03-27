import module_css from "./css/chat_image.module.scss";
import js_css from "./css/chat_image.css.js";

import React from "react";
import propTypes from "prop-types";

const imageSizes = {
  XS  : "5px",
  S   : "10px",
  M   : "20px",
  L   : "30px",
  XL  : "40px",
  XXL : "50px",
  XXXL: "70px"
};

function Chat_Image({ userObjekt, imageSize }) {

  const { img, name } = userObjekt;


  const ImageDivStyling = {
    height: imageSizes[imageSize],
    width : imageSizes[imageSize]
  };

  return (
    <div className={module_css.layout} style={ImageDivStyling}  data-test="chat-image-component" >
      <img src={img} alt={name} data-test="chat-image" />
    </div>
  );
}

Chat_Image.propTypes = {
  userObjekt: propTypes.object.isRequired,
  imageSize : propTypes.oneOf(Object.keys(imageSizes)).isRequired
};

export default Chat_Image;
