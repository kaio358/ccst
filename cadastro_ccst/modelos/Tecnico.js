const conexao = require("../infraestrutura/conexao")

class Tecnico{
    cadastrar(dados){
        const sql = `INSERT INTO tecnico (nome,senha,Status_idStatus,Especialidade_idEspecialidade) values('${dados.nome}','${dados.senha}',3, ${dados.especialidade})`

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