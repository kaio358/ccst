const conexao = require("../infraestrutura/conexao")

class Solicitacao{
    adiciona(titulo,mensagem,Usuario_idUsuario){
        const sql = `INSERT INTO Solicitacao (data,titulo,mensagem, Usuario_idUsuario) values(CURDATE(), ' ${titulo} ' , ' ${mensagem} ', ${Usuario_idUsuario})`

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