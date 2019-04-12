import module_css from "./css/left_menu_bar.module.scss";
import js_css from "./css/left_menu_bar.css.js";

import React from "react";
import PropTypes from "prop-types";
import Chat_Image from "../chat_image";

import { connect } from "react-redux"


function Left_Menu_Bar({loggedInUser}) {
  return (
    <div className={module_css.layout}>
      <div className={module_css.userImage}>
        <div className={module_css.userImageWrapper}>
          <Chat_Image imageData={loggedInUser} imageSize={"XL"} />
        </div>
      </div>
      <div className={module_css.menuOptions} >
        <div>o1</div>
        <div>o2</div>
        <div>o3</div>
        <div>o4</div>
      </div>
      <div className={module_css.settings}>
        <div className={module_css.settingsWrapper}>
          <i className="fas fa-sliders-h" />
        </div>
      </div>
    </div>
  );
}

Left_Menu_Bar.propTypes = {};

const mapStateToProps =(state)=> ({
	loggedInUser : state.currentUser.loggedInUser
})

export default connect(mapStateToProps,null)(Left_Menu_Bar);
