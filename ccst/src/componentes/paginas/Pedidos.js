import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ConjuntoClasse from '../../classesTestes/ConjuntoClasse';
import BarrarSuperior from '../layouts/BarraSuperior';
import LiMensagem from '../layouts/LiMensagem';
import { Link } from 'react-router-dom';


function Pedidos(props) {

    const { id } = useParams();
    localStorage.setItem("id",id)
  
    const cc = new ConjuntoClasse()
    const conjuntoTristeaza = cc.criarConjunto('claro')
    const caixaDeMensagens = conjuntoTristeaza.CaixaMensagens()
    const liMensagem = conjuntoTristeaza.LiMensagem()
    const barra = conjuntoTristeaza.barra()



    const [lista,setLista] = useState([])
   

    useEffect(()=>{
        // console.log("entrou ?");
        fetch(`http://localhost:8080/listaPeloID`,{
            method:"POST",
            body:JSON.stringify({
                id:id
            }),
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
             
                  setLista(dados)
                  // Trate o caso em que os dados não estão no formato esperado
              }
        } )
        .catch(erro=>console.log(erro))
    },[])


    const corData = (dp)=>{
        
            if(dp == 6){
                return {cor:"corGreen"}
            }else if(dp == 4){
                return {cor:"corVer"}
            }else {  
                return {cor:"corAm"}
            }
        
    }
    const formatarData = (dataString) => {
        const data = new Date(dataString);
        return data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      };
      const limitarString = (str) => {
        if (str.length > 60) {
          return str.slice(0, 60) + '...';
        }
        return str;
      };
      
   
    return (
        <div >
            <div >
                 <BarrarSuperior estilo={barra}/>
            </div>
            <section style={caixaDeMensagens} >
                <ul  >
                


                    {lista? lista.map( (l,i)=>{
                         
                        const dataFormatada = formatarData(l.data);
                        const mensagemFormatada = limitarString(l.descricao)
                        const corFormatada = corData(l.status)
                        
                        // return <LiMensagem para={l.especialidade} texto={l.descricao} data={dataFormatada} estilo = {liMensagem}/>
                        return <Link to={`/pedido?${l.id}`}><LiMensagem para={l.especialidade} texto={mensagemFormatada} data={dataFormatada} estilo = {liMensagem} customCor={corFormatada.cor} /></Link>
                    }):""}
                </ul>
            </section>
        </div>
    )
}


export default Pedidos