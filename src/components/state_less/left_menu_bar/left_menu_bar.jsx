import module_css from "./css/left_menu_bar.module.scss";
import js_css from "./css/left_menu_bar.css.js";

import React from "react";
import PropTypes from "prop-types";
import Chat_Image from "../chat_image";

import { connect } from "react-redux"

const userData = [
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Ravikiran",
    lastMsg: "hello naman"
  }
];

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
