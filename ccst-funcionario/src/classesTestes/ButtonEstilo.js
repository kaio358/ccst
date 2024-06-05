class ButtonEsitlo{
    constructor(altura = "4dvh", largura= "20dvw",raio ,posicao , borda,backgroundColor ,color,fontSize ){

       
        this.width = largura
        this.height = altura
        this.borderRadius = raio
        this.margin = posicao
        this.border = borda


        this.backgroundColor =  backgroundColor
        this.color = color
        this.fontSize = fontSize
    }
    getAltura(){
        return this.height;
    }
    getLargura(){
        return this.width;
    }
    getRaio(){
        return this.borderRadius
    }
    getPosicao(){
        return this.margin 
    }
    getBackgroundColor(){
        return this.backgroundColor
    }
    getMedidasGerais(){
        return this.medidasGerais
    }
    getTipoBorder(){
        return this.tipoBorder
    }
    getCorBorder(){
        return this.corBorder
    }
 
    getColor(){
        return this.color
    }
    getFontSize(){
        return this.fontSize
    }

    setAltura(altura){
        this.height = altura
    }
    setLargura(largura){
        this.width= largura
    }
    setRaio(raio){
        this.borderRadius = raio
    }
    setPosicao(posicao){
        this.posicao = posicao
    }
    setBackgroundColor( backgroundColor){
        this.backgroundColor = backgroundColor
    }
    setMedidasGerais(medidasGerais){
        this.medidasGerais = medidasGerais
    }
    setTipoBorder(tipoBorder){
        this.tipoBorder = tipoBorder
    }
    setCorBorder(corBorder){
        this.corBorder = corBorder
    }
 
    setColor(color){
        this.color = color
    }
    setFontSize(fontSize){
        this.fontSize = fontSize
    }

}

export default ButtonEsitlo