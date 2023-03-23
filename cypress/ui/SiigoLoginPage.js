class SignInPage {

    visit() {
        cy.visit('https://qastaging.siigo.com/');
        return this
    }

    validatePage() {
        cy.contains('Inicio de sesion en Siigo')
    }

    elements = {
        username: () => cy.get("input[name*='UserName']"),
        password: () => cy.get("input[name*='txtPassword']"),
        loginButton: () => cy.get("input[type='submit']")
    }

    enterUserValue(user) {
        this.elements.username()
            .type(user)
        return this
    }

    enterPasswordValue(password) {
        this.elements.password()
            .type(password)
        return this
    }

    clickOnLoginButton() {
        this.elements.loginButton()
            .click()
        return this
    }

}

module.exports = new SignInPage()