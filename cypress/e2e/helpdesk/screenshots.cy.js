const getCurrentDateTime = require('../../helper/helpers');

describe('Screenshot Test', () => {
    beforeEach(() => {
        cy.visit('www.google.com');
    });
    
    it('should take a screenshot', () => {
        const dateTimeObject = new Date();
        const currentFormattedDateTime = getCurrentDateTime();
        cy.wait(1000);
        cy.screenshot(currentFormattedDateTime);
    });

    
});