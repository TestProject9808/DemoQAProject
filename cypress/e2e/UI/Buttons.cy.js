import { basePage } from "../../Pages/Base";
import { buttons } from "../../Pages/Buttons";

describe("Main page testing", () => {
  beforeEach(() => {
    cy.visit("/buttons");
  });

  it("Verify Buttons functionality and page content", () => {
    cy.visit("/");
    cy.contains(basePage.sections[0]).should("be.visible");
    cy.contains(basePage.sections[0]).click();
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

  it("Verify Double Click button functionality", () => {
    // Check double click button
    cy.contains(buttons.NAMES.btnDblClick).click(); //negative case
    cy.get(buttons.NAMES.msgDblClick).should("not.exist"); //negative case
    cy.contains(buttons.NAMES.btnDblClick).dblclick(); //positive case
    cy.contains(buttons.NAMES.msgDblClick).should("exist"); //positive case
  });

  it("Verify Right Click button functionality", () => {
    // Check right click button
    cy.contains(buttons.NAMES.btnRtClick).click(); //negative case
    cy.get(buttons.NAMES.msgRtClick).should("not.exist"); //negative case
    cy.contains(buttons.NAMES.btnRtClick).rightclick(); //positive case
    cy.contains(buttons.NAMES.msgRtClick).should("exist"); //positive case
  });

  it("Verify Click button functionality", () => {
    // Check right click button
    cy.contains(buttons.NAMES.btnClick).rightclick(); //negative case
    cy.get(buttons.NAMES.msgClick).should("not.exist"); //negative case
    buttons.getClickButton().click(); //positive case
    cy.contains(buttons.NAMES.msgClick).should("exist"); //positive case
  });

  it("Verify Clicking all the buttons functionality", () => {
    // Check right click button
    cy.contains(buttons.NAMES.btnDblClick).dblclick();
    cy.contains(buttons.NAMES.btnRtClick).rightclick();
    buttons.getClickButton().click();
    cy.contains(buttons.NAMES.msgDblClick).should("exist");
    cy.contains(buttons.NAMES.msgRtClick).should("exist");
    cy.contains(buttons.NAMES.msgClick).should("exist");
  });
});
