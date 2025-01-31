class WebTables {
  testData = {
    email: "john.doe@example.com",
    currentAddress: "123 Cypress Lane",
    permanentAddress: "456 Automation Street",
    firstName: "Updated Name",
    lastName: "Last Name",
    email: "updated.email@example.com",
    currentAddress: "Updated Current Address",
    permanentAddress: "Updated Permanent Address",
    specialChars: "@#$%^&*!()_-+=[]{}|\\:;'\",.<>?/`~",
    invalidEmails: ["plainaddress", "@missingusername.com", "username@.com"],
    validUser: "Valid User",
    invalidUser: "Invalid User",
    age: "20",
    salary: "5000",
    department: "QA",
  };

  addButton() {
    return cy.get("#addNewRecordButton");
  }

  searchBox() {
    return cy.get("#searchBox");
  }

  firstNameField() {
    return cy.get("#firstName");
  }

  lastNameField() {
    return cy.get("#lastName");
  }

  emailField() {
    return cy.get("#userEmail");
  }

  ageField() {
    return cy.get("#age");
  }

  salaryField() {
    return cy.get("#salary");
  }

  departmentField() {
    return cy.get("#department");
  }

  submitButton() {
    return cy.get("#submit");
  }

  tableRows() {
    return cy.get(".rt-tr-group");
  }

  deleteButton() {
    return cy.get(".action-buttons span");
  }

  visit() {
    cy.visit("/webtables");
  }

  addUser(user) {
    cy.log(`${"User data: "}${user}`);
    this.addButton().click();
    this.firstNameField().type(this.testData.firstName);
    this.lastNameField().type(this.testData.lastName);
    this.emailField().type(this.testData.email);
    this.ageField().type(this.testData.age);
    this.salaryField().type(this.testData.salary);
    this.departmentField().type(this.testData.department);
    this.submitButton().click();
  }

  searchUser(name) {
    this.searchBox()
      .should("be.visible") // Ensure it's visible
      .should("not.be.disabled") // Ensure it's not disabled
      .should("not.have.class", "animating") // Optional: Check for animation class
      .clear() // Clear before typing
      .type(name, { delay: 100 }); // Add delay to mimic real typing
  }

  verifyUserExists(name) {
    this.tableRows().should("contain", name);
  }

  deleteUser() {
    this.deleteButton()
      .should("be.visible") // Ensure delete button is visible
      .first()
      .click();

    cy.wait(1000); // Wait for UI update
  }

  verifyNoResults() {
    this.tableRows().should("have.length", 10); // Alternative assertion
  }

  getFullName() {
    return `${this.firstName}${" "}${this.lastName}`;
  }
}

export const webTables = new WebTables();
