import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/main/login/login";
// import Dashboard from "../pages/main/dashboard/dashboard";
// import Signup from "../pages/main/signup";

import { connect } from "react-redux";

const Signup = lazy(() => import("../pages/main/signup"));
const Dashboard = lazy(() => import("../pages/main/dashboard/"));

const routeTable = [
  {
    path: "/signup",
    component: Signup
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/dashboard",
    component: Dashboard
  }
];

const notFound = {
  path: "**",
  render: () => <div>No page found</div>
};

function MainRoute({ mainRouteState, match }) {
  let dashboardRoutes = mainRouteState;
  let newRoute = [];

  dashboardRoutes.map(r => {
    let mainRoute = routeTable.find(rt => rt.path === r.path);
    newRoute.push(Object.assign({}, mainRoute, r));
  });

  newRoute.push(notFound);

  let dynamicRoutes = newRoute.map((route, i) => {
    if (route.private) {
      return <Redirect key={i} from={route.path} to={route.redirectTo} />;
    } else
      return (
        <Route
          key={i}
          path={`${route.path}`}
          exact={route.exact}
          component={route.component}
          render={route.render}
        />
      );
  });
  return (
    <React.Fragment>
      <Switch>{dynamicRoutes}</Switch>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    mainRouteState: state.router.main
  };
};

export default connect(
  mapStateToProps,
  null
)(MainRoute);
