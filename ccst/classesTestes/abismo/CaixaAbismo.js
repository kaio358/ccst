import CaixaEstilo from "../CaixaEstilo "

class CaixaAbismo extends CaixaEstilo{
    constructor(altura,largura,raio){
        super(altura,largura,raio)
        this.cor = '#2F3D40'
    }
    getCor(){
        return this.cor
    }
}
export default CaixaAbismo