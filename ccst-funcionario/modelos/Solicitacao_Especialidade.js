const conexao = require("../infraestrutura/conexao")


class Solicitacao_Especialidade{
    consulta(id,nome,senha){
        const sql = `SELECT 
        s.mensagem AS descricao, 
        e.funcao AS especialidade, 
        s.data AS data, 
        s.idSolicitacao AS id, 
        s.titulo AS titulo,
        s.Status_idStatus AS status
    FROM 
        solicitacao s
    JOIN 
        solicitacao_especialidade se ON s.idSolicitacao = se.solicitacao_id
    JOIN 
        especialidade e ON se.especialidade_id = e.idEspecialidade
    JOIN 
        tecnico t ON se.especialidade_id = t.Especialidade_idEspecialidade
    WHERE 
        t.idTecnico = ${id}  and  t.nome = ${nome} and senha = ${senha}
    ORDER BY 
        s.data DESC;


    
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
        const sql = `SELECT 
            s.mensagem AS descricao, 
            e.funcao AS especialidade, 
            s.data AS data, 
            s.idSolicitacao AS id , 
            s.titulo AS titulo,
            s.Status_idStatus AS status
        FROM 
            solicitacao s
        JOIN 
            solicitacao_especialidade se ON s.idSolicitacao = se.solicitacao_id
        JOIN 
            especialidade e ON se.especialidade_id = e.idEspecialidade 
        WHERE 
            s.idSolicitacao = ${id}
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
    adiciona(idSolicitacao,idEspecialidade){
        const sql = `INSERT INTO solicitacao_especialidade (solicitacao_id,especialidade_id) values (${idSolicitacao}, ${idEspecialidade})`

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }

}

module.exports = new Solicitacao_Especialidade