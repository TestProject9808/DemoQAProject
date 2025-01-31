import { basePage } from "../../Pages/Base";
import { checkBox } from "../../Pages/CheckBox";

describe("Checkbox testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.sections[0]).should("be.visible");
    cy.contains(basePage.sections[0]).click();
  });

  it("Verifies check boxes button functionality and Page", () => {
    basePage.getHeaderText().should("contain", basePage.sections[0]);
    cy.contains(checkBox.NAMES.checkBox).should("be.visible");
    checkBox.getCheckboxID().should("not.have.class", basePage.LOCATORS.active);
    checkBox.getCheckboxID().contains(checkBox.NAMES.checkBox).click();
    //verify the CheckBox is active and it's URL
    cy.url().should("include", `/${checkBox.NAMES.url}`);
    checkBox.getCheckboxID().should("have.class", basePage.LOCATORS.active);
    //checking the title
    cy.get(basePage.LOCATORS.h1).should("contain", checkBox.NAMES.title);
  });

  it("Verify Checking functionality by checking from HomeNode (invisible from UI)", () => {
    checkBox.getCheckboxID().contains(checkBox.NAMES.checkBox).click();
    //check
    checkBox
      .getTreeNodeHome()
      .first() // Find the first checkbox
      .check({ force: true }) // Check the checkbox
      .should("be.checked"); // Ensure it is checked

    //verify Check message
    checkBox
      .getResultMessage()
      .should("contain", checkBox.NAMES.messageForSelected);
    //uncheck
    checkBox
      .getTreeNodeHome()
      .first() // Find the first checkbox
      .uncheck({ force: true }) // Uncheck the checkbox
      .should("not.be.checked"); // Ensure it is unchecked

    checkBox.getResultMessage().should("not.exist");
  });

  it("Verify Expand / Collapse all", () => {
    checkBox.getCheckboxID().contains(checkBox.NAMES.checkBox).click();
    // Check that the tree is not expanded
    cy.get(checkBox.leafNode).should("not.exist");
    // Expand all
    cy.get(checkBox.LOCATORS.expandAll).should("be.visible").click();
    // Check that the tree is expanded
    cy.contains(checkBox.NAMES.angular).should("be.visible");
    checkBox.getLeaf().should("have.length.greaterThan", 2);

    //check that Home is not checked
    checkBox.getLeaf().should("not.have.class", checkBox.LOCATORS.checked); //negative case
    //Check the home
    cy.contains(checkBox.NAMES.home).click();
    // Verify that Home is checked
    checkBox.getLeaf().should("have.class", checkBox.LOCATORS.checked);
    //verify Check message
    checkBox
      .getResultMessage()
      .should("contain", checkBox.NAMES.messageForSelected);

    // Uncheck Home
    cy.contains(checkBox.NAMES.home).click();
    //Verify that Home is unchecked
    checkBox.getLeaf().should("have.class", checkBox.LOCATORS.unchecked);
    checkBox.getResultMessage().should("not.exist");

    //Collapse the tree and check that collapsed
    cy.get(checkBox.LOCATORS.collapseAll).should("be.visible").click();
    cy.get(checkBox.leafNode).should("not.exist");
  });

  it("Verify Expanding from 'toggle>' button", () => {
    checkBox.getCheckboxID().contains(checkBox.NAMES.checkBox).click();

    // Check that the Toggle is closed
    checkBox
      .getToggle()
      .get(basePage.LOCATORS.svg)
      .first()
      .get(checkBox.LOCATORS.rctIcon)
      .should("have.class", checkBox.LOCATORS.closedToggle);

    // Click on first Toggle
    checkBox.getToggle().first().click();

    // Check that the toggle is opened and have children(FirstLevel Parents)
    checkBox
      .getToggle()
      .get(basePage.LOCATORS.svg)
      .first()
      .get(checkBox.LOCATORS.rctIcon)
      .should("have.class", checkBox.LOCATORS.openedToggle);

    checkBox.getFirtsLevelParents().should("have.length", "3");
  });
});
