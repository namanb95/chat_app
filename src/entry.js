import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import store from "./redux/store";
import SocketAdaptor from "./helpers/socket";
import { setAppConfig } from "./redux/action/bootstrap.action";
import { connect } from "react-redux";
import MainRoute from "./routes/main.route";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showApp: false
    };
  }

  componentDidMount() {
    this.props.setAppConfig().finally(() => {
      this.setState({ showApp: true });
    });
  }
  render() {
    return (
      <Router>{this.state.showApp && <MainRoute {...this.props} />}</Router>
    );
  }
}

let mapDispatchToProps = {
  setAppConfig
};
export default connect(
  null,
  mapDispatchToProps
)(Entry);
