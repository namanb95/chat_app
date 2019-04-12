import {
  login_user_service,
  register_user_service
} from "../../services/user.service";
import {
  LOGIN_USER,
  TOGGLE_POST_LOGIN_ROUTE_STATE
} from "../../action_types/index.types";

const login = (data, history) => (dispatch, _getState) => {
  return login_user_service(data)
    .then(res => {
      dispatch({
        type: LOGIN_USER,
        payload: res.data.user
      });
      dispatch({
        type: TOGGLE_POST_LOGIN_ROUTE_STATE,
        payload: {}
      });
      localStorage.setItem("login_token", res.data.token);
      return true;
    })
    .catch(err => {
      throw err;
    });
};

const register = (data, history) => (dispatch, getState, extra) => {
  return register_user_service(data);
};

export { login, register };
