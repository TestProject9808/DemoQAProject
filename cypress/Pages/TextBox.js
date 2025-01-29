class TextBox {
  get fullNameField() {
    return "#userName";
  }

  get emailField() {
    return "#userEmail";
  }

  get currentAddressField() {
    return "#currentAddress";
  }

  get permanentAddressField() {
    return "#permanentAddress";
  }

  get submitButton() {
    return "#submit";
  }

  get outputName() {
    return "#output #name";
  }

  get outputEmail() {
    return "#output #email";
  }

  get outputCurrentAddress() {
    return "#output #currentAddress";
  }

  get outputPermanentAddress() {
    return "#output #permanentAddress";
  }

  visit() {
    cy.visit("/text-box");
  }

  fillForm(data) {
    cy.get(this.fullNameField).clear().type(data.fullName);
    cy.get(this.emailField).clear().type(data.email);
    cy.get(this.currentAddressField).clear().type(data.currentAddress);
    cy.get(this.permanentAddressField).clear().type(data.permanentAddress);
  }

  submitForm() {
    cy.get(this.submitButton).click();
  }

  verifyOutput(data) {
    cy.get(this.outputName).should("contain", data.fullName);
    cy.get(this.outputEmail).should("contain", data.email);
    cy.get(this.outputCurrentAddress).should("contain", data.currentAddress);
    cy.get(this.outputPermanentAddress).should(
      "contain",
      data.permanentAddress
    );
  }
}
export const textBox = new TextBox();
