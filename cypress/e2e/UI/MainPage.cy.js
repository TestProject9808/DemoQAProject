import { basePage } from "../../Pages/Base";

describe("Main page testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Verify main page content", () => {
    for (let i = 0; i < 6; i++) {
      cy.contains(basePage.sections[i]).should("be.visible");
      cy.contains(basePage.sections[i]).click();
      basePage.getHeaderText().should("contain", basePage.sections[i]);
      // Check subsections count
      basePage
        .getSubSection()
        .its("length")
        .should("eq", basePage.subSectionsCount[i]);
      // Check page URL
      cy.url().should("include", `/${basePage.sectionURL[i]}`);
      // Check page info
      if (i !== 5) {
        cy.contains(basePage.NAMES.messageSelectSector);
      } else {
        cy.contains(basePage.NAMES.loginButton);
      }
      // Check that only the selected sector has class "Show"
      for (let j = 0; j < 6; j++) {
        if (i !== j) {
          cy.get("div.element-list.collapse")
            .eq(j)
            .should("not.have.class", "show");
        } else {
          basePage.getSectorCollapse().eq(j).should("have.class", "show");
        }
      }

      cy.go("back");
    }
  });
});
