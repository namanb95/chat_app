import module_css from "./css/signup.module.scss";
import js_css from "./css/signup.css.js";
import React, { Component, lazy, useState } from "react";

const Card        = lazy(() => import("../../../components/state_less/card"));
const Chat_Image  = lazy(() => import("../../../components/state_less/chat_image"));
const Chat_Input  = lazy(() => import("../../../components/state_less/chat_input"));
const Chat_Button = lazy(() => import("../../../components/state_less/chat_button"));

export default function Signup() {
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
    console.log(data);
  };

  return (
    <div className={module_css.layout}>
      <Card height="70%" width="30%">
        <div className={module_css.logoBlock}>
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
        <form className={module_css.formLayout} onSubmit={submitForm}>
          <div className={module_css.inputBlock}>
            <Chat_Input
              name="name"
              onChange={handleChange}
              placeholder="Name"
              type="text"
              value={data.name}
            />
            <Chat_Input
              name="email"
              onChange={handleChange}
              placeholder="Email"
              type="text"
              value={data.email}
            />
            <Chat_Input
              name="password"
              onChange={handleChange}
              placeholder="Password"
              type="password"
              value={data.password}
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
          <div className={module_css.loginBtn}>
            Alreday Signed-up ?
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
