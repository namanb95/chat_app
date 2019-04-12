import { searchUser } from "../../services/user.service";
import { SET_EXTERNAL_USERS } from "../../action_types/index.types";

const searchExternalUser = searchVal => dispatch => {
  searchUser(searchVal)
    .then(users => {
      dispatch({ type: SET_EXTERNAL_USERS, payload: users.data });
    })
    .catch(err => {
      dispatch({ type: SET_EXTERNAL_USERS, payload: [] });			
		});
};

export { searchExternalUser };
