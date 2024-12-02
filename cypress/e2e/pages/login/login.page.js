/// <reference path="../../../support/index.js" />

import loginElements from './login.elements';
const faker = require('faker-br');

class loginPage {
    preencherFormCadastrar() {
        cy.get(loginElements.txt_nome).type(`${faker.name.firstName()} ${faker.name.lastName()}`);
        cy.get(loginElements.txt_email).type(faker.internet.email());
        cy.get(loginElements.txt_senha).type(faker.internet.password());
        cy.get(loginElements.btn_cadastrar).click();
    }

    preencherFormLogin(usuario, senha) {
        cy.get(loginElements.txt_email).type(usuario);
        cy.get(loginElements.txt_senha).type(senha);
        cy.get(loginElements.btn_entrar).click();
    }
}

export default new loginPage();