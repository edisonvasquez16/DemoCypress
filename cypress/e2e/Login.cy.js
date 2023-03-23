import SiigoLoginPage from '../ui/SiigoLoginPage'
import SeeThatUser from '../questions/SeeThatUser'

describe('Loging in Siigo cloud page', () => {

  beforeEach('LoginPage can be open', () => {
    SiigoLoginPage
      .instance()
      .visit()
      .validatePage()
  })

  it('User can be login', () => {
    cy.fixture('user.json').then((siigoUser) => {
      SiigoLoginPage.instance()
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