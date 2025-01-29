// create a class named BasePage, where

class BasePage {
  NAMES = {
    elements: "Elements",
    forms: "Forms",
    alertsFrameWindow: "Alerts, Frame & Windows",
    widgets: "Widgets",
    interactions: "Interactions",
    bookStoreApplication: "Book Store Application",
  };

  LOCATORS = {
    active: "active",
    h1: "h1",
  };

  getHeaderText() {
    return cy.get(".header-text");
  }
}

export const basePage = new BasePage();
