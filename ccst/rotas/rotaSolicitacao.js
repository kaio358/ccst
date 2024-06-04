const express = require("express")

const rota = express.Router()

rota.post("/teste",(req,res)=>{
    console.log(req.body);
    
    // res.json({ message: 'Dados recebidos com sucesso' });
    res.redirect("http://localhost:3000/");
})

module.exports = rota