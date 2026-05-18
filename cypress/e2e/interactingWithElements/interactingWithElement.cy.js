describe('My First Test', () => {

    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/actions");
    });

    it("populate email field", () => { 
      //  cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("input[id=email1]").type("henritest@gmail.com");
    });

    it("find and click", () =>{ 
      //  cy.visit("https://example.cypress.io/commands/actions"); 
        cy.get(".action-labels").find("span").eq(1 ).click();
        cy.get('div[role="tooltip"]').should("have.text","clicked");
     });
});