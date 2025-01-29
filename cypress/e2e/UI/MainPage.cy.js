import { basePage } from "../../Pages/Base";

describe("Main page testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elements).should('be.visible');
    cy.contains(basePage.NAMES.elements).click();
  });
  it("Verify main page content", () => {
    basePage.getHeaderText().should("contain", basePage.NAMES.elements);
    cy.get("#item-0").contains("Text Box").click();
    cy.get('.collapse.show').find("li").its("length").should("eq", 9);
  });
});
