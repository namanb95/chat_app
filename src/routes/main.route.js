import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Chat_Screen_Layout from "../components/state_full/chat_screen_layout";
import User_List_Card from "../components/state_full/user_list_card/user_list_card";

const Signup = lazy(() => import("../pages/signup"));
const userData = [
  {
    img: "",
    name: "Ravikiran",
    lastMsg: "hello naman"
  },
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Aman",
    lastMsg: "how are you ?"
  },
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Alatamash",
    lastMsg: ""
  },
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Abhijeet",
    lastMsg: ""
  },
  {
    img:
      "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Clive",
    lastMsg: ""
  },
  {
    img: "",
    name: "Naman",
    lastMsg: ""
  }
];



const routeTable = [
  {
    path: "/",
    extact: true,
    render: () => <div>hy this home Page</div>,
    private : true
  },
  {
    path: "/signup",
    extact: true,
    component: Signup
  },
  {
    path: "/dashboard",
    extact: true,
    render: ()=>
      <Chat_Screen_Layout
            leftBar={
              userData.map((d,i) => <User_List_Card key={i} userData={d} />)
            }
            rightChatSection={<div>hello right</div>}
          />
    
  },
  {
    path: "**",
    render: () => <div>No page found</div>
  }
];

export default function MainRoute() {
  let dynamicRoutes = routeTable.map((route, i) => (
    <Route
      key={i}
      path={route.path}
      exact={route.extact}
      component={route.component}
      render={route.render}
    />
  ));

  console.log(dynamicRoutes);

  return (
    <React.Fragment>
      <Switch>{dynamicRoutes}</Switch>
    </React.Fragment>
  );
}
