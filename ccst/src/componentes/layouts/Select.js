import Option from "./Option"



function Select(props){
  
    return(
        <select style={props.estilo}>
            <Option>Opção 1</Option>
            <Option>Opção 2</Option>
            <Option>Opção 3</Option>
        </select>
    )
}

export default Select