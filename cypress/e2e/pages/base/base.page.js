/// <reference path="../../../support/index.js" />

class basePage {
    loginServerest() {
        cy.loginServerest();
    }

    clicarElemento(elemento) {
        cy.clicarElemento(elemento)
    }

    acessarURL() {
        cy.visit('https://front.serverest.dev/login')
    }

    validarMensagem(elemento, mensagem) {
        cy.get(elemento).contains(mensagem)
    }

    validarURL() {
        cy.url().should('eq', 'https://front.serverest.dev/home')
    }
}

export default new basePage();