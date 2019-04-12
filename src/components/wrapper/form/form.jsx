import module_css from "./css/form.module.scss";
import js_css from "./css/form.css.js";

import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.formState, dirty: false };
  }

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value }, () => {
      this.setState({ dirty: this.dirtyCheck() });
    });
  };

  dirtyCheck = () => {
    let initialFormVal = JSON.stringify(this.props.formState);
    let newFormVal = { ...this.state };
    delete newFormVal.dirty;
    newFormVal = JSON.stringify(newFormVal);

    return initialFormVal === newFormVal ? false : true;
  };

  resetForm = () => {
    this.setState({ ...this.props.formState, dirty: false });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <form style={{ ...this.props.style }} onSubmit={this.submitForm}>
          {this.props.children({
            state: this.state,
            dirty: this.state.dirty,
            resetForm: this.resetForm,
            setInputVal: this.handleChange
          })}
        </form>
      </React.Fragment>
    );
  }
}
