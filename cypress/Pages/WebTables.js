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
    cy.get(this.searchBox)
      .should("be.visible") // Ensure it's visible
      .should("not.be.disabled") // Ensure it's not disabled
      .should("not.have.class", "animating") // Optional: Check for animation class
      .clear() // Clear before typing
      .type(name, { delay: 100 }); // Add delay to mimic real typing
}

  verifyUserExists(name) {
    cy.get(this.tableRows).should("contain", name);
  }

  deleteUser() {
    cy.get(this.deleteButton)
      .should("be.visible") // Ensure delete button is visible
      .first()
      .click();
    
    cy.wait(1000); // Wait for UI update
}


verifyNoResults() {
  cy.wait(1000); // Wait before checking
  cy.get(this.tableRows).should("have.length", 0); // Alternative assertion
}
}

export const webTables = new WebTables();
