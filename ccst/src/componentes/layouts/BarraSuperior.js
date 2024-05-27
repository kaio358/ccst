import {Link} from 'react-router-dom'

import styles from "./BarraSuperior.module.css"

import ConjuntoClasse from "../../classesTestes/ConjuntoClasse";



function BarrarSuperior(){
    const cc = new ConjuntoClasse()
    const conjuntoTristeaza = cc.criarConjunto('tristeza')
    const barra = conjuntoTristeaza.barra()

    
    return(
        <nav style={barra} className={styles.containerMenu}>
            <div>
               
            </div>
        <ul  className={styles.lista_nav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gerarPedido"> Gerar Pedido</Link></li>
         
        </ul>            
    </nav>
    )
}

export default BarrarSuperior