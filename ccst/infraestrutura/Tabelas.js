


class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarStatus()
        this.criarEspecialidade()
        this.criarSolicitacao()
        this.criarSolicitacaoEspecialidade()
        this.criarTecnico()
      


    }
    criarSolicitacao(){
        const sql = `CREATE TABLE IF NOT EXISTS Solicitacao 
         ( 
            idSolicitacao int , 
            mensagem varchar(255), 
            data datetime, 
            finalizado tinyint, 
            Status_idStatus int,
            primary key (idSolicitacao),
            foreign key(Status_idStatus) references Status(idStatus) 

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
    criarSolicitacaoEspecialidade(){
        const sql = `CREATE TABLE solicitacao_especialidade 
        (
            solicitacao_id INT,
            especialidade_id INT,
            PRIMARY KEY (solicitacao_id, especialidade_id),
            FOREIGN KEY (solicitacao_id) REFERENCES solicitacao(idSolicitacao),
            FOREIGN KEY (especialidade_id) REFERENCES especialidade(idEspecialidade)
        )`
        this.conexao.query(sql,erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela solicitacao_especialidade criada com sucesso !!");
            }
        })
    }
    criarTecnico(){
        const sql =`CREATE TABLE IF NOT EXISTS Tecnico 
        (
            idTecnico int, 
            nome varchar(45), 
            Especialidade_idEspecialidade int, 
            Status_idStatus int, 
            primary key(idTecnico), 
            foreign key(Especialidade_idEspecialidade) references Especialidade(idEspecialidade),
            foreign key(Status_idStatus) references Status(idStatus) 
        )` 

        this.conexao.query(sql,erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Tecnico criada com sucesso !!");
            }
        })

    }
    criarStatus(){
        const sql = `CREATE TABLE IF NOT EXISTS Status 
        (
            idStatus int, 
            tipo varchar(45),
            primary key (idStatus)
    
        ) `
        this.conexao.query(sql,erro=>{
            if(erro){
                console.log(erro);
            }else{

                console.log("Tabela Status criada com sucesso !!");
            }
        })
    }



}

module.exports = new Tabelas