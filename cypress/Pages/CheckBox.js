// create a class named CheckBox

class CheckBox {
  NAMES = {
    url: "checkbox",
    checkBox: "Check Box",
    title: "Check Box",
    messageForSelected: "You have selected :homedesktopnotescommands",
    home: "Home",
    angular: "Angular",
  };

  LOCATORS = {
    expandAll: 'button[aria-label="Expand all"]',
    collapseAll: 'button[aria-label="Collapse all"]',
    leafNode: "li.rct-node.rct-node-leaf",
    checked: "rct-icon-check",
    unchecked: "rct-icon-uncheck",
    openedToggle: "rct-icon-expand-open",
    closedToggle: "rct-icon-expand-close",
    rctIcon: ".rct-icon",
  };

  getCheckboxID() {
    return cy.get("#item-1");
  }

  getTreeNodeHome() {
    return cy.get("#tree-node-home");
  }

  getLeaf() {
    return cy.get("li.rct-node.rct-node-leaf").find(".rct-checkbox").get("svg");
  }

  getResultMessage() {
    return cy.get("#result");
  }

  getToggle() {
    return cy.get("#tree-node").get('button[aria-label="Toggle"]');
  }

  getFirtsLevelParents() {
    return cy
      .get("li.rct-node.rct-node-parent.rct-node-expanded")
      .get("li.rct-node-collapsed");
  }
}

export const checkBox = new CheckBox();
