import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

class TestFactory {
  constructor() {
    this.wrapper;
    this.props;
    this.init();
  }

  init() {
    Enzyme.configure({ adapter: new EnzymeAdapter() });
    return this;
  }
  createShallowCopy(Component, props, state = null) {
    this.props = props;
    this.wrapper = shallow(<Component {...props} />);

    if (state) wrapper.state(state);
    return this.wrapper;
  }
  getDataTestAttr(dataTestAttr) {
    return this.wrapper.find(`[data-test='${dataTestAttr}']`);
  }
  getState(stateKey) {
    return this.wrapper.state(stateKey);
  }
}

export default TestFactory;
