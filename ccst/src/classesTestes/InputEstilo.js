class InputEstilo{
    constructor( raio  ,  medidasGerais ,tipoBorder = "solid",corBorder , largura = "25dvw", altura = "3dvh" ){
        this.borderRadius = raio
      
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


        
        this.width = largura
        this.height = altura

    }
}

export default InputEstilo