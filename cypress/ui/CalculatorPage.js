class CalculatorPage {

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


    elements = {
        //number: () => cy.get("button:contains('${number}')"),
        addOption: () => cy.get('#add'),
        substractOption: () => cy.get("button[name='minus']"),
        multiplyOption: () => cy.xpath("//button[@class='Button Multiply']"),
        divOption: () => cy.xpath("//button[contains(text(),'/')]"),
        calcOption: () => cy.get("button[name='equal']"),
        result: () => cy.get('.DisplayText', { timeout: 10000 })
    }

    selectNumber(value) {
        for (var i = 0; i < value.length; i++)
            cy.xpath("//button[contains(text(),'" + value.charAt(i) + "')]")
                .click()
        cy.wait(400)
        return this
    }

    selectAddOption() {
        this.elements.addOption()
            .click()
        return this
    }

    selectSubstractOption() {
        this.elements.substractOption()
            .click()
        return this
    }

    selectMultiplyAddOption() {
        this.elements.multiplyOption()
            .click()
        return this
    }

    selectDivOption() {
        this.elements.divOption()
            .click()
        return this
    }

    selectCalculateOption() {
        this.elements.calcOption()
            .click()
        return this
    }

    selectCalculateOptionFor(index) {
        if (!(index % 2) && index > 1)
            this.elements.calcOption()
                .click()
        return this
    }

    getResultValue() {
        return this.elements.result()
            .invoke('val')
    }

}

module.exports = new CalculatorPage();