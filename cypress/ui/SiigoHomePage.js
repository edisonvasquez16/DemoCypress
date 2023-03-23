class SeeThatUser {

    elements = {
        companyName: () => cy.get('a#HeaderCompanyName')
    }

    loged(username) {
        this.elements.companyName()
            .should('contain', username)
            .and('have.css', 'title', username)
    }
}

module.exports = new SeeThatUser()