describe('OrangeHRM - Login', () => {
  it('realiza login com credenciais válidas', () => {
    // Caminho relativo: o Cypress junta com baseUrl definida em cypress.config.js
    cy.visit('/web/index.php/auth/login')

    // Garante que ainda estamos na tela de login antes de preencher (evita testar no lugar errado)
    // include = verifica se a URL contém o texto, sem exigir match exato da URL completa
    cy.url().should('include', '/auth/login')

    // Seletor por atributo name: estável quando o id ou a classe mudam no CSS
    cy.get('input[name="username"]').type('Admin')

    // { log: false } evita que a senha apareça nos logs do Cypress (boa prática em testes reais)
    cy.get('input[name="password"]').type('admin123', { log: false })

    // type="submit" identifica o botão que envia o formulário de login
    cy.get('button[type="submit"]').click()

    // Confirma que saiu da tela de login, sem depender do nome da próxima página
    cy.url().should('not.include', '/auth/login')

    // cy.contains busca por texto visível na página (útil quando não há id/classe única)
    // be.visible = elemento existe no DOM E está visível (não está com display:none ou oculto)
    cy.contains('Dashboard').should('be.visible')
  })
})
