class TextBox {
  //change the locatoors 
  fullNameField() {
    return cy.get("#userName");
  }

  emailField() {
    return cy.get("#userEmail");
  }

  currentAddressField() {
    return cy.get("#currentAddress");
  }

  permanentAddressField() {
    return cy.get("#permanentAddress");
  }

  submitButton() {
    return cy.get("#submit");
  }

  outputName() {
    return cy.get("#output #name");
  }

  outputEmail() {
    return cy.get("#output #email");
  }

  outputCurrentAddress() {
    return cy.get("#output #currentAddress");
  }

  outputPermanentAddress() {
    return cy.get("#output #permanentAddress");
  }

  visit() {
    cy.visit("/text-box");
  }

  fillForm(data) {
    this.fullNameField().clear().type(data.fullName);
    this.emailField().clear().type(data.email);
    this.currentAddressField().clear().type(data.currentAddress);
    this.permanentAddressField().clear().type(data.permanentAddress);
  }

  submitForm() {
    this.submitButton().click();
  }

  verifyOutput(data) {
    this.outputName().should("contain", data.fullName);
    this.outputEmail().should("contain", data.email);
    this.outputCurrentAddress().should("contain", data.currentAddress);
    this.outputPermanentAddress().should(
      "contain",
      data.permanentAddress
    );
  }
}
export const textBox = new TextBox();
