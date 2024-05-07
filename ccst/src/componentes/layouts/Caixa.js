// import styles from "./Caixa.module.css";

import ConjuntoClasse from "../../classesTestes/ConjuntoClasse"

function Caixa(props){
    const CC = new ConjuntoClasse()
    const conjuntoTristeaza = CC.criarConjunto('tristeza')
    const teste = conjuntoTristeaza.caixa()
  
 
    
    return(
        <form  style={teste} >
            
            {props.children} 
        </form>
    )
}

export default Caixa