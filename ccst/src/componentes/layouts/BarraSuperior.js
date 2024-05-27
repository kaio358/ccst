import {Link} from 'react-router-dom'

import styles from "./BarraSuperior.module.css"





function BarrarSuperior(props){
   

    
    return(
        <nav style={props.estilo} className={styles.containerMenu}>
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