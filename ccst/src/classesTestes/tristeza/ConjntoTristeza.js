import CaixaTristeza from "./CaixaTristeza"
class ConjuntoTristeza{
   

    caixa(altura = "80dvh",largura = "40dvw",raio = "5%", posicao = "10dvh auto "){
        return new CaixaTristeza(altura,largura,raio,posicao)
        
    }

}

export default ConjuntoTristeza