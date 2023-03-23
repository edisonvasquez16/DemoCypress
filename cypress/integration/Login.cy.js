import SiigoLoginPage from '../ui/SiigoLoginPage'
import SeeThatUser from '../ui/SiigoHomePage'

describe('Loging in Siigo cloud page', () => {

  beforeEach('LoginPage can be open', () => {
    SiigoLoginPage
      .visit()
      .validatePage()
  })

  it('User can be login', () => {
    cy.fixture('user.json').then((siigoUser) => {
      SiigoLoginPage
        .enterUserValue(siigoUser.user)
        .enterPasswordValue(siigoUser.password)
        .clickOnLoginButton()
      SeeThatUser.loged(siigoUser.username)
    })
  })

  it('User can be login with command', () => {
    cy.fixture('user.json').then((siigoUser) => {
      cy.loginSiigoPage(siigoUser.user, siigoUser.password)
      SeeThatUser.loged(siigoUser.username)
    })
  })  
  
})

describe('Loging with intercepted 1', () => {

  beforeEach('LoginPage can be open', () => {
    cy.intercept('GET', '/user-settings/Menu/api/v1/menu/loadsettings', {
      fixture : 'loadsettings.json'
    }).as('charge-settings')
  
    SiigoLoginPage
      .visit()
      .validatePage()
  })

  it('User can be login with command', () => {
    cy.fixture('user.json').then((siigoUser) => {
      cy.loginSiigoPage(siigoUser.user, siigoUser.password)
      SeeThatUser.loged(siigoUser.username)
    })
  })  

})

describe('Loging with intercepted 2', () => {

  const loadsettings = {
    "companyKey":"SIIGOAUTOMATIONQAMODIFY 2",
    "modules":[]
}

  beforeEach('LoginPage can be open', () => {
    cy.intercept('GET', '/user-settings/Menu/api/v1/menu/loadsettings', {
      body : loadsettings
    }).as('charge-settings')
  
    SiigoLoginPage
      .visit()
      .validatePage()
  })

  it('User can be login with command', () => {
    cy.fixture('user.json').then((siigoUser) => {
      cy.loginSiigoPage(siigoUser.user, siigoUser.password)
      SeeThatUser.loged(siigoUser.username)
    })
  })  

})