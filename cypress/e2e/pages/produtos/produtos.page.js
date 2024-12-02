/// <reference path="../../../support/index.js" />

import produtosElements from './produtos.elements';

class produtosPage {
    salvarTituloProduto() {
        return cy.get(produtosElements.lbl_titulo_produto).first().invoke('text').then((titulo_produto) => {
            return titulo_produto
        });
    }

    adicionarProduto() {
        cy.get(produtosElements.btn_adicionar_produto).first().click({ force: true });
    }

    validarProdutoAdicionado(expectedTituloProdutoHomePage) {
        cy.get(produtosElements.div_produto).first().invoke('text').then((expectedTituloProdutoListaComprasPage) => {
            expect(expectedTituloProdutoListaComprasPage).to.include(expectedTituloProdutoHomePage)
        });
    }

    removerProduto() {
        cy.get(produtosElements.btn_limpar_lista).first().click({ force: true });
    }
}

export default new produtosPage();