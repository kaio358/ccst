class LiMensagemEstilo{
    constructor(altura,largura,raio, posicao,backgroundColor){
        this.height = altura
        this.width = largura
        this.borderRadius = raio
        this.margin = posicao
        this.backgroundColor = backgroundColor
        // this.padding = "50px"
        // this.textAlign = "center"
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
}

export default LiMensagemEstilo