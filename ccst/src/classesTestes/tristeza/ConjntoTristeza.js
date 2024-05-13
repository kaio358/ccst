import ButtonTristeza from "./ButtonTrsiteza"
import CaixaTristeza from "./CaixaTristeza"
import FundoTristeza from "./FundoTristeza"
import InputTristeza from "./InputTristeza"
import PalavraTristeza from "./PalavraTristeza"
import SelectTristeza from "./SelectTristeza"
class ConjuntoTristeza{
   

    caixa(altura = "80dvh",largura = "40dvw",raio = "5%", posicao = "10dvh auto " , backgroundColor ='#2F3D40'){
        return new CaixaTristeza(altura,largura,raio,posicao ,backgroundColor)
        
    }
    fundo(){
        return new FundoTristeza()
    }
    input(altura = "3dvh",largura = "25dvw", raio ,posicao= "2dvh auto " ,   medidasGerais = ["0px","0px","2px", "0px"] ,tipoBorder = "solid",corBorder = "White", backgroundColor = "transparent",color = "white", fontSize = "15px",padding){
        return new InputTristeza(altura,largura,raio,posicao,medidasGerais,tipoBorder,corBorder,backgroundColor,color,fontSize,padding)
    }
    select( altura, largura, raio = "3px" ,posicao = "2dvh auto "  , borda ="1px solid white",backgroundColor = "#455559" ,color = "White",fontSize){
        return new SelectTristeza(altura, largura, raio ,posicao , borda,backgroundColor ,color,fontSize)
    }
    button(altura, largura, raio = "3px" ,posicao = "2dvh auto "  , borda ="1px solid white",backgroundColor = "#F24957" ,color = "White",fontSize){
        return new ButtonTristeza(altura, largura, raio ,posicao , borda,backgroundColor ,color,fontSize)
    }

    // para texto
    titulo(color, fontSize = "18px", fontFamily,posicao = "2dvh auto " ){
        return new PalavraTristeza(color, fontSize , fontFamily,posicao)
    }
    palavra(color, fontSize = "12px", fontFamily,posicao){
        return new PalavraTristeza(color, fontSize , fontFamily,posicao)
    }

}

export default ConjuntoTristeza