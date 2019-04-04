import React from "react";
import { Route, Switch,Link } from "react-router-dom";
import Chat_Screen from "../pages/dashboard/chat_screen/chat_screen";
import { connect } from "react-redux";

const routeTable = [
  {
    path: "/",
    extact: true,
    component: Chat_Screen,
    private: true
  },
  {
    path: "/test",
    extact: true,
    render: () => <div>Test Page in dashboard</div>,
    private: true
  },
  {
    path: "/new-test",
    extact: true,
    render: () => <div>new test Page in dashboard</div>,
    private: true
  }
];

const notFound = {
  path: "**",
  render: () => <div>No page found</div>
};

function DashboardRoute({ routeState, match }) {

  let dashboardRoutes = routeState;
  let newRoute        = [];

  dashboardRoutes.map(r=>{
    let mainroute = routeTable.find(rt => rt.path === r.path);
    newRoute.push(Object.assign({},mainroute,r))
  })

  newRoute.push(notFound);


  let dynamicRoutes = newRoute.map((route, i) => {
    return (
      <Route
        key={i}
        path={`${match.path}${route.path}`}
        exact={route.extact}
        component={route.component}
        render={route.render}
      />
    );
  });

  return (
    <React.Fragment>
      <Link to={`${match.path}/new-test`}>Test New Link</Link>
      <Switch>{dynamicRoutes}</Switch>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    routeState: state.router
  };
};

export default connect(
  mapStateToProps,
  null
)(DashboardRoute);
