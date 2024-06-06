const express = require("express")
const rota = express.Router()

const Tecnico = require("../modelos/Tecnico")

rota.post("/pegaStatus", async(req,res)=>{
    const status = await Tecnico.pegaUmStatus(req.body.id)
    res.json(status)
})
rota.patch("/atualizarStatus",(req,res)=>{
    Tecnico.atualizaUmStatus(req.body.id)
    res.json({"mensagem":"Tudo certo !!"})
})

module.exports = rota