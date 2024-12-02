/// <reference types="@cypress/grep" />
/// <reference types="@bahmutov/cy-grep" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
}

export { }
//import cypress = require('cypress');
import 'cypress-mochawesome-reporter/register';
import '@testing-library/cypress/add-commands';
import login from '../fixtures/login.json'

const registerCypressGrep = require('@bahmutov/cy-grep');
registerCypressGrep();

// Error
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

// Custom commands E2E
Cypress.Commands.add('loginServerest', (
    email = Cypress.env('email'),
    senha = Cypress.env('senha')
) => {
    cy.session('login', () => {
        cy.visit('/');
        cy.get('#email').type(email);
        cy.get('#password').type(senha, { log: false });
        cy.get('button[data-testid="entrar"]').eq(0).click();
        cy.get('div[class="jumbotron"]').should('be.visible');
    });
    cy.visit('https://front.serverest.dev/home')
});

Cypress.Commands.add('clicarElemento', (elemento) => {
    cy.get(elemento).click({ force: true })
});

// Custom commands API
const baseUrl = 'https://serverest.dev'

Cypress.Commands.add('cadastroADM', () => {
    cy.request({
        method: 'POST',
        url: baseUrl + '/usuarios',
        body: {
            nome: login.nome,
            email: login.email,
            password: login.password,
            administrador: "true"
        }, failOnStatusCode: false
    })
})

Cypress.Commands.add('token', () => {
    cy.request({
        method: 'POST',
        url: baseUrl + '/login',
        body: {
            email: 'beltrano@qa.com.br',
            password: 'teste',
        }
    }).then((response) => {
        return response.body.authorization
    })
})