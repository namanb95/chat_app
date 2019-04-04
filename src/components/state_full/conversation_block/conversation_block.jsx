import module_css from "./css/conversation_block.module.scss";
import js_css from "./css/conversation_block.css.js";

import React, { Component } from "react";
import PropTypes from "prop-types";
import Chat_Message_Block from "../../state_less/chat_message_block";

import { connect } from "react-redux";

class Conversation_Block extends Component {
  static propTypes = {
    prop: PropTypes
  };

  constructor(props) {
		super(props);
		
    this.state = {
      messages: this.props.chats
    };
  }

  componentWillMount() {
    this.msgElem = this.state.messages.map((msg, i) => (
      <Chat_Message_Block
        key    = {i}
        from   = {msg.from}
        msg    = {msg.msg}
        user   = {msg.user}
        typing = {msg.typing}
      />
    ));
  }

  render() {
    return <React.Fragment>{this.msgElem}</React.Fragment>;
  }
}

const mapStateToPros = state => ({
  chats: state.chats.messages
});

export default connect(mapStateToPros)(Conversation_Block);
