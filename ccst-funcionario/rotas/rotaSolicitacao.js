const express = require("express")

const rota = express.Router()

const Solicitacao = require("../modelos/Solicitacao")
const Solicitacao_Especialidade = require("../modelos/Solicitacao_Especialidade")

rota.post("/teste", async (req,res)=>{
   

    const inserirSolicitacao = await Solicitacao.adiciona(req.body.titulo, req.body.mensagem)
    Solicitacao_Especialidade.adiciona(inserirSolicitacao.insertId, req.body.funcionario)
   
    res.redirect("http://localhost:3000/");
})

module.exports = rota