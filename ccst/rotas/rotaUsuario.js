const express = require("express")
const rota = express.Router();

const Usuario = require("../modelos/Usuario")
rota.post("/login",async (req,res)=>{
    const dadosUsuario = await Usuario.verifica(req.body)
    console.log(dadosUsuario);
    res.redirect(`http://localhost:3000/pedidos/${dadosUsuario[0].idUsuario}`)
})
module.exports = rota