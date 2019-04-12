import { combineReducers } from "redux";

import userReducer from "./user.reducer";
import chatsReducer from "./chats.reducer";
import main_routerReducer from "./router/main_router.reducer";
import dashboard_routerReducer from "./router/dashboard_router.reducer";
import internalReducer from "./user_list/internal.reducer";
import externalReducer from "./user_list/external.reducer";

const combineRouterReducers = combineReducers({
  main: main_routerReducer,
  dashboard: dashboard_routerReducer
});

const combineUserListReducer = combineReducers({
	internal : internalReducer,
	external : externalReducer
})

const reducers = combineReducers({
  currentUser: userReducer,
  userList   : combineUserListReducer,
  router     : combineRouterReducers,
  chats      : chatsReducer
});

export default reducers;
