import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import GerarPedido from './componentes/paginas/GerarPedido';
import Pedidos from './componentes/paginas/Pedidos';

import ConjuntoClasse from './classesTestes/ConjuntoClasse';
import TextoMensagem from './componentes/semiPaginas/TextoMensagem';




function App() {
  const cc = new ConjuntoClasse()
  const conjuntoTristeaza = cc.criarConjunto('claro')

   // fundo
   const fundo = conjuntoTristeaza.fundo()
   document.body.style.backgroundColor = fundo.getColor()
 

  return (
    <Router>

      
     
      <Routes>
        <Route exact path='/' element ={<Pedidos/>} />
        <Route exact path='/gerarPedido' element ={<GerarPedido/>} />
        <Route exact path='/pedido' element={<TextoMensagem/>}/>
      
                        
            
      </Routes>
    </Router>
  );
}

export default App;
