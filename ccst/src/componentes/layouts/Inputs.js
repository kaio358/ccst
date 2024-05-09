import ConjuntoClasse from "../../classesTestes/ConjuntoClasse"


function Inputs(props){
    const cc = new ConjuntoClasse()
    const conjuntoTristeaza = cc.criarConjunto('tristeza')
    const estiloInput = conjuntoTristeaza.input()

    return(
        <div  >
            <input type={props.tipo} placeholder={props.textoAtras} style={estiloInput}/>
        </div>
    )
}

export default Inputs