const conexao = require("../infraestrutura/conexao")


class Solicitacao_Especialidade{
    consulta(){
        const sql = `SELECT s.mensagem AS descricao, e.funcao AS especialidade, s.data AS data, s.idSolicitacao AS id , s.titulo AS titulo
        FROM solicitacao s
        JOIN solicitacao_especialidade se ON s.idSolicitacao = se.solicitacao_id
        JOIN especialidade e ON se.especialidade_id = e.idEspecialidade
        `
        return new Promise((resolve, reject)=>{
            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(resultado)
                }
            })
        })
       
    }
    selecionaUm(id){
        const sql = `SELECT s.mensagem AS descricao, e.funcao AS especialidade, s.data AS data, s.idSolicitacao AS id , s.titulo AS titulo
        FROM solicitacao s
        JOIN solicitacao_especialidade se ON s.idSolicitacao = se.solicitacao_id
        JOIN especialidade e ON se.especialidade_id = e.idEspecialidade WHERE s.idSolicitacao = ${id}
        `

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

module.exports = new Solicitacao_Especialidade