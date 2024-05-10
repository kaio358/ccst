// import styles from "./Caixa.module.css";

import ConjuntoClasse from "../../classesTestes/ConjuntoClasse"

function Caixa(props){

    
  
 
    
    return(
        <form  style={props.estilo} >
            
            {props.children} 
        </form>
    )
}

export default Caixa