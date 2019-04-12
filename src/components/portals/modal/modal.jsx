import module_css from "./css/modal.module.scss";
import js_css from "./css/modal.css.js";

import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    };
  }

  closeModalWithInComponent = () => {
    this.props.toggleModal();
  };

  componentWillReceiveProps({ show }) {
    this.setState({ show: show });
  }

  ModalDomMock = (
    <div className={module_css.layout}>
      <div
        className={module_css.blurFilter}
        onClick={this.closeModalWithInComponent}
      />
      <div className={module_css.modalContent}>{this.props.children}</div>
    </div>
  );

  render() {
    const domEle = document.getElementById("modal-root");
    return ReactDOM.createPortal(
      this.state.show ? this.ModalDomMock : null,
      domEle
    );
  }
}
