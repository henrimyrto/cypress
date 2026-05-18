// <reference types="cypress" />   
describe('My First Test', () => {
    it("Visit Cypress website and checks the title", () => { 
        cy.visit("https://example.cypress.io/");
        cy.title().should('eq', 'Cypress.io: Kitchen Sink');
    });
});