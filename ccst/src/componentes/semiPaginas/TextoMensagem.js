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
                //   console.log('Os dados não estão no formato esperado.',dados);
                  setDados(dados)
                  // Trate o caso em que os dados não estão no formato esperado
              }
        })
        .catch(erro=>console.log(erro))
    },[])

    return (
        <div>
            <div>
                <BarrarSuperior estilo={barra}/>
            </div>
            <main className={styles.caixaDeTextoDaMensagem}>
                <div className={styles.paraQuem}>OI</div>
                <div className={styles.titulo}>Seila</div>
                <div className={styles.texto}>
                    lorem
                </div>
            </main>

        </div>
    )
}

export default TextoMensagem