const express = require("express")
const rota = express.Router()

const Especialidade = require("../modelos/Especialidade")

rota.get("/listaSelect",async (req,res)=>{
    const listar = await Especialidade.listar()
    res.json(listar)
})

module.exports = rota