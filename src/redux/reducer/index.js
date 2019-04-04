import {combineReducers} from "redux";
import userReducer from "./user.reducer"
import routerReducer from "./router.reducer"
import userListReducer from "./user_list.reducer"
import chatsReducer from "./chats.reducer"

const reducers = combineReducers({
	currentUser: userReducer,
	userList   : userListReducer,
	router     : routerReducer,
	chats      : chatsReducer
})

export default reducers;