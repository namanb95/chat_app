import React from "react";
import Chat_Screen_Layout from "./index";
import TestFactory from "../../../../test_factory";

const test = new TestFactory();

describe("Chat Screen Layout Component", () => {
  beforeEach(() => {
    let props = {
      leftBar         : [1, 2, 3, 4, 5],
      rightChatSection: <div>hello</div>
    };

    test.createShallowCopy(Chat_Screen_Layout, props);
  });

  it("Should Render The Component without Crash", () => {
    let dataTestWrapper = test.getDataTestAttr("component-chat-screen-layout");
    expect(dataTestWrapper.length).toBe(1);
  });

  it("Should Have Left Panel Rendered", () => {
    let findLeftPanel = test.getDataTestAttr("left-panel");
    expect(findLeftPanel.length).toBe(1);
  });

  it("Should Have Right Panel Rendered", () => {
    let findRightPanel = test.getDataTestAttr("right-panel");
    expect(findRightPanel.length).toBe(1);
  });

  it("Should Have Initial State Of showLeftBar To Be True ", () => {
    let compState = test.getState("showLeftBar");
    expect(compState).toBeTruthy();
  });

  it("Should Render Toogle Button Click", () => {
    let button = test.getDataTestAttr("toogle-button");
    expect(button.length).toBe(1);
  });

  it("Should Toogle State On toogleLeftBar()", () => {
    let previousstate = test.getState("showLeftBar");
    test.wrapper.instance().toogleLeftBar();
    let newState = test.getState("showLeftBar");
    expect(newState).toBe(!previousstate);
  });

  it("Should Trigger toogleLeftBar() On Button Click", () => {
    test.wrapper.instance().toogleLeftBar = jest.fn();
    let button = test.getDataTestAttr("toogle-button");
    button.props().onClick();
    expect(test.wrapper.instance().toogleLeftBar).toHaveBeenCalled();
  });

  it("Should Have Same Count Of Children On Left-Bar As The Number Of Props Passed", () => {
    let findLeftPanel = test.getDataTestAttr("left-panel");
    expect(findLeftPanel.children().length).toBe(test.props.leftBar.length);
  });

  it("Should Hide the Left-Bar Content On Button Click", () => {
    let button = test.getDataTestAttr("toogle-button");
    button.simulate("click");
    let findLeftPanel = test.getDataTestAttr("left-panel");
    expect(findLeftPanel.children().length).toBe(0);
  });
});
