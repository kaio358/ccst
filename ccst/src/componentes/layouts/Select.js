import Option from "./Option"



function Select(props){
    
    function mudarSelect(e){
        props.texto(e.target.value)
    }
    return(
        <select style={props.estilo} name={props.nome} onChange={mudarSelect}>
            <Option>Opção 1</Option>
            <Option>Opção 2</Option>
            <Option>Opção 3</Option>
        </select>
    )
}

export default Select