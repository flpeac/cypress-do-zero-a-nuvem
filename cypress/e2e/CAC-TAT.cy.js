describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('Preenche os campos obrigatórios e envia formulário', () => {
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
      .type('O incentivo ao avanço tecnológico, assim como a determinação clara de objetivos talvez venha a ressaltar a relatividade dos modos de operação convencionais.', { delay: 0 })
      .should('have.value', 'O incentivo ao avanço tecnológico, assim como a determinação clara de objetivos talvez venha a ressaltar a relatividade dos modos de operação convencionais.')

    cy.contains('button', 'Enviar')
      .click()


    cy.get('.success')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
  })

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    cy.get('#firstName')
      .should('be.visible')
      .type('Felipe')
    //.should('have.value', 'Felipe')

    cy.get('#lastName')
      .should('be.visible')
      .type('Coelho')
    //.should('have.value', 'Coelho') 

    cy.get('#email')
      .should('be.visible')
      .type('felipe.gmail.com')
    //.should('have.value', 'felipe.gmail.com')

    cy.get('#phone')
      .should('be.visible')
      .type('62982612271')
    //.should('have.value', '62982612271')

    cy.get('#open-text-area')
      .should('be.visible')
      .type('O incentivo ao avanço tecnológico, assim como a determinação clara de objetivos talvez venha a ressaltar a relatividade dos modos de operação convencionais.', { delay: 0 })
    //.should('have.value', 'O incentivo ao avanço tecnológico, assim como a determinação clara de objetivos talvez venha a ressaltar a relatividade dos modos de operação convencionais.')

    cy.contains('button', 'Enviar')
      .click()



    cy.get('.error')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')

  })

  it('Validar campo telefone', () => {
    cy.get('#phone')
      .type('asdfg')
      .should('have.value', '')
  })

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulári', () => {
    cy.get('#firstName')
      .should('be.visible')
      .type('Felipe')

    cy.get('#firstName')
      .should('have.value', 'Felipe')

    cy.get('#lastName')
      .should('be.visible')
      .type('Coelho')

    cy.get('#lastName')
      .should('have.value', 'Coelho')

    cy.get('#email')
      .should('be.visible')
      .type('felipe@gmail.com')

    cy.get('#email')
      .should('have.value', 'felipe@gmail.com')

    cy.get('#phone-checkbox')
      .click()

    cy.get('#open-text-area')
      .should('be.visible')
      .type('O incentivo ao avanço tecnológico, assim como a determinação clara de objetivos talvez venha a ressaltar a relatividade dos modos de operação convencionais.', { delay: 0 })
    //.should('have.value', 'O incentivo ao avanço tecnológico, assim como a determinação clara de objetivos talvez venha a ressaltar a relatividade dos modos de operação convencionais.')

    cy.contains('button', 'Enviar')
      .click()

    cy.get('.error')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
  })

  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .should('be.visible')
      .type('Felipe')

    cy.get('#firstName')
      .should('have.value', 'Felipe')

    cy.get('#lastName')
      .should('be.visible')
      .type('Coelho')

    cy.get('#lastName')
      .should('have.value', 'Coelho')

    cy.get('#email')
      .should('be.visible')
      .type('felipe@gmail.com')

    cy.get('#email')
      .should('have.value', 'felipe@gmail.com')


    cy.get('#phone')
      .should('be.visible')
      .type('62982612271')

    cy.get('#phone')
      .should('have.value', '62982612271')

    cy.get('#firstName')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .clear()
      .should('have.value', '')
  })


  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

    cy.contains('button', 'Enviar')
      .click()

    cy.get('.error')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
  })

  it('Envia formulário com sucesso usando comando customizado', () => {

    cy.fillMandatoryFieldsAndSubmit()

    //cy.PreencherCamposcomObjeto({lastName: 'Coelho', firstName: 'Marina', email: 'marina@gmail.com', phone: '62698542267', text: 'testestetstetsttststetsetset'})
    //cy.PreencherCamposcomObjetoElegante({ lastName: 'Coelho', firstName: 'Marina', email: 'marina@gmail.com', phone: '62698542267', text: 'testestetstetsttststetsetset' })
  })

   it.only('Seleciona um produto (YouTube) por seu texto', () => {

    cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
  })
  

  it('Seleciona um produto (Mentoria) por seu valor', () => {

    cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
  })
 

  it('Seleciona um produto (Blog) por seu índice', () => {

    cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
  })

})
