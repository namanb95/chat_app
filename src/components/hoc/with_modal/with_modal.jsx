import module_css from "./css/with_modal.module.scss";
import js_css from "./css/with_modal.css.js";
import React from "react";
import PropTypes from "prop-types";

const withModal = WrappedComponent => {
  return class hocComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showModal: false
      };
    }

    toggleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    };

    render() {
      return (
        <WrappedComponent
          toggleModal={this.toggleModal}
          modalState={this.state.showModal}
          {...this.props}
        />
      );
    }
  };
};

export { withModal };
