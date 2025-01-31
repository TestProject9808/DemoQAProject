
// create a class named Dinamic Properties

class DinamicProperties {
    NAMES = {
      url: "dynamic-properties",
      dinamicProperties: "Dynamic Properties",
      title: "Dynamic Properties",
      decription: "This text has random Id",
      btnWillEnabled: "Will enable 5 seconds",
      btnColorChange: "Color Change",
      btnVisibleAfter: "Visible After 5 Seconds",
    };
  
    LOCATORS = {
      expandAll: '',
    };

    COLORS = {
        red: "rgb(220, 53, 69)",
        white: "rgb(255, 255, 255)",
    }

    getDinamicPropertiesID() {
        return cy.get("#item-8");
      };

     getBtnWillEnabled() {
        return cy.get("#enableAfter");
     }

     getBtnColorChange() {
        return cy.get("#colorChange");
     }

     getBtnVisibleAfter() {
        return ("#visibleAfter");
     }  
  }
  
  export const dinamicProperties = new DinamicProperties();
  
