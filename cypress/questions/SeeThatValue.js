class SeeThatValue {

    static equals(value) {
        cy.get('.DisplayText', {timeout:10000})
            .invoke('val')
            .should('contain', value)
    }
}

export default SeeThatValue