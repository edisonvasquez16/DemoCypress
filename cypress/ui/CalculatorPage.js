class CalculatorPage {

    static instance() {
        return new CalculatorPage()
    }

    visit() {
        cy.visit('http://localhost/');
        return this
    }

    validatePage() {
        cy.contains('Simple Calculator')
        cy.title().should('eq', 'Siigo Calculator')
        cy.url().should('eq', 'http://localhost/')
        cy.location('protocol').should('contain', 'http')
        cy.location('hostname').should('eq', 'localhost')
        cy.location('pathname').should('eq', '/')
    }

    selectNumber(value) {
        for (var i = 0; i < value.length; i++) 
            cy.xpath("//button[contains(text(),'" + value.charAt(i) + "')]")
                .click()
        return this
    }

    selectAddOption() {
        cy.get('#add')
            .click()
        return this
    }

    selectSubstractOption() {
        cy.get("button[name='minus']")
            .click()
        return this
    }

    selectMultiplyAddOption() {
        cy.xpath("//button[@class='Button Multiply']")
            .click()
        return this
    }

    selectDivOption() {
        cy.xpath("//button[contains(text(),'/')]")
            .click()
        return this
    }

    selectCalculateOption() {
        cy.get("button[name='equal']")
            .click()
        return this
    }

    selectCalculateOptionFor(index) {
        if (!(index % 2) && index > 1)
            cy.get("button[name='equal']")
                .click()
        return this
    }

}

export default CalculatorPage