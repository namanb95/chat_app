import module_css from "./css/chat_screen.module.scss";
import js_css from "./css/chat_screen.css.js";

import React, { Component } from "react";
import PropTypes from "prop-types";
import Chat_Screen_Layout from "../../../components/state_full/chat_screen_layout";
import User_Info_Bar from "../../../components/state_less/user_info_bar";
import User_List_Card from "../../../components/state_full/user_list_card/user_list_card";
import Message_Bar from "../../../components/state_less/message_bar";
import Chat_Message_Block from "../../../components/state_less/chat_message_block";
import Chat_View_Wrapper from "../../../components/state_less/chat_view_wrapper/chat_view_wrapper";

const userData = [
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Manali",
    lastMsg: "hello naman"
  },
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Aman",
    lastMsg: "how are you ?"
  },
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Alatamash",
    lastMsg: ""
  },
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Abhijeet",
    lastMsg: ""
  },
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Clive",
    lastMsg: ""
  },
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Naman",
    lastMsg: ""
  }
];



export default class Chat_Screen extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Chat_Screen_Layout
        leftBar={userData.map((d, i) => (
          <User_List_Card key={i} userData={d} />
        ))}
        rightChatSection={<Chat_View_Wrapper />}
      />
    );
  }
}
