import React, { Component } from "react";
import PropTypes from "prop-types";
import Chat_Image from "../../state_less/chat_image";

import module_css from "./css/user_list_card.module.scss";
import js_css from "./css/user_list_card.css.js";
console.log(js_css);

export class User_List_Card extends Component {
  static propTypes = {
    userData: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={module_css.layout}>
        <div className={module_css.imgBlk}>
          <div className={module_css.imgBlkWrapper}>
            <Chat_Image userObjekt={this.props.userData} imageSize="XL" />
          </div>
        </div>
        <div className={module_css.nameBlk}>
          <div className={module_css.name}>
            {this.props.userData.name || "Dummy"}
          </div>
          <div className={module_css.msg}>sdmsdmsdm</div>
        </div>
        <div className={module_css.userStatus}>
          <div className={module_css.userStatus_}>
            <div>s</div>
          </div>
          <div className={module_css.userLastSeen}>
            <div>12:45 pm</div>
          </div>
        </div>
      </div>
    );
  }
}

export default User_List_Card;
