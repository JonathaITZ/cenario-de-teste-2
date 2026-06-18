describe('OrangeHRM - Cadastra usuario', () => {
  it('cadastra Personal Details, busca e deleta o funcionario', () => {
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]', { timeout: 15000 }).should('be.visible').type('Admin')
    cy.get('input[name="password"]').type('admin123', { log: false })
    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/auth/login')

    cy.visit('/web/index.php/pim/addEmployee')

    cy.get('input[name="firstName"]').type('Dantas', { force: true })
    cy.wait(2000)

    cy.get('input[name="lastName"]').type('qa', { force: true })
    cy.wait(2000)

    cy.get('button[type="submit"]').contains(/Save|Salvar/).click()

    cy.url().should('include', '/pim/viewPersonalDetails/empNumber/')
    cy.contains('h6', 'Personal Details').should('be.visible')

    cy.get('input[name="middleName"]').scrollIntoView().type('{selectall}{backspace}', { force: true })
    cy.wait(2000)

    cy.get('button[type="submit"]').contains(/Save|Salvar/).click()
    cy.contains(/Successfully Updated|Atualizado com sucesso/).should('be.visible')

    // Busca e deleta o funcionario cadastrado (limpeza do teste)
    cy.visit('/web/index.php/pim/viewEmployeeList')

    cy.url().should('include', '/pim/viewEmployeeList')
    cy.contains('h5', 'Employee Information').should('be.visible')

    cy.get('input[placeholder="Type for hints..."]').first().type('Dantas qa')
    cy.get('.oxd-autocomplete-dropdown').contains('.oxd-autocomplete-option', 'Dantas qa').click()
    cy.get('button[type="submit"]').contains(/Search|Pesquisar/).click()

    cy.contains('.oxd-table-body .oxd-table-cell', 'Dantas').should('be.visible')

    cy.contains('.oxd-table-body .oxd-table-row', 'Dantas')
      .find('.oxd-icon-button')
      .last()
      .click()

    cy.contains('Are you Sure?').should('be.visible')
    cy.contains('.oxd-button--label-danger', 'Delete').click()

    cy.get('.oxd-text--toast-message', { timeout: 10000 }).should('be.visible')
  })
})
