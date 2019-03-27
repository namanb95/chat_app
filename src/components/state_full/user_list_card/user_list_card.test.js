import User_List_Card from "./index";
import TestFactory from "../../../../test_factory";

const componentTest = new TestFactory();

describe("User List Component", () => {
  beforeEach(() => {
    let props = {
      userData: {
        img:
          "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
        name: "Naman",
        lastMsg: "hello"
      }
    };
    componentTest.createShallowCopy(User_List_Card, props);
  });

  it("Should Render User List Component Without Fail", () => {
    let userListComp = componentTest.getDataTestAttr("user-list-component");
    expect(userListComp.length).toBe(1);
  });

  it("Should Render Image Div", () => {
    let imageElem = componentTest.getDataTestAttr("user-image");
    expect(imageElem.length).toBe(1);
  });

  it("Should Render Same Name As Pssed In Props", () => {
    let nameElem = componentTest.getDataTestAttr("user-name");
    expect(nameElem.length).toBe(1);
    expect(nameElem.text()).toEqual(componentTest.props.userData.name);
  });

  it("Should Render Dummy If No Name Is Provided", () => {
    let props = {
      userData: {}
    };
    componentTest.createShallowCopy(User_List_Card, props);

    let nameElem = componentTest.getDataTestAttr("user-name");
    expect(nameElem.length).toBe(1);
    expect(nameElem.text()).toEqual("Dummy");
  });
});
