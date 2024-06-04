const express = require("express")

const rota = express.Router()

rota.post("/teste",(req,res)=>{
    console.log(req.body);
    // res.json(req.body)
})

module.exports = rota