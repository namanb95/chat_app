import Chat_Message_Block from "./index";
import TestFactory from "../../../../test_factory";

const componentTest = new TestFactory();

describe("Chat Message Block Component", () => {
  beforeEach(() => {
    let props = {
      typing: false,
      from: "SELF",
      msg: "hello Naman",
      msgTime: new Date(),
      user: {
        imgUrl: "",
        name: "Naman"
      }
    };

    componentTest.createShallowCopy(Chat_Message_Block, props);
  });

  it("Should Render Message Block Component Without Fail", () => {
    
    let component = componentTest.getDataTestAttr(
      "chat-message-block-component"
    );
    expect(component.length).toBe(1);
  });

  it("Should Have Message Wrapper", () => {
    let messageWrapper = componentTest.getDataTestAttr("message-wrapper");
    expect(messageWrapper.length).toBe(1);
  });

  it("Should Have Message Text Wrapper", () => {
    let messageTextWrapper = componentTest.getDataTestAttr(
      "message-text-wrapper"
    );
    expect(messageTextWrapper.length).toBe(1);
  });

  it("Should Have Time Wrapper", () => {
    let timeWrapper = componentTest.getDataTestAttr("time-wrapper");
    expect(timeWrapper.length).toBe(1);
  });

  it("Should Have Image Wrapper", () => {
    let imageWrapper = componentTest.getDataTestAttr("image-wrapper");
    expect(imageWrapper.length).toBe(1);
  });

  it("Should Have Typing Wrapper - View When User Is Typing", () => {
    let props = {
      typing: true,
      from: "OTHER",
      msg: null,
      messageTime: null,
      user: {
        imgUrl: "",
        name: "Naman"
      }
    };
    componentTest.createShallowCopy(Chat_Message_Block, props);

    let typingWrapper = componentTest.getDataTestAttr("typing-wrapper");
    expect(typingWrapper.length).toBe(1);

    let messageWrapper = componentTest.getDataTestAttr("message-wrapper");
    expect(messageWrapper.length).toBe(0);
  });

  it("Should Not Render Message Wrapper if Typing Prop is True", () => {
    let props = {
      typing: true,
      from: "OTHER",
      msg: null,
      messageTime: null,
      user: {
        imgUrl: "",
        name: "Naman"
      }
    };
    componentTest.createShallowCopy(Chat_Message_Block, props);

    let typingWrapper = componentTest.getDataTestAttr("typing-wrapper");
    expect(typingWrapper.length).toBe(1);

    let messageWrapper = componentTest.getDataTestAttr("message-wrapper");
    expect(messageWrapper.length).toBe(0);
  });

  it("Should Have The Same Text In Message Wrapper As Passed Via Props", () => {
    let messageWrapper = componentTest.getDataTestAttr("message-text-wrapper");
    expect(messageWrapper.text()).toEqual(componentTest.props.msg);
  });

  it("Should Have The Same Time In Time Wrapper As Passed Via Props", () => {
    let timeWrapper = componentTest.getDataTestAttr("time-wrapper");
    expect(timeWrapper.text()).toEqual(
      componentTest.props.msgTime.toLocaleString()
    );
  });
});
