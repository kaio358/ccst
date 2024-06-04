const express = require('express')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

// app.use(express.json())

const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/Tabelas')

const rotaSolicitacao = require("./rotas/rotaSolicitacao")
const rotaSolicitacaoEspecialidade = require("./rotas/rotaSolicitacaoEspecialidade")
const rotaEspecialidade = require("./rotas/rotaEspecialidade")

conexao.connect(erro =>{
    if(erro){
        console.log(erro);
    }else{
        Tabelas.init(conexao)
        app.use("/",rotaSolicitacao)
        app.use("/",rotaSolicitacaoEspecialidade)
        app.use("/",rotaEspecialidade)
        server.listen(8080,()=>{
            console.log("Conectado: http://localhost:8080");
        })
    }
})


