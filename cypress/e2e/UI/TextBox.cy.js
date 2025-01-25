import { basePage } from "../../Pages/Base";
import { textBox } from "../../Pages/TextBox";

describe("Main page testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(basePage.NAMES.elements).click();
  });
  it("test", () => {
    cy.get(".header-text").should("contain", basePage.NAMES.elements);
    cy.get("#item-0").contains("Text Box").click();
    
    //cy.get(".menu-list").find("li").should("have.length", 9);
  });
});
