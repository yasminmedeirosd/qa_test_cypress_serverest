/// <reference types="cypress" />

import produtos from '../../fixtures/produtos.json'
const baseUrl = 'https://serverest.dev'
const produtosRoute = '/produtos';
const faker = require('faker-br');

describe('Cadastrar Produtos', { tags: ['prod', '@api'] }, () => {
    let token
    beforeEach(() => {
        cy.token().then(t => { token = t })
    });

    it('Deve cadastrar um novo produto', () => {
        cy.request({
            url: baseUrl + produtosRoute,
            method: 'POST',
            headers: { authorization: token },
            body:
            {
                nome: faker.commerce.productName(),
                preco: faker.commerce.price(),
                descricao: faker.commerce.department(),
                quantidade: faker.random.number()
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("Cadastro realizado com sucesso")
        })
    })

    produtos.forEach(produto => {
        it.skip('Deve cadastrar uma lista de novos produtos', () => {
            cy.request({
                url: baseUrl + produtosRoute,
                method: 'POST',
                headers: { authorization: token },
                body:
                {
                    nome: produto.nome,
                    preco: produto.preco,
                    descricao: produto.descricao,
                    quantidade: produto.quantidade
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq("Cadastro realizado com sucesso")
                cy.log(response.body.authorization)
                cy.log(response.body.produto)
            })
        })
    })
})