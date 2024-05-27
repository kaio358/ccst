import ConjuntoClasse from '../../classesTestes/ConjuntoClasse';
import BarrarSuperior from '../layouts/BarraSuperior';
import LiMensagem from '../layouts/LiMensagem';


function Pedidos(props) {
    const cc = new ConjuntoClasse()
    const conjuntoTristeaza = cc.criarConjunto('tristeza')
    const caixaDeMensagens = conjuntoTristeaza.CaixaMensagens()
    const liMensagem = conjuntoTristeaza.LiMensagem()
   
    return (
        <div >
            <div >
                 <BarrarSuperior/>
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