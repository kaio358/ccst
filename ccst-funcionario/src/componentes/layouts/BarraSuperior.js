import {Link} from 'react-router-dom'

import styles from "./BarraSuperior.module.css"
import { useEffect, useState } from 'react'





function BarrarSuperior(props){
   
    const [posicao, setPosicao] = useState()
    const corStatus = ['','corGreen','corRed','corGray']

    useEffect(()=>{
        fetch("http://localhost:8000/pegaStatus",{
            method:"POST",
            body:JSON.stringify({
                id:1
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp=> resp.json())
        .then(dados=>{
            if (Array.isArray(dados) && dados.length > 0 && Array.isArray(dados[0])) {
                // Se sim, transforma em uma única matriz
                const newData = dados.flat(); // Use flat() para transformar em uma única matriz
               
                // console.log(newData);
                setPosicao(newData[0].status_id)
              } else {
                  console.log(dados);
                  setPosicao(dados[0].status_id)
                  // Trate o caso em que os dados não estão no formato esperado
              }
        })
    },[])
    function mandarStatus() {
        
        fetch("http://localhost:8000/atualizarStatus",{
            method:'PATCH',
            body:JSON.stringify({
                status:posicao,
                id:1
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    function mudarStatus() {
        
    }

    return(
        <nav style={props.estilo} className={styles.containerMenu}>
            <div>
               
            </div>
        <ul  className={styles.lista_nav}>
            <li><Link to="/">Home</Link></li>
            <li><div className={`${styles.statusIcone} ${styles[corStatus[posicao]]}`}></div></li>
         
        </ul>            
    </nav>
    )
}

export default BarrarSuperior