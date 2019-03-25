import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Chat_Screen_Layout from "./index";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Test -> Chat Screen Layout Component", () => {
  it("Should Render The Component without Crash", () => {
    let wrapper = shallow(
      <Chat_Screen_Layout
        leftBar={[1, 2, 34, 4]}
        rightChatSection={<div>hello</div>}
      />
    );
    let dataTestWrapper = wrapper.find(
      "[data-test='component-chat-screen-layout']"
    );
    expect(dataTestWrapper.length).toBe(1);
  });
});
