import { useEffect, useState } from 'react';
import ConjuntoClasse from '../../classesTestes/ConjuntoClasse';
import BarrarSuperior from '../layouts/BarraSuperior';
import LiMensagem from '../layouts/LiMensagem';
import { Link } from 'react-router-dom';


function Pedidos(props) {



    const cc = new ConjuntoClasse()
    const conjuntoTristeaza = cc.criarConjunto('claro')
    const caixaDeMensagens = conjuntoTristeaza.CaixaMensagens()
    const liMensagem = conjuntoTristeaza.LiMensagem()
    const barra = conjuntoTristeaza.barra()



    const [lista,setLista] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/lista",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(resp => resp.json())
        .then(dados=>{
            if (Array.isArray(dados) && dados.length > 0 && Array.isArray(dados[0])) {
                // Se sim, transforma em uma única matriz
                const newData = dados.flat(); // Use flat() para transformar em uma única matriz
               
                // console.log(newData);
                setLista(newData)
              } else {
                //   console.log('Os dados não estão no formato esperado.',dados);
                  setLista(dados)
                  // Trate o caso em que os dados não estão no formato esperado
              }
        } )
        .catch(erro=>console.log(erro))
    },[])

    const formatarData = (dataString) => {
        const data = new Date(dataString);
        return data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      };
      
   
    return (
        <div >
            <div >
                 <BarrarSuperior estilo={barra}/>
            </div>
            <section style={caixaDeMensagens} >
                <ul  >
                    <LiMensagem para="Kaio" texto="seila seila" data="dia/mês/ano" estilo = {liMensagem}/>
                    <LiMensagem para="Kaio" texto="seila seila" data="dia/mês/ano" estilo = {liMensagem}/>

                    {lista? lista.map(l=>{
                         
                         const dataFormatada = formatarData(l.data);
                        //  console.log(dataFormatada);
                        // return <LiMensagem para={l.especialidade} texto={l.descricao} data={dataFormatada} estilo = {liMensagem}/>
                        return <Link to={`/pedido?${l.id}`}><LiMensagem para={l.especialidade} texto={l.descricao} data={dataFormatada} estilo = {liMensagem}/></Link>
                    }):""}
                </ul>
            </section>
        </div>
    )
}


export default Pedidos