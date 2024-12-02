/// <reference types="cypress" />

const baseUrl = 'https://serverest.dev'
const produtosRoute = '/produtos';

describe('Excluir Produtos', { tags: ['prod', '@api'] }, () => {
    let token
    beforeEach(() => {
        cy.token().then(t => { token = t })
    });

    it('Deve excluir um produto específico', () => {
        cy.request({
            url: baseUrl + produtosRoute,
            method: 'GET',
        }).then((response) => {
            let id = response.body.produtos[1]._id
            cy.request({
                url: baseUrl + produtosRoute + '/' + id,
                method: 'DELETE',
                headers: { authorization: token }
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eql("Registro excluído com sucesso")
            })
        })
    });
})