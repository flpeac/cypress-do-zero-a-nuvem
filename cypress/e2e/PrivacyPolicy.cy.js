describe('Política de Privacidade', () => {
    beforeEach(() => {
        cy.visit('./src/privacy.html')
    })

    it('Verifica título da aplicação', () => {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
    })

    it('Verifica título da página', () => {
        cy.contains('h1', 'CAC TAT - Política de Privacidade')

    })

    it('Verifica descrição', () => {
        cy.get('#white-background > :nth-child(1)')
            .should('be.visible')
            .contains('Não salvamos dados submetidos no formulário da aplicação CAC TAT.')

        cy.get('#white-background > :nth-child(2)')
            .should('be.visible')
            .contains('Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.')

        cy.get('#white-background > :nth-child(3)')
            .should('be.visible')
            .contains('No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.')

        cy.get('#white-background > :nth-child(5)')
            .should('be.visible')
            .contains('Talking About Testing')
    })


})