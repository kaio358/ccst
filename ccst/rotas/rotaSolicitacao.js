const express = require("express")

const rota = express.Router()

const Solicitacao = require("../modelos/Solicitacao")
const Solicitacao_Especialidade = require("../modelos/Solicitacao_Especialidade")

rota.post("/teste/:id", async (req,res)=>{
   

    const inserirSolicitacao = await Solicitacao.adiciona(req.body.titulo, req.body.mensagem,req.params.id)
    Solicitacao_Especialidade.adiciona(inserirSolicitacao.insertId, req.body.funcionario)
   
    res.redirect(`http://localhost:3000/pedidos/${req.params.id}`);
})

module.exports = rota