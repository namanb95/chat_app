import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/main/login/login";
// import Dashboard from "../pages/main/dashboard/dashboard";
// import Signup from "../pages/main/signup";

const Signup = lazy(() => import("../pages/main/signup"));
const Dashboard = lazy(() => import("../pages/main/dashboard/"));

const routeTable = [
  {
    path: "/",
    extact: true,
    render: () => <div>hy this home Page</div>,
    private: true
  },
  {
    path: "/signup",
    extact: true,
    component: Signup
  },
  {
    path: "/login",
    extact: true,
    component: Login
  },
  {
    path: "/dashboard",
    extact: false,
    component : Dashboard
  },
  {
    path: "**",
    render: () => <div>No page found</div>
  }
];

export default function MainRoute(props) {
  let dynamicRoutes = routeTable.map((route, i) => (
    <Route
      key={i}
      path={route.path}
      exact={route.extact}
      component={route.component}
      render={route.render}
    />
  ));

  return (
    <React.Fragment>
      <Switch>{dynamicRoutes}</Switch>
    </React.Fragment>
  );
}
