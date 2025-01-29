import { basePage } from "../../Pages/Base";
import { checkBox } from "../../Pages/CheckBox";

describe("Main page testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elements).should("be.visible");
    cy.contains(basePage.NAMES.elements).click();
  });

  it("Verifies check boxes functionality", () => {
    basePage.getHeaderText().should("contain", basePage.NAMES.elements);
    cy.contains(checkBox.NAMES.checkBox).should("be.visible");
    checkBox.getCheckboxID().should("not.have.class", basePage.LOCATORS.active);
    checkBox.getCheckboxID().contains(checkBox.NAMES.checkBox).click();
    //check the checkbox URL and that it becomes active
    cy.url().should("include", `/${checkBox.NAMES.url}`);
    checkBox.getCheckboxID().should("have.class", basePage.LOCATORS.active);
    //checking the title
    cy.get(basePage.LOCATORS.h1).should("contain", checkBox.NAMES.title);

    //

    checkBox.getTreeNodeHome().should("exist");
    //check
    checkBox
      .getTreeNodeHome()
      .first() // Select theirst checkbox
      .check({ force: true }) // Check the checkbox
      .should("be.checked");
    //uncheck

    checkBox
      .getTreeNodeHome()
      .first() // Select the same checkbox
      .uncheck({ force: true }) // Uncheck the checkbox
      .should("not.be.checked"); // Ensure it is unchecked

    cy.get('label[for="tree-node-home"]').click();
    /* let cy.get("#tree-node").get("svg").get('.rct-icon')
      .should('have.class', 'rct-icon-expand-close');*/

    cy.get("#tree-node")
      .get("svg")
      .first()
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-close");
    cy.get("#tree-node").get(`[aria-label="Toggle"]`).first().click();
    cy.get("#tree-node")
      .get("svg")
      .first()
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-open");
    cy.get("#tree-node").get("ol>li>ol>li").should("have.length", 3);

    cy.get("#tree-node")
      .get("svg")
      .eq(1)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-close");
    cy.get("#tree-node").get(`[aria-label="Toggle"]`).eq(1).click();
    cy.get("#tree-node")
      .get("svg")
      .eq(1)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-open");

    cy.get("#tree-node")
      .get("svg")
      .eq(2)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-close");
    cy.get("#tree-node").get(`[aria-label="Toggle"]`).eq(2).click();
    cy.get("#tree-node")
      .get("svg")
      .eq(2)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-open");

    cy.get("#tree-node")
      .get("svg")
      .eq(3)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-close");
    cy.get("#tree-node").get(`[aria-label="Toggle"]`).eq(3).click();
    cy.get("#tree-node")
      .get("svg")
      .eq(3)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-open");

    cy.get("#tree-node")
      .get("svg")
      .eq(4)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-close");
    cy.get("#tree-node").get(`[aria-label="Toggle"]`).eq(4).click();
    cy.get("#tree-node")
      .get("svg")
      .eq(4)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-open");

    cy.get("#tree-node")
      .get("svg")
      .eq(5)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-close");
    cy.get("#tree-node").get(`[aria-label="Toggle"]`).eq(5).click();
    cy.get("#tree-node")
      .get("svg")
      .eq(5)
      .get(".rct-icon")
      .should("have.class", "rct-icon-expand-open");

    //Expand all
    /* cy.get(checkBox.LOCATORS.expandAll).should("be.visible").click();
    //check all the checkboxes
    cy.contains("Home").click();
    checkBox.getTreeNodeHome().should("have.length.greaterThan", 0);*/

    //cy.get("#result").should("have.text",checkBox.NAMES.messageForClosedToggle);
  });
});
