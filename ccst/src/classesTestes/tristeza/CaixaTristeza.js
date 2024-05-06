import CaixaEstilo from "../CaixaEstilo"

class CaixaTristeza extends CaixaEstilo{

    constructor(altura,largura ,raio, posicao){
        super(altura,largura,raio , posicao)
        this.backgroundColor = '#2F3D40'
    }
    getCor(){
        return this.backgroundColor
    }
}
export default CaixaTristeza