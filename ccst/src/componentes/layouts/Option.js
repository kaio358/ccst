function Option( props){
    return(


        <option value={props.valor}>
            {props.children}
        </option>
 
    )
}

export default Option