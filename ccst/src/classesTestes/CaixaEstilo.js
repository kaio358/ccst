class CaixaEstilo{
   
    constructor(altura,largura,raio, posicao){
        this.height = altura
        this.width = largura
        this.borderRadius = raio
        this.margin = posicao
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
    setAltura(altura){
        this.height = altura
    }
    setLargura(largura){
        this.width= largura
    }
    setRaio(raio){
        this.borderRadius = raio
    }
    
}

export default CaixaEstilo