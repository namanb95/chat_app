import HttpAdaptor from "../../helpers/http";
import API_Store from "../api.config";

const login_user_service = data => {
  let httpCall = new HttpAdaptor(
    "POST",
    API_Store.LOGIN,
    "http://127.0.1:8000",
    null,
    data
  );

  return httpCall
    .setHeaders()
    .setPath()
    .setPayload()
    .makeCall();
};

const register_user_service = data => {
  let httpCall = new HttpAdaptor(
    "POST",
    API_Store.SIGNUP,
    "http://127.0.1:8000",
    null,
    data
  );

  return httpCall
    .setHeaders()
    .setPath()
    .setPayload()
    .makeCall();
};

const searchUser = searchVal => {
  let data = { searchVal };

  let httpCall = new HttpAdaptor(
    "POST",
    API_Store.SEARCH_USER,
    "http://127.0.1:8000",
    null,
    data
  );

  return httpCall
    .setHeaders()
    .setPath()
    .setPayload()
    .makeCall();
};

const isLogin = () => {
  let loginToken = localStorage.getItem("login_token");
  if (loginToken && loginToken !== "") {
    let httpCall = new HttpAdaptor(
      "GET",
      API_Store.VERIFY_TOKEN(loginToken),
      "http://127.0.1:8000"
    );

    return httpCall
      .setHeaders()
      .setPath()
      .setPayload()
      .makeCall();
  } else {
    return Promise.reject(false);
  }
};
export { login_user_service, register_user_service, isLogin, searchUser };
