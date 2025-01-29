const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://demoqa.com",
  },
  env: {
    testData: {
      validData: {
        fullName: "John Doe",
        email: "john.doe@example.com",
        currentAddress: "123 Cypress Lane",
        permanentAddress: "456 Automation Street",
      },
      updatedData: {
        fullName: "Updated Name",
        email: "updated.email@example.com",
        currentAddress: "Updated Current Address",
        permanentAddress: "Updated Permanent Address",
      },
      specialChars: "@#$%^&*!()_-+=[]{}|\\:;'\",.<>?/`~",
      invalidEmails: ["plainaddress", "@missingusername.com", "username@.com"],
    },
  },
});
