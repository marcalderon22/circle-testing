

describe('Test Click', () => {
    beforeEach(() => {
        cy.visit('www.google.com');
    });
    
    it('click and search', () => {
        cy.get("#APjFqb").click();
        cy.get("#APjFqb").type("muscle points costa rica");
        cy.wait(1000);
        cy.get(".gNO89b").first().click();
        cy.wait(5000);
        cy.contains('.LC20lb.MBeuO.DKV0Md', 'Muscle Points').click();

        cy.wait(5000);

        cy.origin('www.musclepoints.com', () => {
            cy.get('h1.heading').first().should('have.text', 'Not Found');
        });

       

    });

    
});
