import module_css from "./css/add_new_people.module.scss";
import js_css from "./css/add_new_people.css.js";

import React, { Component, PureComponent } from "react";
import Chat_Input from "../../state_less/chat_input";
import { searchExternalUser } from "../../../redux/action/user_list/external.action";
import { connect } from "react-redux";
import User_List_Card from "../user_list_card/user_list_card";
import UserTagBar from "../user_tag_bar";

const AddPerson = ({ handleChange, val }) => {
  return (
    <div className={module_css.layout}>
      <div className={module_css.searchBar}>
        <Chat_Input
          value={val}
          onChange={handleChange}
          placeholder="Search Person"
        />
      </div>
    </div>
  );
};

const AddGroup = ({ handleChange, val }) => {
  console.log(handleChange, val);
  return (
    <div className={module_css.layout}>
      <div className={module_css.searchBar}>
        <Chat_Input
          value={val}
          onChange={handleChange}
          required
          label="Name Group"
          placeholder={"Name Group"}
        />
      </div>
    </div>
  );
};

class AddNewPeople extends PureComponent {
  constructor() {
    super();
    this.state = {
      currentTab: "PERSON",
      searchVal: ""
    };
  }

  toggleTabs = tabVal => {
    this.setState({ currentTab: tabVal }, () => {
      this.setState({ searchVal: "" });
    });
  };

  handleChange = e => {
    let val = e.currentTarget.value;
    this.setState({ searchVal: val }, () => {
      this.props.searchExternalUser(this.state.searchVal);
    });
  };

  render() {
    return (
      <div className={module_css.layout}>
        <div className={module_css.topTab}>
          <div
            className={module_css.addPeople}
            onClick={() => this.toggleTabs("PERSON")}
          >
            Add Person
          </div>
          <div className={module_css.divider} />
          <div
            className={module_css.addGroup}
            onClick={() => this.toggleTabs("GROUP")}
          >
            Add Group
          </div>
        </div>
        <div className={module_css.addView}>
          {this.state.currentTab === "PERSON" && (
            <AddPerson
              val={this.state.searchVal}
              handleChange={this.handleChange}
            />
          )}
          {this.state.currentTab === "GROUP" && (
            <AddGroup
              val={this.state.searchVal}
              handleChange={this.handleChange}
            />
          )}

          <UserTagBar data={this.props.externalUsers} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  externalUsers: state.userList.external
});

const mapDispatchToProps = {
  searchExternalUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewPeople);
