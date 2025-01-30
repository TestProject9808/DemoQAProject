import { basePage } from "../../Pages/Base";




cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      // Optionally, you can assert the URL or action here
      expect(url).to.include('your-url');  // Make sure the URL matches what you expect
    });
  });
  
  // Click the button that opens the new tab
  cy.get('button').click();
  
  // Check that window.open was called
  cy.window().its('open').should('be.called');

describe ("", ()=> {})

  