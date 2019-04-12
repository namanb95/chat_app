import React from "react";
import { TOGGLE_POST_LOGIN_ROUTE_STATE } from "../../action_types/index.types";

const initialState = [
  {
    path: "/chat",
    exact: true,
    private: false,
	},
	{
    path: "/profile",
    exact: true,
    private: false,
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
