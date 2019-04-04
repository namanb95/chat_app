import React, { Component } from "react";
import PropTypes from "prop-types";

import screenLayout from "./chat_screen_layout.module.scss";

export default class Chat_Screen_Layout extends Component {
  constructor() {
    super();

    this.state = {
      showLeftBar: true
    };
  }

  static propTypes = {
    leftBar: PropTypes.array.isRequired,
    rightChatSection: PropTypes.element.isRequired
  };

  toogleLeftBar = () => {
    let currentState = this.state.showLeftBar;
    this.setState({
      showLeftBar: !currentState
    });
  };
  render() {
    return (
      <div
        className={screenLayout.screenLayout}
        data-test="component-chat-screen-layout"
        style={{...this.props.style}}
      >
      
        <div
          className={screenLayout.leftPanel}
          style={{ flex: this.state.leftBarFlex }}
          data-test="left-panel"
        >
          {this.state.showLeftBar && this.props.leftBar}
        </div>

        <div
          className={screenLayout.rightPanel}
          style={{ marginLeft: this.state.showLeftBar ? "300px" : 0 }}
          data-test="right-panel"
        >
          <button data-test="toogle-button" className={screenLayout.btn} onClick={() => this.toogleLeftBar()}>
            <i
              className={`fas fa-${
                this.state.showLeftBar ? "angle-left" : "address-book"
              }`}
            />
          </button>
          {this.props.rightChatSection}
        </div>
      </div>
    );
  }
}
