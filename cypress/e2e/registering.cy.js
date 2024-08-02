describe('registering feature', () => {
  beforeEach("load fixture", function () {
    cy.fixture("credentials").then((data)=>{
        this.data=data;
    })
    cy.visit('/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})
  
  it('sign in', () => {
    cy.get('[data-qa="signup-name"]').type("Raphael Simonnet")
    cy.get('[data-qa="signup-email"]').type(`${Date.now()}@aharotest.com`)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('.login-form').should('be.visible')

  })
  it('log in', function () {
    cy.get('[data-qa="login-email"]').type(this.data.email)
    cy.get('[data-qa="login-password"]').type(this.data.password)
    cy.get('[data-qa="login-button"]').click()
    cy.get('.shop-menu').contains("Logout")
  })

  it('log in via command', function () {
    cy.login(this.data.email, this.data.password)
  })


})