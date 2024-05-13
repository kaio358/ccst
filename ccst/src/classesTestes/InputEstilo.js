class InputEstilo{
    constructor( altura, largura, raio ,posicao ,  medidasGerais ,tipoBorder,corBorder,backgroundColor,color,fontSize , padding){
        this.height = altura        
        this.width = largura
        this.borderRadius = raio
        this.margin = posicao
    //   console.log(medidasGerais);
        if(medidasGerais.length > 1){
            
            if(medidasGerais.length == 3){
                this.borderTop = medidasGerais[0] +" "+ tipoBorder+" "+ corBorder
                this.borderRight = medidasGerais[1] +" "+ tipoBorder+" "+ corBorder
                this.borderBottom = medidasGerais[2] +" "+ tipoBorder+" "+ corBorder
                this.borderLeft = medidasGerais[1] +" "+ tipoBorder+" "+ corBorder
                
            }else if(medidasGerais.length  == 4){
                this.borderTop = medidasGerais[0] +" "+ tipoBorder+" "+ corBorder
                this.borderRight = medidasGerais[1] +" "+ tipoBorder+" "+ corBorder
                this.borderBottom = medidasGerais[2] +" "+ tipoBorder+" "+ corBorder
                this.borderLeft = medidasGerais[3] +" "+ tipoBorder+" "+ corBorder
            }
            else{
                this.borderTop = medidasGerais[0] +" "+ tipoBorder+" "+ corBorder
                this.borderRight = medidasGerais[1]+" "+ tipoBorder+" "+ corBorder
                this.borderBottom = medidasGerais[0]+" "+ tipoBorder+" "+ corBorder
                this.borderLeft = medidasGerais[1]+" "+ tipoBorder+" "+ corBorder
            }
        }else{
            this.border = medidasGerais[0] +" "+ tipoBorder+" "+ corBorder
        }


        this.backgroundColor =  backgroundColor
        this.color = color
        this.fontSize = fontSize
        this.padding = padding
        

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
    getPadding(){
        return this.padding
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
    setPadding(padding){
        this.padding = padding
    }
}

export default InputEstilo