describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
  cy.visit('./src/index.html')  
})

  it('verifica o título da aplicação', () => {
    
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('Preenche os campos obrigatórios e envia formulário', () =>{
    cy.get('#firstName')
      .should('be.visible')
      .type('Felipe')
      .should('have.value', 'Felipe')

    cy.get('#lastName')
      .should('be.visible')
      .type('Coelho')
      .should('have.value', 'Coelho') 

      cy.get('#email')
      .should('be.visible')
      .type('felipe@gmail.com')
      .should('have.value', 'felipe@gmail.com')

      cy.get('#phone')
      .should('be.visible')
      .type('62982612271')
      .should('have.value', '62982612271')

      cy.get('#open-text-area')
      .should('be.visible')
      .type('Sugestão: melhore os atendimentos')
      .should('have.value', 'Sugestão: melhore os atendimentos')

      cy.get('button[type="submit"]')
        .click()

      cy.get('.success')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
  })
})
