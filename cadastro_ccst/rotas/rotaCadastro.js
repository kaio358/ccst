const express = require("express")
const rota = express.Router();

const tecnico = require("../modelos/Tecnico")
const usuario = require("../modelos/Usuario")


rota.post("/cadastrar",(req,res)=>{
    const eEmpregado = req.body.eEmpregado

    if(eEmpregado){
        tecnico.cadastrar({nome:req.body.nome, senha: req.body.senha, especialidade:req.body.especialidade})
    }else{
        usuario.cadastrar({nome:req.body.nome, senha: req.body.senha})
    }
    res.status(200).json({mensagem:"Tudo certo"})
   

})

module.exports = rota