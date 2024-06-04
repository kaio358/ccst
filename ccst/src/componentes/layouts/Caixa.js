



function Caixa(props){

  
 
    // const form = document.getElementById('some-form')
    //     form.addEventListener('submit', e => {
    //     e.preventDefault()
    //     console.log('Deu certo')
    // })
// action="http://localhost:8080/teste" method="POST" id="some-form"
    return(
        <form  style={props.estilo}   action="http://localhost:8080/teste" method="POST" id="some-form" >
            
            {props.children} 
        </form>
    )
}

export default Caixa