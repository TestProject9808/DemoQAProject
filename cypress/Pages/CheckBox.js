// create a class named CheckBox

class CheckBox {
  NAMES = {
    url: "checkbox",
    checkBox: "Check Box",
    title: "Check Box",
    messageForSelected: "You have selected :",
    messageForSelectedCheckboxes: "home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile",
  };

  LOCATORS = {
    expandAll: 'button[aria-label="Expand all"]',
  };

  getCheckboxID() {
    return cy.get("#item-1");
  };

  getTreeNodeHome () {
    return cy.get("#tree-node-home");
  };

}

export const checkBox = new CheckBox();
