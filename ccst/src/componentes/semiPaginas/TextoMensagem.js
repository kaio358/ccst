import { useLocation } from "react-router-dom";



function TextoMensagem(props) {
    const localizacao = useLocation()
    const idteste = localizacao.search;
    const numeroID = idteste.match(/\d+/)[0];
    console.log(numeroID);
    return (
        <div>
            oi 
        </div>
    )
}

export default TextoMensagem