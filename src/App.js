import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import Initial_Load from "./components/state_less/initial_load_screen";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import store from "./redux/store";
import SocketAdaptor from "./helpers/socket";

const MainRoute = lazy(() => import("./routes/main.route"));

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  componentDidMount(){
    new SocketAdaptor("http://127.0.0.1:9000").emit("create_private_room",{name : "naman", email : "naman.bhardwaj@gmail.com"})

  }

  render() {
    return (
      <Suspense
        fallback={
          <Initial_Load
            progressLoaderColor="white"
            bgColor="white"
            logo_URL="https://www.raweng.com/assets/blt0160a81427260b9a/raweng-logo.svg"
          />
        }
      >
        <Provider store={store}>
          <Router>
            <MainRoute {...this.props} />
          </Router>
        </Provider>
      </Suspense>
    );
  }
}

export default App;
