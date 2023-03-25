import SiigoLoginPage from '../ui/SiigoLoginPage'
import SeeThatUser from '../ui/SiigoHomePage'

describe('LOGIN IN SIIGO CLOUD PAGE', () => {

  beforeEach('LOGIN CAN BE OPEN', () => {
    SiigoLoginPage
      .visit()
      .validatePage()
  })

  it('USER CAN BE LOGIN', () => {
    cy.fixture('user.json').then((siigoUser) => {
      SiigoLoginPage
        .enterUserValue(siigoUser.user)
        .enterPasswordValue(siigoUser.password)
        .clickOnLoginButton()
      SeeThatUser.loged(siigoUser.username)
    })
  })

  it('USER CAN BE LOGIN WITH COMMAND', () => {
    cy.fixture('user.json').then((siigoUser) => {
      cy.loginSiigoPage(siigoUser.user, siigoUser.password)
      SeeThatUser.loged(siigoUser.username)
    })
  })

})

describe('LOGIN WITH INTERCEPTED 1', () => {

  beforeEach('LOGIN CAN BE OPEN', () => {
    cy.intercept('GET', '/user-settings/Menu/api/v1/menu/loadsettings', {
      fixture: 'loadsettings.json'
    }).as('charge-settings')

    SiigoLoginPage
      .visit()
      .validatePage()
  })

  it('USER CAN BE LOGIN WITH COMMAND', () => {
    cy.fixture('user.json').then((siigoUser) => {
      cy.loginSiigoPage(siigoUser.user, siigoUser.password)
      SeeThatUser.loged(siigoUser.username)
    })
  })

})

describe('LOGIN WITH INTERCEPTED 2', () => {

  const loadsettings = {
    "companyKey": "SIIGOAUTOMATIONQAMODIFY 2",
    "modules": []
  }

  beforeEach('LOGIN PAGE CAN BE OPEN', () => {
    cy.intercept('GET', '/user-settings/Menu/api/v1/menu/loadsettings', {
      body: loadsettings
    }).as('charge-settings')

    SiigoLoginPage
      .visit()
      .validatePage()
  })

  it('USER CAN BE LOGIN WITH COMMAND', () => {
    cy.fixture('user.json').then((siigoUser) => {
      cy.loginSiigoPage(siigoUser.user, siigoUser.password)
      SeeThatUser.loged(siigoUser.username)
    })
  })

})