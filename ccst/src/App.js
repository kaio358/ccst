
import './App.css';
import Caixa from "./componentes/layouts/Caixa"
import Inputs from './componentes/layouts/Inputs';


function App() {
  return (
    <div className="App">
      <Caixa>
        <Inputs tipo="text" textoAtras="Digite aqui"/>
      </Caixa>
    </div>
  );
}

export default App;
