import BarraSuperiorClaro from "./BarraSuperiorClaro"
import ButtonClaro from "./ButtonClaro"
import CaixaDeMensagensClaro from "./CaixaDeMensagensClaro"
import CaixaClaro from "./CaixaClaro"
import FundoClaro from "./FundoClaro"
import InputClaro from "./InputClaro"
import LiMensagemClaro from "./LiMensagemClaro"
import PalavraClaro from "./PalavraClaro"
import SelectClaro from "./SelectClaro"

class ConjuntoClaro{
   

    caixa(altura = "80dvh",largura = "40dvw",raio = "5%", posicao = "10dvh auto " , backgroundColor ='#B3D6FF'){
        return new CaixaClaro(altura,largura,raio,posicao ,backgroundColor)
        
    }
    fundo(){
        return new FundoClaro()
    }
    input(altura = "6dvh",largura = "25dvw", raio ="8px" ,posicao= "2dvh auto " ,   medidasGerais = ["0px","0px","0px", "0px"] ,tipoBorder = "solid",corBorder = "White", backgroundColor = "white",color , fontSize = "15px", padding = "5px"){
        return new InputClaro(altura,largura,raio,posicao,medidasGerais,tipoBorder,corBorder,backgroundColor,color,fontSize,padding)
    }
    select( altura= "6dvh", largura, raio = "8px" ,posicao = "2dvh auto "  , borda ="1px solid white",backgroundColor = "white" ,color ,fontSize = "15px"){
        return new SelectClaro(altura, largura, raio ,posicao , borda,backgroundColor ,color,fontSize)
    }
    button(altura = "6dvh", largura = "25dvw", raio = "10px" ,posicao = "2dvh auto "  , borda ="none",backgroundColor = "#B4A3C7" ,color = "White",fontSize = "15px"){
        return new ButtonClaro(altura, largura, raio ,posicao , borda,backgroundColor ,color,fontSize)
    }

    // para texto
    titulo(color, fontSize = "18px", fontFamily,posicao = "2dvh auto " ){
        return new PalavraClaro(color, fontSize , fontFamily,posicao)
    }
    palavra(color, fontSize = "12px", fontFamily,posicao){
        return new PalavraClaro(color, fontSize , fontFamily,posicao)
    }


    barra(backgroundColor = "#B3D6FF",boxShadow){
        return new BarraSuperiorClaro(backgroundColor,boxShadow)
    }
    CaixaMensagens(altura ="80dvh" ,largura = "80%" ,raio = "10px" , posicao = "20px auto", backgroundColor ='#B3D6FF'){
        return new CaixaDeMensagensClaro(altura,largura ,raio, posicao, backgroundColor )
    }
    LiMensagem(altura,largura = "90%",raio  = "5px", posicao = "10px auto",backgroundColor = "white"){
        return new LiMensagemClaro(altura,largura,raio, posicao,backgroundColor)
        
    }
}

export default ConjuntoClaro