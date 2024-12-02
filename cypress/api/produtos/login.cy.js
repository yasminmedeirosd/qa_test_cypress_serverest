/// <reference types="cypress" />

import login from '../../fixtures/login.json'
const baseUrl = 'https://serverest.dev'
const loginRoute = '/login';

describe('Login', { tags: ['prod', '@api'] }, () => {
    before(() => {
        cy.cadastroADM()
    });

    it('Deve realizar o login', () => {
        cy.request({
            method: 'POST',
            url: baseUrl + loginRoute,
            body:
            {
                email: login.email,
                password: login.password
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("Login realizado com sucesso")
            cy.log(response.body.authorization)
        })
    });
});