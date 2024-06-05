const conexao = require("../infraestrutura/conexao")

class Solicitacao{
    adiciona(titulo,mensagem){
        const sql = `INSERT INTO Solicitacao (data,titulo,mensagem , Status_idStatus) values(CURDATE(), ' ${titulo} ' , ' ${mensagem} ', 4)`

        return new Promise((resolve,reject)=>{
            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro);
                }else{
                    resolve(resultado);
                }
            })

        })

    }
 
}

module.exports = new Solicitacao