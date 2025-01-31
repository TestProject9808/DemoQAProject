import { basePage } from "../../Pages/Base";
import { buttons } from "../../Pages/Buttons";

describe("Elements/Buttons testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.sections[0]).should("be.visible");
    cy.contains(basePage.sections[0]).click();
  });

  it("Verify Buttons functionality and page content", () => { 
    basePage.getHeaderText().should("contain", basePage.sections[0]);
    cy.contains(buttons.NAMES.buttons).should("be.visible");
    buttons.getButtonsID().should("not.have.class", basePage.LOCATORS.active);
    buttons.getButtonsID().contains(buttons.NAMES.buttons).click();
    //check the checkbox URL and that it becomes active
    cy.url().should("include", `/${buttons.NAMES.url}`);
    buttons.getButtonsID().should("have.class", basePage.LOCATORS.active);
    //checking the title
    cy.get(basePage.LOCATORS.h1).should("contain", buttons.NAMES.title);
  });

  it("Verify buttons functionality", () => {
    cy.visit("/buttons"); //change visit URL
    // Check double click button
    cy.contains(buttons.NAMES.btnDblClick).click(); //negative case
    cy.get(buttons.NAMES.msgDblClick).should("not.exist"); //negative case
    cy.contains(buttons.NAMES.btnDblClick).dblclick(); //positive case
    cy.contains(buttons.NAMES.msgDblClick).should("exist"); //positive case

    // Check right click button
    cy.contains(buttons.NAMES.btnRtClick).click(); //negative case
    cy.get(buttons.NAMES.msgRtClick).should("not.exist"); //negative case
    cy.contains(buttons.NAMES.btnRtClick).rightclick(); //positive case
    cy.contains(buttons.NAMES.msgRtClick).should("exist"); //positive case

    // Check right click button
    cy.contains(buttons.NAMES.btnClick).rightclick(); //negative case
    cy.get(buttons.NAMES.msgClick).should("not.exist"); //negative case
    buttons.getClickButton().click(); //positive case
    cy.contains(buttons.NAMES.msgClick).should("exist"); //positive case

    // Check that DblClick and RtClick messages remain on page
    cy.contains(buttons.NAMES.msgDblClick).should("exist");
    cy.contains(buttons.NAMES.msgRtClick).should("exist");
  });
});
