import { LOGIN_USER } from "../action_types/index.types";

const initialState = {
  isLoggedIn  : false,
  loggedInUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TEST_CHANGE": {
      let user = state.loggedInUser;
      user.status = !user.status;
      return {
        ...state,
        user
      };
    }
    case LOGIN_USER: {
      let currentUser = {
        ...state.loggedInUser,
				...action.payload,
      };
      return {
        isLoggedIn: true,
        loggedInUser: currentUser
      };
    }
    default:
      return state;
  }
};
