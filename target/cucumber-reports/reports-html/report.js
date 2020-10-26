$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Teste.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Teste",
  "description": "",
  "id": "teste",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@teste"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 9,
  "name": "Login com teste",
  "description": "",
  "id": "teste;login-com-teste",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@teste"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "eu fizer o que eu quiser",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "entrar de costas",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema ira dar pirueta",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});