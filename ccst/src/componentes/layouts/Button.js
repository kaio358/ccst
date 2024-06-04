
// import { Link } from "react-router-dom"

function Button(props){
    return(
        // <Link to="/">
        //     <button style={props.estilo} type="submit">
        //         {props.texto}
        //     </button>
        // </Link>
    <button style={props.estilo}>
        {props.texto}
    </button>
       
    )
}

export default Button