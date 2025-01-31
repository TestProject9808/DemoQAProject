// create a class named BasePage, where
class BasePage {
  NAMES = {
    messageSelectSector: "Please select an item from left to start practice.",
    loginButton: "Login",
  };

  sections = [
    "Elements",
    "Forms",
    "Alerts, Frame & Windows",
    "Widgets",
    "Interactions",
    "Book Store Application",
  ];

  subSectionsCount = [9, 1, 5, 9, 5, 4];

  sectionURL = [
    "elements",
    "forms",
    "alertsWindows",
    "widgets",
    "interaction",
    "books",
  ];

  LOCATORS = {
    active: "active",
    h1: "h1",
    svg: "svg",
  };

  getSubSection() {
    return cy.get(".collapse.show").find("li");
  }

  getHeaderText() {
    return cy.get(".header-text");
  }

  getSectorCollapse() {
    return cy.get("div.element-list.collapse");
  }
}

export const basePage = new BasePage();
