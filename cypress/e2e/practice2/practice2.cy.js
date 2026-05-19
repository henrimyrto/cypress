///  <reference types="cypress" />

describe('My Second Practice', () => {

it ("Practice2", () => {
    // login
    cy.visit("https://www.saucedemo.com/");
     cy.get("input[id=user-name]").type("standard_user");
    cy.get("input[id=password]").type("secret_sauce");
    cy.get("input[id=login-button]").click();

    // add to cart
    cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
     cy.get("[data-test=add-to-cart-sauce-labs-bike-light]").click();

     //cart item number
      //  cy.get(".shopping_cart_badge").should("have.text","2");

        cy.get("[class=shopping_cart_badge]").then((shoppingCartIcon) => {
            const badgeText = shoppingCartIcon.text();
            expect(badgeText).to.equal("2");
        });

        //reset app state
        cy.get("#react-burger-menu-btn").click();
        cy.get("#reset_sidebar_link").click();

        // cart item number should be 0
        cy.get(".shopping_cart_badge").should("not.exist");

        //sort from low to high
        cy.get(".product_sort_container").select("Price (low to high)");
        cy.get(".inventory_item_price").first().should("have.text","$7.99");

        //reload the page
        cy.reload();

        //recheck the shopping cart badge
        cy.get(".shopping_cart_badge").should("not.exist");
});
});


