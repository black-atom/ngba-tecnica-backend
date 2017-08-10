const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./../app");

const clienteData = {
     "cpf_cnpj": "47389876589",
     "razao_social": "Realponto",
     "nome": "Realponto",
     "nome_fantasia": "Realponto",
     "inscricao_estadual": "Realponto",
     "enderecos": 
     [{
          "rua": "Rua Dr Cincinato Braga",
          "complemento": "296",
          "bairro": "São Paulo",
          "cidade": "São Bernardo do Campo",
          "cep": "12355"
     }],
     "contatos": 
     [{
          "telefone": "312232",
          "nome": "teste"
     }]
 };
