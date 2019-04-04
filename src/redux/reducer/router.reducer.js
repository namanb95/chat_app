import React from "react"


const initialState = [
  {
    path: "/",
  },
  {
    path: "/test",
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "TEST_CHANGE": {
      let currentState = JSON.parse(JSON.stringify(state));
      currentState.push({ path: action.payload });
      return currentState;
    }
    default:
      return state;
  }
};
