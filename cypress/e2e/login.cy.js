describe('Login', () => {

  it('successful login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('You logged into a secure area!').should('be.visible')
  })

  it('failed login shows error', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('wronguser')
    cy.get('#password').type('wrongpassword')
    cy.get('button[type="submit"]').click()
    cy.contains('Your username is invalid!').should('be.visible')
  })

})