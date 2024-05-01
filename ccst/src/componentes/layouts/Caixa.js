import styles from "./Caixa.module.css";
// import estilo from "../../../classesTestes/abismo/CaixaAbismo"


function Caixa(props){
    // const teste = new estilo("200px","200px",33)
    console.log(new estilo("22px",2,2));
    
    return(
        <form >
            
            {props.children} 
        </form>
    )
}

export default Caixa