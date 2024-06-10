const conexao =  require("../infraestrutura/conexao")

class Usuario{
    verifica(dados){
        const sql = `Select * from Usuario WHERE nome='${dados.nome}' and senha = '${dados.senha}' `
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
module.exports = new Usuario