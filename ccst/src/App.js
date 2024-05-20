
import './App.css';

import Caixa from "./componentes/layouts/Caixa"
import Inputs from './componentes/layouts/Inputs';
import Select from './componentes/layouts/Select';
import Button from './componentes/layouts/Button';

// estilos 
import ConjuntoClasse from './classesTestes/ConjuntoClasse';





function App() {

  // Estilos
  // conjuntos
  const cc = new ConjuntoClasse()
  const conjuntoTristeaza = cc.criarConjunto('claro')


  // fundo
  const fundo = conjuntoTristeaza.fundo()
  document.body.style.backgroundColor = fundo.getColor()
  //caixa 
  const estiloCaixa = conjuntoTristeaza.caixa()
  //input 
  const estiloInput = conjuntoTristeaza.input()
  //select 
  const estiloSelect = conjuntoTristeaza.select()
  //button 
  const estiloButton = conjuntoTristeaza.button()
  //titulo
  const estiloTitulo = conjuntoTristeaza.titulo()

  return (
    <div className="App" >
      <Caixa estilo={estiloCaixa} tipo="">
        <h1 style={estiloTitulo}>Conte</h1>
        <Inputs tipo="text" textoAtras="Digite aqui" estilo={estiloInput}/>
        <Select estilo ={estiloSelect}/>
        <Button texto= "Seila" estilo={estiloButton}/>
      </Caixa>
    </div>
  );
}

export default App;
