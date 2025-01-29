class WebTables {
  get addButton() {
    return "#addNewRecordButton";
  }

  get searchBox() {
    return "#searchBox";
  }

  get firstNameField() {
    return "#firstName";
  }

  get lastNameField() {
    return "#lastName";
  }

  get emailField() {
    return "#userEmail";
  }

  get ageField() {
    return "#age";
  }

  get salaryField() {
    return "#salary";
  }

  get departmentField() {
    return "#department";
  }

  get submitButton() {
    return "#submit";
  }

  get tableRows() {
    return ".rt-tr-group";
  }

  get deleteButton() {
    return ".action-buttons span";
  }

  visit() {
    cy.visit("/webtables");
  }

  addUser(user) {
    console.log("User data:", user);
    cy.get(this.addButton).click();
    cy.get(this.firstNameField).type(user.firstName);
    cy.get(this.lastNameField).type(user.lastName);
    cy.get(this.emailField).type(user.email);
    cy.get(this.ageField).type(user.age);
    cy.get(this.salaryField).type(user.salary);
    cy.get(this.departmentField).type(user.department);
    cy.get(this.submitButton).click();
  }

  searchUser(name) {
    cy.get(this.searchBox).type(name);
  }

  verifyUserExists(name) {
    cy.get(this.tableRows).should("contain", name);
  }

  deleteUser() {
    cy.get(this.deleteButton).first().click();
  }

  verifyNoResults() {
    cy.wait(1000);
    cy.get(this.tableRows).should('not.exist');
}
}

export const webTables = new WebTables();
