import module_css from "./css/chat_image.module.scss";
import js_css from "./css/chat_image.css.js";

import React from "react";
import propTypes from "prop-types";

const imageSizes = {
  XS   : "5px",
  S    : "10px",
  M    : "20px",
  L    : "30px",
  XL   : "40px",
  XXL  : "50px",
  XXXL : "70px",
  "6XL": "100px"
};

function Chat_Image({ imageData, imageSize,imageSquareSize,circular = true }) {
  let { img , avatar, name, alt } = imageData;

  const ImageDivStyling = {
    height: imageSizes[imageSize] || imageSquareSize,
    width : imageSizes[imageSize] || imageSquareSize
  };
  if (!circular) ImageDivStyling.borderRadius = 0;

  return (
    <div
      className={module_css.layout}
      style={ImageDivStyling}
      data-test="chat-image-component"
    >
      <img
        src       = {img || avatar}
        title     = {name || alt}
        alt       = {name || alt}
        data-test = "chat-image"
      />
    </div>
  );
}

Chat_Image.propTypes = {
  imageData: propTypes.object.isRequired,
  imageSize: propTypes.oneOf(Object.keys(imageSizes)),
  imageSquareSize : propTypes.string
};

export default Chat_Image;
