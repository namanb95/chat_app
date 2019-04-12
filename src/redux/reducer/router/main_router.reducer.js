import React from "react";
import { TOGGLE_POST_LOGIN_ROUTE_STATE } from "../../action_types/index.types";

const initialState = [
  {
    path: "/signup",
    exact: true,
    private: false,
    redirectTo: "/dashboard"
  },
  {
    path: "/login",
    exact: true,
    private: false,
    redirectTo: "/dashboard/chat"
  },
  {
    path: "/dashboard",
    exact: false,
    private: true,
    redirectTo: "/login"
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_POST_LOGIN_ROUTE_STATE: {
      let updatedState = state.map(route => {
        if (route.path === "/dashboard") route.private = false;
        else route.private = true;

        return route;
      });

      return updatedState;
    }
    default:
      return state;
  }
};
