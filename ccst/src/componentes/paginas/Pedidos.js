import ConjuntoClasse from '../../classesTestes/ConjuntoClasse';
import BarrarSuperior from '../layouts/BarraSuperior';
import LiMensagem from '../layouts/LiMensagem';


function Pedidos(props) {
    const cc = new ConjuntoClasse()
    const conjuntoTristeaza = cc.criarConjunto('claro')
    const caixaDeMensagens = conjuntoTristeaza.CaixaMensagens()
    const liMensagem = conjuntoTristeaza.LiMensagem()
    const barra = conjuntoTristeaza.barra()
   
    return (
        <div >
            <div >
                 <BarrarSuperior estilo={barra}/>
            </div>
            <section style={caixaDeMensagens} >
                <ul  >
                    <LiMensagem para="Kaio" texto="seila seila" data="dia/mês/ano" estilo = {liMensagem}/>
                    <LiMensagem para="Kaio" texto="seila seila" data="dia/mês/ano" estilo = {liMensagem}/>
                </ul>
            </section>
        </div>
    )
}


export default Pedidos