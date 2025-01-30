import { radioButton } from "../../Pages/RadioButton";

describe("DemoQA - Radio Button Tests", () => {
  beforeEach(() => {
    radioButton.visit();
  });

  it("Verify Selecting 'Yes' and 'Impressive' Updates Output Correctly", () => {
    radioButton.selectYes();
    radioButton.verifyResult("Yes");

    radioButton.selectImpressive();
    radioButton.verifyResult("Impressive");
  });

  it("Verify 'No' Option is Disabled", () => {
    cy.get('input[id="noRadio"]').should("be.disabled");
  });
  
});
