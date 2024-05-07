import CaixaEstilo from "../CaixaEstilo"

class CaixaTristeza extends CaixaEstilo{

    constructor(altura,largura ,raio, posicao, backgroundColor ='#2F3D40'){
        super(altura,largura,raio , posicao)
        this.backgroundColor = backgroundColor
    }
    getCor(){
        return this.backgroundColor
    }
}
export default CaixaTristeza