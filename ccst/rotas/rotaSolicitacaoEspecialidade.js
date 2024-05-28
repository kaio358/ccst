const express = require("express")

const rota = express.Router()


const solicitacao_especialidade = require("../modelos/Solicitacao_Especialidade")

rota.get("/lista",async (req,res)=>{
    const consulta =  await solicitacao_especialidade.consulta()
    // console.log(consulta);
    res.json(consulta)
})

module.exports = rota