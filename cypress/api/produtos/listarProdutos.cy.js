/// <reference types="cypress" />

const baseUrl = 'https://serverest.dev'
const produtosRoute = '/produtos';

describe('Listar Produtos', { tags: ['prod', '@api'] }, () => {
    let token
    beforeEach(() => {
        cy.token().then(t => { token = t })
    });

    it('Deve listar todos os produtos', () => {
        cy.request({
            url: baseUrl + produtosRoute,
            method: 'GET',
            headers: { authorization: token },
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body))
        })
    })

    it('Deve listar um produto específico', () => {
        cy.request({
            url: baseUrl + produtosRoute,
            method: 'GET',
        }).then((response) => {
            let id = response.body.produtos[3]._id
            cy.request({
                url: baseUrl + produtosRoute + '/' + id,
                method: 'GET',
                headers: { authorization: token },
            }).then((response) => {
                expect(response.status).to.eq(200);
                cy.log(JSON.stringify(response.body))
            })
        })
    })
})