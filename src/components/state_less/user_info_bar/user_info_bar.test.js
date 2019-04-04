import User_Info_Bar from "./index";
import TestFactory from "../../../../test_factory";

const componentTest = new TestFactory();

describe("User Information Bar Component",()=>{

  beforeEach(()=>{
    let props = {
      name : "Naman",
      textStatus : "",
      availabilityStatus : false
    };

    componentTest.createShallowCopy(User_Info_Bar,props);
  })

  it("Should Render User Information Bar Without Fail",()=>{
    let component = componentTest.getDataTestAttr("user-info-bar-component");
    expect(component.length).toBe(1);
  })

  it("Should Have Info Section",()=>{
    let infoSec= componentTest.getDataTestAttr("info-section");
    expect(infoSec.length).toBe(1)
  })

  it("Should Have Action Section",()=>{
    let actionSec = componentTest.getDataTestAttr("action-section");
    expect(actionSec.length).toBe(1)
  })

  it("Should Render Same Name as Passed Via Props",()=>{
    let nameWrapper = componentTest.getDataTestAttr("name-wrapper");
    expect(nameWrapper.text()).toEqual(componentTest.props.name)
  })

  it("Should Render Same Text Status as Passed Via Props",()=>{
    let textStatus = componentTest.getDataTestAttr("text-status");
    expect(textStatus.text()).toEqual(componentTest.props.textStatus)
  })

  it("Should Have Avalibility Status",()=>{
    let status =  componentTest.getDataTestAttr("status");
    expect(status.length).toBe(1)
  })
})