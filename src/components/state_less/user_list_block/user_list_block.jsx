import module_css from "./css/user_list_block.module.scss";
import js_css from "./css/user_list_block.css.js";

import React from "react";
import { connect } from "react-redux";
import { searchInternalUser } from "../../../redux/action/user_list/internal.action";
import User_List_Card from "../../state_full/user_list_card/user_list_card";
import Search_Box from "../search_box";

function User_List_Block({ userList, searchInternalUser }) {
  const [searchVal, setSearchVal] = React.useState("");

  const searchUser = e => {
    let val = e.currentTarget.value;
    console.log(val);

    setSearchVal(val);
    searchInternalUser(val);
  };

  return (
    <React.Fragment>
      <Search_Box
        searchVal={searchVal}
        placeholder={"Search People"}
        onSearchChange={searchUser}
      />
      {userList.map((d, i) => (
        <User_List_Card key={i} userData={d} />
      ))}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  userList: state.userList.internal.userList
});

const mapDispatchToProps = {
  searchInternalUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User_List_Block);
