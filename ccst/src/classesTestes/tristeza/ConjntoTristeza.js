import CaixaTristeza from "./CaixaTristeza"
import FundoTristeza from "./FundoTristeza"
class ConjuntoTristeza{
   

    caixa(altura = "80dvh",largura = "40dvw",raio = "5%", posicao = "10dvh auto "){
        return new CaixaTristeza(altura,largura,raio,posicao)
        
    }
    fundo(){
        return new FundoTristeza()
    }

}

export default ConjuntoTristeza