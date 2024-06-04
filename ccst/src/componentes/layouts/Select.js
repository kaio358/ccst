import { useEffect, useState } from "react"
import Option from "./Option"



function Select(props){
    
    // function mudarSelect(e){
    //     props.texto(e.target.value)
    // }
    // onChange={mudarSelect}
    const [especialidade,setEspecialidade] = useState()

    useEffect(()=>{
        fetch("http://localhost:8080/listaSelect",{
            method:"Get",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(dados=>{
            if (Array.isArray(dados) && dados.length > 0 && Array.isArray(dados[0])) {
                // Se sim, transforma em uma única matriz
                const newData = dados.flat(); // Use flat() para transformar em uma única matriz
               
                // console.log(newData);
                setEspecialidade(newData)
              } else {
                //   console.log(dados[0].descricao.length);
                  setEspecialidade(dados)
                  // Trate o caso em que os dados não estão no formato esperado
              }
        } )
        .catch(erro=>console.log(erro))
    },[])
    return(
        <select style={props.estilo} name={props.nome}   value={props.valor}>
            {especialidade? especialidade.map(esp=>{
                return <Option valor={esp.idEspecialidade}>{esp.funcao}</Option>
            }):''}
         
        </select>
    )
}

export default Select