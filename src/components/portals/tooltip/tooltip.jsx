import module_css from "./css/tooltip.module.scss";
import js_css from "./css/tooltip.css.js";

import React from "react";
import ReactDOM from "react-dom";

export default function Tooltip({
  top,
  left,
  width,
  children,
  position,
  show
}) {
  let domEle = document.getElementById("tooltip-root");

  js_css.updateStyle(top, left, width);

  const tooltipDomMock = (
    <div className={module_css.layout} style={js_css.layout}>
      <div className={module_css.tooltipContent}>{children}</div>
    </div>
  );
  return ReactDOM.createPortal(show ? tooltipDomMock : null, domEle);
}
