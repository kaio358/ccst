import CaixaTristeza from "./CaixaTristeza"
import FundoTristeza from "./FundoTristeza"
import InputTristeza from "./InputTristeza"
class ConjuntoTristeza{
   

    caixa(altura = "80dvh",largura = "40dvw",raio = "5%", posicao = "10dvh auto " , backgroundColor ='#2F3D40'){
        return new CaixaTristeza(altura,largura,raio,posicao ,backgroundColor)
        
    }
    fundo(){
        return new FundoTristeza()
    }
    input(altura = "3dvh",largura = "25dvw", raio ,posicao= "10dvh auto " ,   medidasGerais = ["0px","0px","2px", "0px"] ,tipoBorder = "solid",corBorder = "White", backgroundColor = "transparent",color = "white", fontSize = "15px"){
        return new InputTristeza(altura,largura,raio,posicao,medidasGerais,tipoBorder,corBorder,backgroundColor,color,fontSize)
    }

}

export default ConjuntoTristeza