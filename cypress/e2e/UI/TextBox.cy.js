import { textBox } from "../../Pages/TextBox";
describe("DemoQA - Text Box Tests", () => {
  const { testData } = Cypress.env();

  beforeEach(() => {
    textBox.visit("/");
  });

  it("1. Verify Page Elements are Displayed", () => {
    cy.get(textBox.fullNameField).should("be.visible");
    cy.get(textBox.emailField).should("be.visible");
    cy.get(textBox.currentAddressField).should("be.visible");
    cy.get(textBox.permanentAddressField).should("be.visible");
    cy.get(textBox.submitButton).should("be.visible");
  });

  it("2. Input Valid Data and Submit", () => {
    textBox.fillForm(testData.validData);
    textBox.submitForm();
    textBox.verifyOutput(testData.validData);
  });

  it("4. Validate Email Field", () => {
    testData.invalidEmails.forEach((email) => {
      cy.get(textBox.emailField).clear().type(email);
      textBox.submitForm();
      cy.get(textBox.outputEmail).should("not.exist");
    });

    // Test with a valid email
    cy.get(textBox.emailField).clear().type(testData.validData.email);
    textBox.submitForm();
    cy.get(textBox.outputEmail).should("contain", testData.validData.email);
  });

  it("6. Clear Field and Re-enter Data", () => {
    textBox.fillForm(testData.validData);
    cy.get(textBox.fullNameField).clear();
    cy.get(textBox.emailField).clear();
    cy.get(textBox.currentAddressField).clear();
    cy.get(textBox.permanentAddressField).clear();

    textBox.fillForm(testData.updatedData);
    textBox.submitForm();
    textBox.verifyOutput(testData.updatedData);
  });

  it("7. Validate Special Characters in Fields", () => {
    cy.get(textBox.fullNameField).type(testData.specialChars);
    cy.get(textBox.emailField).type(testData.validData.email);
    cy.get(textBox.currentAddressField).type(testData.specialChars);
    cy.get(textBox.permanentAddressField).type(testData.specialChars);

    textBox.submitForm();
    cy.get(textBox.outputName).should("contain", testData.specialChars);
    cy.get(textBox.outputCurrentAddress).should(
      "contain",
      testData.specialChars
    );
    cy.get(textBox.outputPermanentAddress).should(
      "contain",
      testData.specialChars
    );
  });
});
