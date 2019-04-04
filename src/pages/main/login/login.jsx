import module_css from "./css/login.module.scss";
import js_css from "./css/login.css.js";
import React, { lazy, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { login } from "../../../redux/action/_user/user.action";

const Card        = lazy(() => import("../../../components/state_less/card"));
const Chat_Input  = lazy(() => import("../../../components/state_less/chat_input"));
const Chat_Image  = lazy(() => import("../../../components/state_less/chat_image"));
const Chat_Button = lazy(() => import("../../../components/state_less/chat_button"));

function Login({ login, history }) {
  const [data, setUserData] = useState({ username: "", password: "" });

  const handleChange = e => {
    setUserData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const submitLogin = e => {
    e.preventDefault();
    login(data, history)
      .then(s => history.push("/dashboard"))
      .catch(err => console.log(err, "error"));
  };

  return (
    <div className={module_css.layout}>
      <Card height="60%" width="30%">
        <div className={module_css.logo}>
          <Chat_Image
            circular={false}
            imageSquareSize="70%"
            imageData={{
              img:
                "https://www.raweng.com/assets/blt0160a81427260b9a/raweng-logo.svg",
              alt: "logo"
            }}
          />
        </div>
        <div className={module_css.input}>
          <form onSubmit={submitLogin}>
            <Chat_Input
              inputStyle={{ background: "#e4e4e4" }}
              value={data.username}
              placeholder="Email / Username"
              onChange={handleChange}
              type="text"
              name="username"
            />
            <Chat_Input
              inputStyle={{ background: "#e4e4e4" }}
              value={data.password}
              placeholder="Password"
              onChange={handleChange}
              type="password"
              name="password"
            />
            <div className={module_css.btnWrapper}>
              <Chat_Button
                name="btn"
                value="submit"
                action="submit"
                btnType="primary"
                // handleOnClick={e => console.log(data)}
              />{" "}
              &nbsp; or &nbsp;{" "}
              <Chat_Button
                name="btn"
                value="Signup"
                action="link"
                btnType="default"
                path="/signup"
              />
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

Login.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
