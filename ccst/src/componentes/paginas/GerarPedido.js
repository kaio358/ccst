


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


    // function enviar(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
   
    //     formData.append("mensagem", dadosMensagem);
    //     formData.append("funcao", dadosFuncionario);
        
    //     console.log(dadosFuncionario,dadosMensagem);
    //     // console.log("teste",formData);
    //     // for (let [key, value] of formData.entries()) { 
    //     //     console.log(`${key}: ${value}`);
    //     //   }
    //     fetch('http://localhost:8080/teste', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             mensagem:dadosMensagem,
    //             funcao: dadosFuncionario
    //         }),
        
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error))
        

        
            
     
    // }
    // texto={textoMensagem}
    // valor={dadosFuncionario}
    // texto={textoFuncionario} 
    return(
        <div>
            <Caixa estilo={estiloCaixa} >
                <h1 style={estiloTitulo}>Conte</h1>
                <Inputs tipo="text" textoAtras="Digite aqui" estilo={estiloInput} nome="mensagem" />
                <Select estilo ={estiloSelect} nome="funcionario" />
                <div >
                    <Button texto= "Confirmar" estilo={estiloButton}/>
                    {/* testetetetetst */}
                </div>
               
            </Caixa>
        </div>
    )
}
export default GerarPedido