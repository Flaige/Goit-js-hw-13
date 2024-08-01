describe("User can visit Goit page", () => {
    beforeEach("Go to page", () => {
        cy.visit("https://www.edu.goit.global/account/login")
    });


    it("first log in and log out", () => {
        cy.get('#user_email').type("user888@gmail.com");
        cy.get('#user_password').type("1234567890");
        cy.get('button[type="submit"]').click();
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(12) > .next-bve2vl').click();
    })
})