class SignInPage {

    static instance() {
        return new SignInPage()
    }

    visit() {
        cy.visit('https://qastaging.siigo.com/');
        return this
    }

    validatePage() {
        cy.contains('Inicio de sesion en Siigo')
    }

    enterUserValue(user) {
        cy.get("input[name*='UserName']")
            .type(user)
        return this
    }

    enterPasswordValue(password) {
        cy.get("input[name*='txtPassword']")
            .type(password)
        return this
    }

    clickOnLoginButton() {
        cy.get("input[type='submit']")
            .click()
        return this
    }

}

export default SignInPage