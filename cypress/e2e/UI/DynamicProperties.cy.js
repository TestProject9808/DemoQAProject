import { basePage } from "../../Pages/Base";
import { dynamicProperties } from "../../Pages/DynamicProperties";

describe("Dynamic Elements testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.sections[0]).should("be.visible");
    cy.contains(basePage.sections[0]).click();
  });

  it("Verify Dynamic Properties button functionality and Page", () => {
    basePage.getHeaderText().should("contain", basePage.sections[0]);
    cy.contains(dynamicProperties.NAMES.dynamicProperties).should("be.visible");
    dynamicProperties
      .getDynamicPropertiesID()
      .should("not.have.class", basePage.LOCATORS.active);
    dynamicProperties
      .getDynamicPropertiesID()
      .contains(dynamicProperties.NAMES.dynamicProperties)
      .click();
    //verify the Dynamic Property is active and it's URL
    cy.url().should("include", `/${dynamicProperties.NAMES.url}`);
    dynamicProperties
      .getDynamicPropertiesID()
      .should("have.class", basePage.LOCATORS.active);
    //checking the title
    cy.get(basePage.LOCATORS.h1).should(
      "contain",
      dynamicProperties.NAMES.title
    );
  });

  it("Verify Dynamic buttons initial statuses and functionality", () => {
    dynamicProperties
      .getDynamicPropertiesID()
      .contains(dynamicProperties.NAMES.dynamicProperties)
      .click();

    cy.contains(dynamicProperties.NAMES.decription).should("be.visible");
    //Check buttons' initial statuses
    cy.contains(dynamicProperties.NAMES.btnWillEnabled)
      .should("be.visible")
      .and("be.disabled");
    cy.contains(dynamicProperties.NAMES.btnColorChange)
      .should("be.visible")
      .and("not.have.class", "text-danger")
      .and("have.css", "color", dynamicProperties.COLORS.white);
    cy.contains(dynamicProperties.NAMES.btnVisibleAfter).should("not.exist");

    //Check buttons' statuses after 5  seconds
    cy.wait(5000);
    cy.contains(dynamicProperties.NAMES.decription).should("be.visible");
    cy.contains(dynamicProperties.NAMES.btnWillEnabled)
      .should("be.visible")
      .and("be.enabled");
    cy.contains(dynamicProperties.NAMES.btnColorChange)
      .should("be.visible")
      .and("have.class", "text-danger")
      .and("have.css", "color", dynamicProperties.COLORS.red);
    cy.contains(dynamicProperties.NAMES.btnVisibleAfter).should("be.visible");
  });
});
