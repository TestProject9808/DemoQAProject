import { basePage } from "../../Pages/Base";

describe("Main page testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elements).click();
  });
  it("Verify main page content", () => {
    cy.get(".header-text").should("contain", basePage.NAMES.elements);
    cy.get("#item-0").contains("Text Box").click();

   //cy.get(".menu-list").find("li").its("length").should("eq", 9);
  });
});
