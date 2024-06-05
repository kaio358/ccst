
function Inputs(props){
    function mudarTexto(e){
        props.texto(e.target.value)
    }
    // onChange={mudarTexto} value={props.valor}
    return(
        <div  >
            <input type={props.tipo} placeholder={props.textoAtras} style={props.estilo} name={props.nome} />
        </div>
    )
}

export default Inputs