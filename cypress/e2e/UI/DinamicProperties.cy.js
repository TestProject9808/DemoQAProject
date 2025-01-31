import { basePage } from "../../Pages/Base";
import { dinamicProperties } from "../../Pages/DinamicProperties";

describe("Dinamic Elements testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.sections[0]).should("be.visible");
    cy.contains(basePage.sections[0]).click();
  });

  it("Verifies Dinamic Elements button functionality and Page", () => {
    basePage.getHeaderText().should("contain", basePage.sections[0]);
    cy.contains(dinamicProperties.NAMES.dinamicProperties).should("be.visible");
    dinamicProperties
      .getDinamicPropertiesID()
      .should("not.have.class", basePage.LOCATORS.active);
    dinamicProperties
      .getDinamicPropertiesID()
      .contains(dinamicProperties.NAMES.dinamicProperties)
      .click();
    //verify the Dinamic Property is active and it's URL
    cy.url().should("include", `/${dinamicProperties.NAMES.url}`);
    dinamicProperties
      .getDinamicPropertiesID()
      .should("have.class", basePage.LOCATORS.active);
    //checking the title
    cy.get(basePage.LOCATORS.h1).should(
      "contain",
      dinamicProperties.NAMES.title
    );
  });

  it("Verify Dinamic buttons initial statuses and functionality", () => {
    dinamicProperties
      .getDinamicPropertiesID()
      .contains(dinamicProperties.NAMES.dinamicProperties)
      .click();

    cy.contains(dinamicProperties.NAMES.decription).should("be.visible");
    //Check buttons' initial statuses
    cy.contains(dinamicProperties.NAMES.btnWillEnabled)
      .should("be.visible")
      .and("be.disabled");
    cy.contains(dinamicProperties.NAMES.btnColorChange)
      .should("be.visible")
      .and("not.have.class", "text-danger")
      .and("have.css", "color", dinamicProperties.COLORS.white);
    cy.contains(dinamicProperties.NAMES.btnVisibleAfter).should("not.exist");

    //Check buttons' statuses after 5  seconds
    cy.wait(5000);
    cy.contains(dinamicProperties.NAMES.decription).should("be.visible");
    cy.contains(dinamicProperties.NAMES.btnWillEnabled)
      .should("be.visible")
      .and("be.enabled");
    cy.contains(dinamicProperties.NAMES.btnColorChange)
      .should("be.visible")
      .and("have.class", "text-danger")
      .and("have.css", "color", dinamicProperties.COLORS.red);
    cy.contains(dinamicProperties.NAMES.btnVisibleAfter).should("be.visible");
  });
});
