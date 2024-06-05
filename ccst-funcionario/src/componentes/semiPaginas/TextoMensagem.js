import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BarrarSuperior from "../layouts/BarraSuperior";


import ConjuntoClasse from "../../classesTestes/ConjuntoClasse";
import styles from "./TextoMensagem.module.css"



function TextoMensagem(props) {
    const localizacao = useLocation()
    const idteste = localizacao.search;
    const numeroID = idteste.match(/\d+/)[0];
    

    const cc = new ConjuntoClasse()
    const conjuntoTristeaza = cc.criarConjunto('claro')
    const barra = conjuntoTristeaza.barra()

    const [dados, setDados] = useState()


    useEffect(()=>{
        fetch("http://localhost:8080/selecionaUm",{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:numeroID
            })
        })
        .then(resp=>resp.json())
        .then(dados=> {
            if (Array.isArray(dados) && dados.length > 0 && Array.isArray(dados[0])) {
                // Se sim, transforma em uma única matriz
                const newData = dados.flat(); // Use flat() para transformar em uma única matriz
               
                // console.log(newData);
                setDados(newData)
              } else {
                  console.log(dados);
                  setDados(dados)
                  // Trate o caso em que os dados não estão no formato esperado
              }
        })
        .catch(erro=>console.log(erro))
    },[])
  
    const corData = (dp)=>{
        
        if(dp == 6){
            return "corGreen"
        }else if(dp == 4){
            return "corVer"
        }else {  
            return "corAm"
        }
    
}
    return (
        <div>
            <div>
                <BarrarSuperior estilo={barra}/>
            </div>
            <main className={styles.caixaDeTextoDaMensagem}>
                <div className={styles.paraQuem}>{dados ? dados[0].especialidade:""}</div>
                <div className={styles.titulo}><h2>{dados? dados[0].titulo : ""}</h2></div>
                <div className={styles.texto}>
                    {dados?dados[0].descricao:""}
                </div>
                <footer className={` ${styles.rodape} ${styles[dados? corData(dados[0].status):""]}`  }>

                </footer>
            </main>

        </div>
    )
}

export default TextoMensagem