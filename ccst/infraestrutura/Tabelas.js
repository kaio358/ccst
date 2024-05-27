


class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarEspecialidade()
        this.criarSolicitacao()
        this.criarTecnico()


    }
    criarSolicitacao(){
        const sql = `CREATE TABLE IF NOT EXISTS Solicitacao 
         ( 
            idSolicitacao int , 
            mensagem varchar(255), 
            data datetime, 
            finalizado tinyint, 
            Especialidade_idEspecialidade int,
            primary key (idSolicitacao),
            foreign key(Especialidade_idEspecialidade) references Especialidade(idEspecialidade) 

        )` 
        
        this.conexao.query(sql,erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Solicitacao criada com sucesso !!");
            }
        })
    }
    criarEspecialidade(){
        const sql = `CREATE TABLE IF NOT EXISTS Especialidade 
        (
            idEspecialidade int , 
            funcao varchar(100), 
            primary key(idEspecialidade)
            
        )`
    
        this.conexao.query(sql,erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Especialidade criada com sucesso !!");
            }
        })
    }
    criarTecnico(){
        const sql =`CREATE TABLE IF NOT EXISTS Tecnico 
        (
            idTecnico int, 
            nome varchar(45), 
            Especialidade_idEspecialidade int, 
            primary key(idTecnico), 
            foreign key(Especialidade_idEspecialidade) references Especialidade(idEspecialidade) 
        )` 

        this.conexao.query(sql,erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Tecnico criada com sucesso !!");
            }
        })

    }



}

module.exports = new Tabelas