import { textBox } from "../../Pages/TextBox";
describe("DemoQA - Text Box Tests", () => {
  const { testData } = Cypress.env();

  beforeEach(() => {
    textBox.visit("/");
    cy.contains("Text Box").click()

  });

  it("Verify Page Elements are Displayed", () => {
    textBox.fullNameField().should("be.visible");
    textBox.emailField().should("be.visible");
    textBox.currentAddressField().should("be.visible");
    textBox.permanentAddressField().should("be.visible");
    textBox.submitButton().should("be.visible");
  });

  it("Input Valid Data and Submit", () => {
    textBox.fillForm(textBox.testData.validData);
    textBox.submitForm();
    textBox.verifyOutput(textBox.testData.validData);
  });

  it("Validate Email Field", () => {
    textBox.testData.invalidEmails.forEach((email) => {
      textBox.emailField().clear().type(email);
      textBox.submitForm();
      textBox.outputEmail().should("not.exist");
    });

    textBox.emailField().clear().type(textBox.testData.validData.email);
    textBox.submitForm();
    textBox.outputEmail().should("contain", textBox.testData.validData.email);
  });

  it("Clear Field and Re-enter Data", () => {
    textBox.fillForm(textBox.testData.validData);
    textBox.fullNameField().clear();
    textBox.emailField().clear();
    textBox.currentAddressField().clear();
    textBox.permanentAddressField().clear();

    textBox.fillForm(textBox.testData.updatedData);
    textBox.submitForm();
    textBox.verifyOutput(textBox.testData.updatedData);
  });

  it("Validate Special Characters in Fields", () => {
    textBox.fullNameField().type(textBox.testData.specialChars);
    textBox.emailField().type(textBox.testData.validData.email);
    textBox.currentAddressField().type(textBox.testData.specialChars);
    textBox.permanentAddressField().type(textBox.testData.specialChars);

    textBox.submitForm();
    textBox.outputName().should("contain", textBox.testData.specialChars);
    textBox.outputCurrentAddress().should(
      "contain",
      textBox.testData.specialChars
    );
    textBox.outputPermanentAddress().should(
      "contain",
      textBox.testData.specialChars
    );
  });
});
