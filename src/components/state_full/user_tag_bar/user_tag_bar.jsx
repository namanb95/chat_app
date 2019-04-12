import module_css from "./css/user_tag_bar.module.scss";
import js_css from "./css/user_tag_bar.css.js";

import React, { Component } from "react";
import UserTag from "./user_tag";
import ob from "../user_list_card/css/user_list_card.css";

export default class UserTagBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: addStatusToObject(props.data)
    };

    console.log(props);
  }

  componentWillReceiveProps(newData) {
    this.setState({ tags: addStatusToObject(newData.data) });
  }

  componentWillUnmount() {
		console.log("unmoyt")
		this.setState({ tag: [] });
		this.state = null
  }

  selectTag = index => {
    let arr = this.state.tags;
    arr[index]["selected"] = !arr[index]["selected"];
    console.log(arr);
    this.setState({ tags: [...arr] });
  };

  render() {
    const renderer = () => {
      if (this.state.tags.length === 0) return <div>No User</div>;
      else
        return this.state.tags.map((user, i) => (
          <UserTag
            key={i}
            index={i}
            toggleTag={this.selectTag}
            data={user}
            selected={user.selected}
          />
        ));
    };

    return <div className={module_css.barLayout}>{renderer()}</div>;
  }
}

const addStatusToObject = arr => {
  return arr.map(obj => {
    obj.selected = false;
    return obj;
  });
};
