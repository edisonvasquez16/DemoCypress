class SeeThatUser {

    static loged(username) {
        cy.get('a#HeaderCompanyName')
            .should('contain', username)
    }
}

export default SeeThatUser