import { radioButton } from "../../Pages/RadioButton";

describe("DemoQA - Radio Button Tests", () => {
  beforeEach(() => {
    radioButton.visit();
  });

  it("1. Verify Selecting 'Yes' and 'Impressive' Updates Output Correctly", () => {
    // Select 'Yes' and verify
    radioButton.selectYes();
    radioButton.verifyResult("Yes");

    // Select 'Impressive' and verify
    radioButton.selectImpressive();
    radioButton.verifyResult("Impressive");
  });

  it("Verify 'No' Option is Disabled", () => {
    cy.get('input[id="noRadio"]').should("be.disabled");
  });
  
});
