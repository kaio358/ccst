const conexao = require("../infraestrutura/conexao")

class Especialidade{
    listar(){
        const sql = `Select * from Especialidade`
        return new Promise((resolve,reject)=>{

            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(resultado)
                }
            })
        })
    }
    
}
module.exports = new Especialidade