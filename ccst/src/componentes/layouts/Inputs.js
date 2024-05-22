
function Inputs(props){
    return(
        <div  >
            <input type={props.tipo} placeholder={props.textoAtras} style={props.estilo} name={props.nome}/>
        </div>
    )
}

export default Inputs