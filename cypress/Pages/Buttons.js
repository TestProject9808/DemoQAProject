class Buttons {
  NAMES = {
    url: "buttons",
    buttons: "Buttons",
    title: "Buttons",
    btnDblClick: "Double Click Me",
    btnRtClick: "Right Click Me",
    btnClick: "Click Me",
    msgDblClick: "You have done a double click",
    msgRtClick: "You have done a right click",
    msgClick: "You have done a dynamic click",
  };

  getButtonsID() {
    return cy.get("#item-4");
  };

  getClickButton() {
    return cy.get("div.mt-4").eq(1).get("button").last();
  };

}

export const buttons = new Buttons();
