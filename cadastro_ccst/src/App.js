import React, { useState ,useEffect} from 'react';

import './App.css';

function App() {
  

  const [especialidade,setEspecialidade] = useState()

  useEffect(()=>{
      fetch("http://localhost:7000/listaSelect",{
          method:"Get",
          headers:{
              'Content-Type':'application/json'
          }
      })
      .then(resp=>resp.json())
      .then(dados=>{
          if (Array.isArray(dados) && dados.length > 0 && Array.isArray(dados[0])) {
         
              const newData = dados.flat(); 
             
              // console.log(newData);
              setEspecialidade(newData)
            } else {
              //   console.log(dados[0].descricao.length);
                setEspecialidade(dados)
           
            }
      } )
      .catch(erro=>console.log(erro))
  },[])

  const [nome, setName] = useState('');
  const [senha, setPassword] = useState('');
  const [eEmpregado, setIsEmployee] = useState(false);
  const [role, setRole] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    
    

    fetch("http://localhost:7000/cadastrar",{
      method:'POST',
      body: JSON.stringify({ nome: nome, senha: senha, eEmpregado: eEmpregado, especialidade:role }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(resp=> resp.json())
    .then(dados=> alert("Sucesso"))
    .catch(erro=> alert("Deu algo errado"))
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={nome}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={senha}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isEmployee">Funcionário:</label>
            <input
              type="checkbox"
              id="isEmployee"
              checked={eEmpregado}
              onChange={(e) => setIsEmployee(e.target.checked)}
            />
          </div>
          {eEmpregado && (
            <div className="form-group">
              <label htmlFor="role">Selecione o cargo:</label>
              <select id="role"   value={role} onChange={(e) => setRole(e.target.value)}>
                {especialidade? especialidade.map(esp=>{
                  return <option value={esp.idEspecialidade}>{esp.funcao}</option>
                }):''}
              
              </select>
            </div>
          )}
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

