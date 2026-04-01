describe('Testes na Agenda de Contatos', () => {
    const criarContato = (sufixo) => {
        const timestamp = Date.now()

        return {
        nome: `Mathias ${sufixo} ${timestamp}`,
        email: `mathias.${sufixo.toLowerCase()}.${timestamp}@teste.com`,
        telefone: `4799${String(timestamp).slice(-7)}`
        }
    }

    function preencherFormulario(nome, email, telefone) {
        cy.get('input').eq(0).clear().type(nome)
        cy.get('input').eq(1).clear().type(email)
        cy.get('input').eq(2).clear().type(telefone)
    }

    function adicionarContato(contato) {
        preencherFormulario(contato.nome, contato.email, contato.telefone)
        cy.contains('button', /adicionar/i).click()
    }

    beforeEach(() => {
        cy.visit('/')
    })

    it('deve incluir um novo contato', () => {
        const contato = criarContato('Inclusao')

        adicionarContato(contato)

        cy.contains(contato.nome).should('exist')
        cy.contains(contato.email).should('exist')
        cy.contains(contato.telefone).should('exist')
    })

    it('deve alterar um contato existente', () => {
        const contatoOriginal = criarContato('Original')
        const contatoEditado = criarContato('Editado')

        adicionarContato(contatoOriginal)

        cy.contains(contatoOriginal.nome)
        .should('exist')
        .parents('div')
        .filter(':has(button)')
        .first()
        .within(() => {
            cy.contains('button', /editar/i).click()
        })

        preencherFormulario(
        contatoEditado.nome,
        contatoEditado.email,
        contatoEditado.telefone
        )

        cy.contains('button', /salvar/i).click()

        cy.contains(contatoEditado.nome).should('exist')
        cy.contains(contatoEditado.email).should('exist')
        cy.contains(contatoEditado.telefone).should('exist')
    })

    it('deve remover um contato', () => {
        const contato = criarContato('Remocao')

        adicionarContato(contato)

        cy.contains(contato.nome)
        .should('exist')
        .parents('div')
        .filter(':has(button)')
        .first()
        .within(() => {
            cy.contains('button', /deletar/i).click()
        })

        cy.contains(contato.nome).should('not.exist')
    })
})