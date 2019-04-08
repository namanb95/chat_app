import HttpAdaptor from "../../helpers/http";

const login_user_service = data => {
  let httpCall = new HttpAdaptor(
    "POST",
    "/auth/login",
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

const register_user_service = data => {};

export { login_user_service, register_user_service };
