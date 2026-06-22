describe('OrangeHRM - Login', () => {
  it('exibe erro ao tentar login com credenciais invalidas', () => {
    cy.visit('/web/index.php/auth/login')
    cy.wait(2000)

    cy.url().should('include', '/auth/login')

    cy.get('input[name="username"]').type('Admin', { delay: 100 })
    cy.wait(2000)

    cy.get('input[name="password"]').type('senhaerrada', { delay: 100, log: false })
    cy.wait(2000)

    cy.get('button[type="submit"]').click()
    cy.wait(2000)

    cy.url().should('include', '/auth/login')
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials')
  })

  it('bloqueia acesso direto a home sem autenticacao', () => {
    cy.visit('/web/index.php/dashboard/index')
    cy.wait(2000)

    cy.url().should('include', '/auth/login')
    cy.wait(2000)

    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.contains('Dashboard').should('not.exist')
  })
})
