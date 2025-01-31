
// create a class named Dynamic Properties

class DynamicProperties {
    NAMES = {
      url: "dynamic-properties",
      dynamicProperties: "Dynamic Properties",
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

    getDynamicPropertiesID() {
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
  
  export const dynamicProperties = new DynamicProperties();
  
