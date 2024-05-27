import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import GerarPedido from './componentes/paginas/GerarPedido';
import Pedidos from './componentes/paginas/Pedidos';

import ConjuntoClasse from './classesTestes/ConjuntoClasse';




function App() {
  const cc = new ConjuntoClasse()
  const conjuntoTristeaza = cc.criarConjunto('tristeza')

   // fundo
   const fundo = conjuntoTristeaza.fundo()
   document.body.style.backgroundColor = fundo.getColor()
 

  return (
    <Router>

      
     
      <Routes>
        <Route exact path='/' element ={<Pedidos/>} />
        <Route exact path='/gerarPedido' element ={<GerarPedido/>} />
      
                        
            
      </Routes>
    </Router>
  );
}

export default App;
