


class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarStatus()
        this.criarEspecialidade()
        this.criarSolicitacao()
        this.criarSolicitacaoEspecialidade()
        this.criarTecnico()
        this.criarUsuario()
      


    }
    criarSolicitacao(){
        const sql = `CREATE TABLE IF NOT EXISTS Solicitacao 
         ( 
            idSolicitacao int  AUTO_INCREMENT, 
            titulo varchar(45),
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
            idEspecialidade int AUTO_INCREMENT, 
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
        const sql = `CREATE TABLE IF NOT EXISTS solicitacao_especialidade 
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
            idTecnico int AUTO_INCREMENT, 
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
            idStatus int AUTO_INCREMENT, 
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
    criarUsuario(){
        const sql = `
        CREATE TABLE IF NOT EXISTS Usuario (
            idUsuario int ,
            nome varchar(45),
            senha varchar(45),
            solicitacao_id int,
            primary key(idUsuario),
            FOREIGN KEY (solicitacao_id) REFERENCES solicitacao(idSolicitacao)
        )
        `
        this.conexao.query(sql,erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Usuario criada com sucesso !!");
            }
        })
    }



}

module.exports = new Tabelas