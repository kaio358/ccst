



function Caixa(props){

    
  
 
    
    return(
        <form  style={props.estilo}  action="http://localhost:8080/teste" method="POST">
            
            {props.children} 
        </form>
    )
}

export default Caixa