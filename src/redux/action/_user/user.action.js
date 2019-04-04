import { login_user_service, register_user_service } from "../../services/user.service";
import { LOGIN_USER } from "../../action_types/index.types";

const login = (data, history) => (dispatch, _getState) => {
  return login_user_service(data)
    .then(() => {
      dispatch({
        type: LOGIN_USER,
        payload: {
          id    : "BLT1234",
          name  : "Naman Bhardwaj",
          mobile: 9013473552,
					status: true,
					img : "https://d1qb2nb5cznatu.cloudfront.net/users/5312378-large?1483646242"
        }
      });
      return true;
    })
    .catch(err => {
      return "Some error";
    });
};

const register = (data, history) => dispatch => {
	return register_user_service(data)
};

export { login };
