import module_css from "./css/dashboard.module.scss";
import js_css from "./css/dashboard.css.js";

import React, { Component, Suspense } from "react";
import PropTypes from "prop-types";
import Left_Menu_Bar from "../../../components/state_less/left_menu_bar";
import DashboardRoute from "../../../routes/dashboard.route";

export default class Dashboard extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  render() {
    return (
      <div className={module_css.layout}>
        <div className={module_css.leftMenuWrapper}>
          <Left_Menu_Bar />
        </div>
        <div className={module_css.outlet}>
          <Suspense fallback={<div>hello</div>}>
            <DashboardRoute {...this.props} />
          </Suspense>
        </div>
      </div>
    );
  }
}
