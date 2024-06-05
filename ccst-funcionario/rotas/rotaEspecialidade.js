const express = require("express")
const rota = express.Router()

const Especialidade = require("../modelos/Especialidade")

rota.post("/pegaUm",async (req,res)=>{
    const unico = await Especialidade.pegarUm(req.body.id)
    res.json(unico)
})

module.exports = rota