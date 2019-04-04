import React, { Component } from "react";
import propTypes from "prop-types";
import Chat_Image from "../../state_less/chat_image";

import module_css from "./css/user_list_card.module.scss";
import js_css from "./css/user_list_card.css.js";

export class User_List_Card extends Component {
  render() {
    return (
      <div className={module_css.layout} data-test="user-list-component">
        <div className={module_css.listWrapper}>
          <div className={module_css.imgBlk}>
            <div className={module_css.imgBlkWrapper} data-test="user-image">
              <Chat_Image imageData={this.props.userData} imageSize="XL" />
            </div>
          </div>
          <div className={module_css.nameBlk}>
            <div className={module_css.name} data-test="user-name">
              {this.props.userData.name || "Dummy"}
            </div>
            <div className={module_css.msg}>{this.props.lastMsg}</div>
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
        <div className={module_css.hrWrapper}>
          <hr />
        </div>
      </div>
    );
  }
}

User_List_Card.propTypes = {
  userData: propTypes.object.isRequired
};

export default User_List_Card;
