import module_css from "./css/signup.module.scss";
import js_css from "./css/signup.css.js";
import React, { Component, lazy, useState } from "react";
import logo from "../../../assets/images/raweng-logo.svg";

import { register } from "../../../redux/action/_user/user.action";
import { connect } from "react-redux";

const Card = lazy(() => import("../../../components/state_less/card"));
const Chat_Image = lazy(() =>
  import("../../../components/state_less/chat_image")
);
const Chat_Input = lazy(() =>
  import("../../../components/state_less/chat_input")
);
const Chat_Button = lazy(() =>
  import("../../../components/state_less/chat_button")
);

function Signup({ register, history }) {
  let appState = { name: "", email: "", password: "" };
  const [data, setUserData] = useState(appState);

  const handleChange = e => {
    setUserData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    register(data)
      .then(res => history.push("/login"))
      .catch(err => console.error(err));
  };

  return (
    <div className={module_css.layout}>
      <Card height="70%" width="30%">
        <div className={module_css.logoBlock}>
          <Chat_Image
            circular={false}
            imageSquareSize="70%"
            imageData={{
              img: logo,
              alt: "logo"
            }}
          />
        </div>
        <form className={module_css.formLayout} onSubmit={submitForm}>
          <div className={module_css.fromControl}>
            <div className={module_css.inputBlock}>
              <Chat_Input
                name="name"
                onChange={handleChange}
                placeholder="Name"
                type="text"
                value={data.name}
                inputStyle={js_css.inputStyle}
              />
              <Chat_Input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                type="email"
                value={data.email}
                inputStyle={js_css.inputStyle}
              />
              <Chat_Input
                name="password"
                onChange={handleChange}
                placeholder="Password"
                type="password"
                value={data.password}
                inputStyle={js_css.inputStyle}
              />
            </div>

            <div className={module_css.formBtn}>
              <Chat_Button
                action="submit"
                value="Signup"
                name="signup"
                btnType="primary"
              />
            </div>
          </div>
          <div className={module_css.loginBtn}>
            Already Signed-up ? &nbsp;
            <Chat_Button
              action="link"
              value="Login"
              name="signup"
              btnType="default"
              path="/login"
            />
          </div>
        </form>
      </Card>
    </div>
  );
}

const mapDispatchToProps = {
  register
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
