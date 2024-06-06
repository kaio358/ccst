const conexao = require("../infraestrutura/conexao")

class Tecnico{
    pegaUmStatus(id){
        const sql = `SELECT Status_idStatus AS status_id FROM Tecnico WHERE idTecnico = ${id} `
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
    atualizaUmStatus(status , id){
        const sql = `UPDATE Tecnico SET Status_idStatus = ${status} WHERE idTecnico = ${id}`

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
}

module.exports = new Tecnico