import { webTables } from "../../Pages/WebTables";
describe("DemoQA - Web Tables Tests", () => {
  const testData = Cypress.config.testData;

  beforeEach(() => {
    webTables.visit("/webtables");
  });

  it("Verify Page Elements are Displayed", () => {
    cy.get(webTables.addButton).should("be.visible");
    cy.get(webTables.searchBox).should("be.visible");
  });

  it("Add a New User and Verify It Appears in the Table", () => {
    webTables.addUser(testData.validUser);
    webTables.searchUser(testData.validUser.firstName);
    webTables.verifyUserExists(testData.validUser.firstName);
});

  it("Search for a Nonexistent User and Verify No Results", () => {
    webTables.searchUser("NonexistentUser");
    webTables.verifyNoResults();
  });

  it("Delete a User and Verify It is Removed", () => {
    webTables.addUser(testData.validUser);
    webTables.searchUser(testData.validUser.firstName);
    webTables.deleteUser();
    webTables.verifyNoResults();
  });

  it("Attempt to Add a User with Invalid Data (Should Not Be Added)", () => {
    webTables.addUser(testData.invalidUser);
    webTables.searchUser(testData.invalidUser.firstName);
    webTables.verifyNoResults();
  });

  describe('Check Cypress Config', () => {
    it.only('Logs Cypress env variables', () => {
      console.log("ENV Data:", Cypress.config("env"));
      console.log("Test Data:", Cypress.env("testData"));
    });
  });
});
