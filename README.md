# [QA Automation]()

Projeto de automação de testes responsável por garantir os fluxos e2e e de api de uma aplicação.

## Stack

- [node js](https://nodejs.org/en/)
- [cypress](https://www.cypress.io/)

## Initial Setup

```shell
git clone 
cd qa-automation
npm install
```

## Open Execution of Tests
Depois de definir sua configuração inicial, você pode executar o comando **npm run test:open** para executar testes no modo interativo, onde você pode assistir aos testes em execução, além de usar os recursos de time-travel e automatic reload features.

```
npm run test:open
```

## Headless Execution of Tests
Para uma execução mais rápida dos testes sem o modo interativo, basta executar os comandos abaixo:

```
npm run test:api
```
```
npm run test:e2e
```

## Environments
É necessário criar um arquivo localmente na raiz do projeto com suas credenciais de acesso, para que os testes sejam executados com sucesso, pois este arquivo `cypress.env.json` não está sendo versionado no git.

Examples: 
```json
{
    "email": "",
    "senha": ""
}
```

## Commands
Também é possível saber quais cenários foram automatizados executando os seguintes comandos:

Lista o nome dos cenários de cada spec
```
npm run list:spec:names
```

Lista a quantidade de cenários por tag
```
npm run count:by:tags
```

## Report
Após executar os testes usando o comando **npm run test:api** ou **npm run test:e2e** um arquivo .html é gerado na pasta do projeto qa-automation\cypress\reports\html\index.html