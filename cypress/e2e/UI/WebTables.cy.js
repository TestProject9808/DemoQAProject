import { webTables } from "../../Pages/WebTables";
import { basePage } from "../../Pages/Base";
describe("DemoQA - Web Tables Tests", () => {
  const testData = Cypress.config.testData;

  beforeEach(() => {
        cy.visit("/");
        cy.contains(basePage.sections[0]).should("be.visible");
        cy.contains(basePage.sections[0]).click();
        webTables.getWebTablesID().should("contain", webTables.testData.webTables).click();
        
  });

  it("Verify Page Elements are Displayed", () => {
    webTables.addButton().should("be.visible");
    webTables.searchBox().should("be.visible");
  });

  it("Add a New User and Verify It Appears in the Table", () => {
    webTables.addUser(webTables.getFullName());
    webTables.searchUser(webTables.testData.firstName);
    webTables.verifyUserExists(webTables.testData.firstName);
  });

  it("Search for a Nonexistent User and Verify No Results", () => {
    webTables.searchUser("NonexistentUser");
    webTables.verifyNoResults();
  });

  it("Delete a User and Verify It is Removed", () => {
    webTables.addUser(webTables.testData.fullName);
    webTables.searchUser(webTables.testData.firstName);
    webTables.deleteUser();
    webTables.verifyNoResults();
  });

  it("Attempt to Add a User with Invalid Data (Should Not Be Added)", () => {
    webTables.addUser(webTables.testData.invalidUser);
    webTables.searchUser(webTables.testData.invalidUser);
    webTables.verifyNoResults();
  });
});
