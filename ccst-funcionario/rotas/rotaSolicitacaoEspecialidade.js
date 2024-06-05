const express = require("express")

const rota = express.Router()


const solicitacao_especialidade = require("../modelos/Solicitacao_Especialidade")

rota.post("/lista",async (req,res)=>{
    const consulta =  await solicitacao_especialidade.consulta(req.body.id)
    // console.log(consulta);
    res.json(consulta)
})

rota.post("/selecionaUm",async(req,res)=>{
    const id = req.body.id
    const consulta = await solicitacao_especialidade.selecionaUm(id)
    res.json(consulta)
})

module.exports = rota