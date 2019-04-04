import React, { useState } from "react";
import propTypes from "prop-types";
import ReactQuill from "react-quill";

import module_css from "./css/chat_textarea.module.scss";
import js_css from "./css/chat_textarea.css.js";

import("react-quill/dist/quill.snow.css");

function Chat_Textarea({
  placeholder,
  editorVal,
  editorStyle,
  isEditor = false,
  handleOnChange
}) {
  const [textAreaVal, setTextAreaVal] = useState("");

  // const handleChange = html => {
  //   console.log(html);
  //   setTextAreaVal(html);
  // };

  let editorOptions = {
    style      : { ...editorStyle, width: "100%" ,backgroundColor:"transparent" },
    theme      : "snow",
    onChange   : handleOnChange,
    value      : editorVal,
    bounds     : module_css.layout,
    placeholder: placeholder,
    modules    : Chat_Textarea.modules,
    formats    : Chat_Textarea.formats
  };

  if (!isEditor) {
    editorOptions.theme = null;
    delete editorOptions.modules;
    delete editorOptions.formats;
  }

  return (
    <div className={module_css.layout} data-test="chat-textarea-component">
      <ReactQuill {...editorOptions} >
        <div style={{border:0 }}></div>
      </ReactQuill>
    </div>
  );
}

Chat_Textarea.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill Chat_Textarea formats
 * See https://quilljs.com/docs/formats/
 */
Chat_Textarea.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];

Chat_Textarea.propTypes = {
  placeholder   : propTypes.string.isRequired,
  editorStyle   : propTypes.object,
  isEditor      : propTypes.bool,
  handleOnChange: propTypes.func.isRequired
};

export default Chat_Textarea;
