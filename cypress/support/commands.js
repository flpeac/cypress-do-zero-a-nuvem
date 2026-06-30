// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {firstName: 'John', lastName: 'Snow', email: 'John@winterfell.com', phone: '62982612271', text: 'Teste.'}) => {
    cy.get('#firstName')
        .should('be.visible')
        .type(data.firstName)

    cy.get('#lastName')
        .should('be.visible')
        .type(data.lastName)


    cy.get('#email')
        .should('be.visible')
        .type(data.email)


    cy.get('#phone')
        .should('be.visible')
        .type(data.phone)


    
    
    cy.get('#open-text-area')
        .should('be.visible')
        .type(data.text, { delay: 0 })


    cy.get('button[type="submit"]')
        .click()


    cy.get('.success')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
})

Cypress.Commands.add('PreencherCamposcomObjeto', (user) => {
    cy.get('#firstName')
        .should('be.visible')
        .type(user.firstName)

    cy.get('#lastName')
        .should('be.visible')
        .type(user.lastName)


    cy.get('#email')
        .should('be.visible')
        .type(user.email)


    cy.get('#phone')
        .should('be.visible')
        .type(user.phone)


    cy.get('#open-text-area')
        .should('be.visible')
        .type(user.text, { delay: 0 })


    cy.get('button[type="submit"]')
        .click()


    cy.get('.success')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
})

Cypress.Commands.add('PreencherCamposcomObjetoElegante', (
    { firstName, lastName, email, phone, text }
) => {
    cy.get('#firstName')
        .should('be.visible')
        .type(firstName)

    cy.get('#lastName')
        .should('be.visible')
        .type(lastName)


    cy.get('#email')
        .should('be.visible')
        .type(email)


    cy.get('#phone')
        .should('be.visible')
        .type(phone)


    cy.get('#open-text-area')
        .should('be.visible')
        .type(text, { delay: 0 })


    cy.contains('button', 'Enviar')
        .click()


    cy.get('.success')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
})
