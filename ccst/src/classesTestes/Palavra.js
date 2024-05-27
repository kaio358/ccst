class Palavra{
    constructor(color, fontSize, fontFamily = "Arial, sans-serif",posicao){
        this.color = color
        this.fontSize = fontSize
        this.fontFamily = fontFamily
        this.margin = posicao
      

    }
    getColor(){
        return this.color
    }
    getFontSize(){
        return this.fontSize
    }
    getFontFamily(){
        return this.fontFamily
    }
    getPosicao(){
        return this.margin 
    }
    setColor(color){
        this.color = color
    }
    setFontSize(fontSize){
        this.fontSize = fontSize
    }
    setFontFamily(fontFamily){
        this.fontFamily = fontFamily
    }
    setPosicao(posicao){
        this.posicao = posicao
    }
}

export default Palavra