import React from "react";
import PropTypes from "prop-types";
import initialLoadCSS from "./initial_load.module.scss";

function initial_load({
  bgColor             = String,
  logo_URL            = String,
  progressLoaderColor = String
}) {
  return (
    <div
      className={initialLoadCSS.background}
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url(${logo_URL})`
      }}
    >
      <div className={initialLoadCSS.lds_ellipsis}  >
        <div style={{background : progressLoaderColor}} />
        <div style={{background : progressLoaderColor}} />
        <div style={{background : progressLoaderColor}} />
        <div style={{background : progressLoaderColor}} />
      </div>
    </div>
  );
}

initial_load.propTypes = {
  bgColor: PropTypes.string.isRequired,
  logo_URL: PropTypes.string.isRequired
};

export default initial_load;
