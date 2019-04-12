import module_css from "./css/search_box.module.scss";
import js_css from "./css/search_box.css.js";

import React from "react";
import Chat_Input from "../chat_input";
import Chat_Button from "../chat_button";
import Modal from "../../portals/modal";
import { withModal } from "../../hoc/with_modal/with_modal";
import AddNewPeople from "../../state_full/add_new_people";

function Search_Box(props) {
  const {
    onSearchChange,
    searchVal,
    placeholder,
    modalState,
		toggleModal,
		showAddBtn = false
  } = props;

  return (
    <div className={module_css.layout}>
      {/* <div className={module_css.searchWrapper}> */}
      <div className={module_css.inputBox}>
        <Chat_Input
          value={searchVal}
          placeholder={placeholder}
          onChange={onSearchChange}
        />
      </div>
      <div className={module_css.addSearchBtn}>
        <Chat_Button
          value="+"
          action="button"
          btnType="primary"
          btnStyle={{ fontSize: "20px", padding: "6px 12px" }}
          title={"Add People"}
          handleOnClick={toggleModal}
        />
      </div>

      <Modal show={modalState} {...props}>
        <AddNewPeople />
      </Modal>
    </div>
  );
}

export default withModal(Search_Box);
