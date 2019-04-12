import module_css from "./css/user_info_bar.module.scss";
import js_css from "./css/user_info_bar.css.js";

import { connect } from "react-redux";

import React from "react";
import propTypes from "prop-types";


function User_Info_Bar({
  changeStore,
  name,
  textStatus,
  availabilityStatus = false
}) {
  return (
    <div data-test="user-info-bar-component" className={module_css.layout}>
      <div className={module_css.infoSection} data-test="info-section">
        <div className={module_css.nameWrapper} data-test="name-wrapper">
          <div className={module_css.name}>
            <strong>{name}</strong>
          </div>
          <div
            className={
              availabilityStatus ? module_css.online : module_css.offline
            }
            data-test="status"
            title={availabilityStatus ? "Online" : "Offline"}
          />
        </div>
        <div className={module_css.textStatus} data-test="text-status">
          {textStatus}
        </div>
      </div>
      <div className={module_css.actionSection} data-test="action-section">
        <button 
          onClick={changeStore}
          className={module_css.btn}>
          <i className="far fa-folder" />
        </button>
        <button className={module_css.btn}>
          <i className="fas fa-phone" />
        </button>
        <button className={module_css.btn}>
          <i className="fas fa-video" />
        </button>
      </div>
    </div>
  );
}

User_Info_Bar.propTypes = {
  name: propTypes.string.isRequired,
  textStatus: propTypes.string,
  availabilityStatus: propTypes.bool
};

const mapStateToProps = state => {
  
  return {
    name : state.currentUser.loggedInUser.name,
    availabilityStatus : state.currentUser.loggedInUser.status,
    textStatus : state.currentUser.loggedInUser.textStatus,
  };
};
export default connect(
  mapStateToProps,
  null
)(User_Info_Bar);
