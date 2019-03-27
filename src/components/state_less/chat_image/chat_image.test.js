import React from "react";
import TestFactory from "../../../../test_factory";
import Chat_Image from "./chat_image";

const componentTest = new TestFactory();


describe("Chat Image Component", () => {
  beforeEach(() => {
    let props = {
      userObjekt: {
        img:
          "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
        name: "Naman"
      },
      imageSize: "XL"
    };

    componentTest.createShallowCopy(Chat_Image, props);
  });

  it("Should Render Component Without Fail", () => {
    let component = componentTest.getDataTestAttr("chat-image-component");
    expect(component.length).toBe(1);
  });

  it("Should Have Same Path As Passed In Props", () => {
    let imageElem = componentTest.getDataTestAttr("chat-image");
    expect(imageElem.props().src).toEqual(componentTest.props.userObjekt.img);
  });

  it("Should Have Name Passed Via Props In alt Attribute Of Img Tag", () => {
    let imageElem = componentTest.getDataTestAttr("chat-image");
    expect(imageElem.props().alt).toEqual(componentTest.props.userObjekt.name);
  });
});
