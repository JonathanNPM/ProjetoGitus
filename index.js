const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Bem vindo ao meu site!");
})

app.get("/produtos", function (req, res) {
    res.send("Lista de produtos!");
})

app.get("/produtos/:nome?", function (req, res) {
    var nome = req.params.nome;
    if (nome) {
        res.send("Produto " + nome + " criado!");
    } else {
        res.send("Lista de produtos!");
    }
})

app.get("/consulta/", function (req, res) {
    var cpf = req.query["cpf"];
    if(cpf){
        res.send("retorno consulta: cpf = " + cpf);
    }else{
        res.send("CPF NÃO FOI FORNECIDO");
    }
})

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
});