/// <reference path="../../support/index.js" />

import basePage from "../pages/base/base.page";
import loginElements from "../pages/login/login.elements";
import loginPage from "../pages/login/login.page";

describe('Login', { tags: ['prod', '@e2e', '@login'] }, () => {
    const email = Cypress.env('email')
    const senha = Cypress.env('senha')

    it('Deve realizar um cadastro com sucesso', () => {
        basePage.acessarURL()
        basePage.clicarElemento(loginElements.lnk_cadastre_se)
        loginPage.preencherFormCadastrar()
        basePage.validarMensagem(loginElements.alert_mensagem, 'Cadastro realizado com sucesso')
        basePage.validarURL()
    })

    it('Deve realizar um login com sucesso', () => {
        basePage.acessarURL()
        loginPage.preencherFormLogin(email, senha)
        basePage.validarURL()
    })
})

