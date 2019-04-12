import module_css from "./css/profile.module.scss";
import js_css from "./css/profile.css.js";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chat_Image from "../../../components/state_less/chat_image";
import Chat_Input from "../../../components/state_less/chat_input";
import Form from "../../../components/wrapper/form";
import Chat_Button from "../../../components/state_less/chat_button";
import ImageUpload from "../../../components/common/image_upload";

class Profile extends Component {
  constructor(props) {
    super(props);
    let { currentUser } = props;
    this.state = {
      userData: {
        ...currentUser
      }
    };
  }

  static propTypes = {
    prop: PropTypes
  };

  form = data => {
    console.log(data);
  };

  render() {
    //
    return (
      <div className={module_css.layout}>
        <div className={module_css.imgWrapper}>
          <ImageUpload
            imageSquareSize={"230px"}
            circular={false}
            imageData={this.state.userData}
          />
        </div>

        <div className={module_css.formWrapper}>
          <Form
            style={{ margin: "2% 5% 2% 10%" }}
            onSubmit={this.form}
            formState={this.state.userData}
          >
            {({ setInputVal, dirty, state , resetForm }) => {
              return (
                <div>
                  <Chat_Input
                    labelColor="#eee"
                    label="Name"
                    name="name"
                    placeholder="test"
                    value={state.name}
                    onChange={setInputVal}
                  />
                  <Chat_Input
                    labelColor="#eee"
                    label="Email"
                    name="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={setInputVal}
                  />
                  <Chat_Input
                    labelColor="#eee"
                    label="Password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={setInputVal}
                    type="password"
                    disabled
                  />
                  <Chat_Button
                    value={"Submit"}
                    btnType="primary"
                    action="submit"
                    disabled={!dirty}
                  />
									<Chat_Button
										handleOnClick={resetForm}
                    value={"Reset"}
                    btnType="default"
                    action="button"
                  />
                </div>
              );
            }}
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser.loggedInUser
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
