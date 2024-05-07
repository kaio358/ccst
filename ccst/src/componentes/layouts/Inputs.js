import InputEstilo from "../../classesTestes/InputEstilo"
import InputTristeza from "../../classesTestes/tristeza/InputTristeza"



function Inputs(props){
    const estilo =  new InputTristeza()
    return(
        <div >
            <input type={props.tipo} placeholder={props.textoAtras} style={estilo}/>
        </div>
    )
}

export default Inputs