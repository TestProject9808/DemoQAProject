class RadioButton {
    visit() {
      cy.visit("/radio-button");
    }
  
    get yesOption() {
      return 'label[for="yesRadio"]';
    }
  
    get impressiveOption() {
      return 'label[for="impressiveRadio"]';
    }
  
    get noOption() {
      return 'label[for="noRadio"]';
    }
  
    selectYes() {
      cy.get(this.yesOption).click();
    }
  
    selectImpressive() {
      cy.get(this.impressiveOption).click();
    }
  
    verifyResult(option) {
      cy.get(".mt-3").should("contain", option);
    }
  }
  
  export const radioButton = new RadioButton();
  