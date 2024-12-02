/// <reference path="../../support/index.js" />

import basePage from "../pages/base/base.page";
import produtosElements from "../pages/produtos/produtos.elements";
import produtosPage from "../pages/produtos/produtos.page";

beforeEach(() => {
    basePage.loginServerest();
});

describe('Produtos', { tags: ['prod', '@e2e', '@produtos'] }, () => {
    it('Deve adicionar um produto na lista de compras', () => {
        produtosPage.salvarTituloProduto().then(expectedTituloProdutoHomePage => {
            produtosPage.adicionarProduto();
            produtosPage.validarProdutoAdicionado(expectedTituloProdutoHomePage);
        })
    })

    it('Deve remover um produto da lista de compras', () => {
        produtosPage.salvarTituloProduto().then(expectedTituloProdutoHomePage => {
            produtosPage.adicionarProduto();
            produtosPage.validarProdutoAdicionado(expectedTituloProdutoHomePage);
        })
        produtosPage.removerProduto();
        basePage.validarMensagem(produtosElements.lbl_mensagem_lista_compras, 'Seu carrinho está vazio')
    })
})