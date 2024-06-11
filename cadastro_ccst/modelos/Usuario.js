const conexao =  require("../infraestrutura/conexao")

class Usuario{
    cadastrar(dados){
        const sql = `INSERT INTO usuario (nome,senha) values('${dados.nome}','${dados.senha}')`

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
}
module.exports = new Usuario