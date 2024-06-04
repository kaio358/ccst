
function Inputs(props){
    function mudarTexto(e){
        props.texto(e.target.value)
    }
    return(
        <div  >
            <input type={props.tipo} placeholder={props.textoAtras} style={props.estilo} name={props.nome} onChange={mudarTexto}/>
        </div>
    )
}

export default Inputs