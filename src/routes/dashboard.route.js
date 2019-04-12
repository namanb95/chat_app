import React from "react";
import { Route, Switch, Redirect , Link} from "react-router-dom";
import Chat_Screen from "../pages/dashboard/chat_screen/chat_screen";
import { connect } from "react-redux";
import Profile from "../pages/dashboard/profile";

const routeTable = [
  {
		
    path: "/chat",
    component: Chat_Screen,
	},
	{
    path: "/profile",
    component: Profile,
  }
];


function DashboardRoute({ dashboardRouteState, match }) {
  let dashboardRoutes = dashboardRouteState;
  let newRoute = [];

  dashboardRoutes.map(r => {
    let dashboardRoute = routeTable.find(rt => rt.path === r.path);
    newRoute.push(Object.assign({}, dashboardRoute, r));
  });

  // newRoute.push(notFound);
  let dynamicRoutes = newRoute.map((route, i) => {
		debugger
    if (route.private) {
      return <Redirect key={i} from={`${match.path}${route.path}`} to={route.redirectTo} />;
    } else
      return (
        <Route
          key={i}
          path={`${match.path}${route.path}`}
          exact={route.exact}
          component={route.component}
          render={route.render}
        />
      );
  });

  return (
    <React.Fragment>
			<Link to={`${match.path}/profile`} >test</Link>
      {dynamicRoutes}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    dashboardRouteState: state.router.dashboard
  };
};

export default connect(
  mapStateToProps,
  null
)(DashboardRoute);
