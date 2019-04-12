import { FILTER_USER_LIST, SET_EXTERNAL_USERS, RESET_EXTERNAL_USER } from "../../action_types/index.types";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
		case SET_EXTERNAL_USERS : {
			return [...payload]
		}
		case RESET_EXTERNAL_USER : {
			return [];
		}
    default:
      return state;
  }
};
