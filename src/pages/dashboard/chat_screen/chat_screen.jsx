import module_css from "./css/chat_screen.module.scss";
import js_css from "./css/chat_screen.css.js";

import React, { Component } from "react";
import PropTypes from "prop-types";
import Chat_Screen_Layout from "../../../components/state_full/chat_screen_layout";
import Chat_View_Wrapper from "../../../components/state_less/chat_view_wrapper/chat_view_wrapper";
import User_List_Block from "../../../components/state_less/user_list_block";

export default class Chat_Screen extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Chat_Screen_Layout
        leftBar={<User_List_Block />}
        rightChatSection={<Chat_View_Wrapper />}
      />
    );
  }
}
