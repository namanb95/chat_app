import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import Initial_Load from "./components/state_less/initial_load_screen";
import { User_List_Card } from "./components/state_full/user_list_card/user_list_card";

import { BrowserRouter as Router } from "react-router-dom";

const MainRoute = lazy(() => import("./routes/main.route"));

const Anchor = lazy(() => import("./components/state_less/anchor/anchor"));
// const Initial_Load = lazy(() =>
//   import("./components/state_less/initial_load_screen")
// );

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  loadComponent = () => {
    this.ChatScreenLayout = lazy(() =>
      import("./components/state_full/chat_screen_layout")
    );
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <Suspense
        fallback={
          <Initial_Load
            progressLoaderColor="white"
            bgColor="black"
            logo_URL="https://www.raweng.com/assets/blt0160a81427260b9a/raweng-logo.svg"
          />
        }
      >
        {/* {this.state.show && (
          <this.ChatScreenLayout
            leftBar={
              userData.map((d,i) => <User_List_Card key={i} userData={d} />)
            }
            rightChatSection={<div>hello right</div>}
          />
        )}
        <button onClick={this.loadComponent}>load</button> */}

        <Router>
          <MainRoute />
        </Router>
      </Suspense>
    );
  }
}

export default App;
