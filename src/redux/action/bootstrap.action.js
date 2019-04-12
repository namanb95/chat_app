import { isLogin } from "../services/user.service";
import {
  TOGGLE_POST_LOGIN_ROUTE_STATE,
  LOGIN_USER
} from "../action_types/index.types";

const setAppConfig = () => (dispatch, getState) => {
  return isLogin().then(res => {
    let userData = res.data;
    dispatch({ type: LOGIN_USER, payload: userData });
    dispatch({ type: TOGGLE_POST_LOGIN_ROUTE_STATE, payload: {} });
  });
};

export { setAppConfig };
