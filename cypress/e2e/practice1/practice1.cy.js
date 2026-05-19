///  <reference types="cypress" /> 

beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("input[id=user-name]").type("standard_user");
    cy.get("input[id=password]").type("secret_sauce");
    cy.get("input[id=login-button]").click();
});
describe('My First Practice', () => {
    it("Login", () => {
        /* cy.visit("https://www.saucedemo.com/");
        cy.get("input[id=user-name]").type("standard_user");
        cy.get("input[id=password]").type("secret_sauce");
        cy.get("input[id=login-button]").click();
 */
    });
    it("Check Products text on homepage", () => {
    cy.get('body').should('contain', 'Products');
    });
    it("Add to Cart", () => {
        cy.get(".inventory_list").last().find('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get(".inventory_list").last().find('button[id="remove-test.allthethings()-t-shirt-(red)"]').should("have.text","Remove");
        cy.get(".inventory_list").last().find('button[id="remove-test.allthethings()-t-shirt-(red)"]').should("not.contain","Add to cart");
});
    it("Go to Cart", () => {
        cy.get(".inventory_list").last().find('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click(); 
        cy.get(".shopping_cart_link").click();
        cy.get(".cart_list").should("contain","Test.allTheThings() T-Shirt (Red)");
    });
});
