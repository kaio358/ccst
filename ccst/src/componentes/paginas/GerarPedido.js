


import Caixa from "../layouts/Caixa"
import Inputs from '../layouts/Inputs';
import Select from '../layouts/Select';
import Button from '../layouts/Button';

// estilos 
import ConjuntoClasse from "../../classesTestes/ConjuntoClasse";
import { useState } from "react";




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



    const [dadosMensagem, setDadosMensagem] = useState("")
    function textoMensagem(novo){
        setDadosMensagem(novo)
    }
    const [dadosFuncionario, setDadosFuncionario] = useState("")
    function textoFuncionario(novo) {
        
        setDadosFuncionario(novo)
    }


    function enviar() {
      
        const formData = new FormData();
     
        formData.append('mensagem', dadosMensagem);
        formData.append('funcao', dadosFuncionario);
        
        console.log(formData);
        fetch('http://localhost:8080/teste', {
            method: 'POST',
            body: formData,
        
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        

        
            
     
    }
    return(
        <div>
            <Caixa estilo={estiloCaixa} tipo="">
                <h1 style={estiloTitulo}>Conte</h1>
                <Inputs tipo="text" textoAtras="Digite aqui" estilo={estiloInput} nome="mensagem" texto={textoMensagem} valor={dadosMensagem}/>
                <Select estilo ={estiloSelect} nome="funcionario" texto={textoFuncionario} valor={dadosFuncionario}/>
                <div onClick={enviar}>
                    <Button texto= "Seila" estilo={estiloButton}/>
                </div>
               
            </Caixa>
        </div>
    )
}
export default GerarPedido