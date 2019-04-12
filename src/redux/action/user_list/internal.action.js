import { FILTER_USER_LIST } from "../../action_types/index.types";

const searchInternalUser = searchVal => dispatch => {
  let payload = {
    val: searchVal
  };
  dispatch({
    type: FILTER_USER_LIST,
    payload: payload
  });
};

export { searchInternalUser };
