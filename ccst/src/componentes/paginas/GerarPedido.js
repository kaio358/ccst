


import Caixa from "../layouts/Caixa"
import Inputs from '../layouts/Inputs';
import Select from '../layouts/Select';
import Button from '../layouts/Button';

// estilos 
import ConjuntoClasse from "../../classesTestes/ConjuntoClasse";



function GerarPedido(props) {
     // Estilos
    // conjuntos
    const cc = new ConjuntoClasse()
    const conjuntoTristeaza = cc.criarConjunto('tristeza')


   
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
    return(
        <div>
            <Caixa estilo={estiloCaixa} tipo="">
                <h1 style={estiloTitulo}>Conte</h1>
                <Inputs tipo="text" textoAtras="Digite aqui" estilo={estiloInput} nome="mensagem"/>
                <Select estilo ={estiloSelect} nome="funcionario"/>
                <Button texto= "Seila" estilo={estiloButton}/>
            </Caixa>
        </div>
    )
}
export default GerarPedido