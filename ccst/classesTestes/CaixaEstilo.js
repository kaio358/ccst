class CaixaEstilo{
   
    constructor(altura,largura,raio){
        this.altura = altura 
        this.largura = largura
        this.raio = raio
    }
    getAltura(){
        return this.altura;
    }
    getLargura(){
        return this.largura;
    }
    getRaio(){
        return this.raio
    }
    setAltura(altura){
        this.altura = altura
    }
    setLargura(largura){
        this.largura= largura
    }
    setRaio(raio){
        this.raio = raio
    }
}

export default CaixaEstilo