import { applyMiddleware , createStore , compose} from "redux";
import thunk from "redux-thunk";
import combinedReducers from "../reducer"

const INIIALE_STATE               = {};
const REDUX_CHROME_EXT_CONNECTION = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const MIDDLEWARE                  = [thunk];
const COMPOSE_ARG                 = [applyMiddleware(...MIDDLEWARE)];

if(window.__REDUX_DEVTOOLS_EXTENSION__){
  COMPOSE_ARG.push(REDUX_CHROME_EXT_CONNECTION);
}

const store = createStore(
  combinedReducers,
  INIIALE_STATE,
  compose(...COMPOSE_ARG)
);

export default store;