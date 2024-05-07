import InputEstilo from "../InputEstilo"

class InputTristeza extends InputEstilo{
    constructor(raio  ,   medidasGerais = ["0px","0px","2px", "0px"] ,tipoBorder = "solid",corBorder = "White"){
        super(raio  ,  medidasGerais,tipoBorder = "solid",corBorder)
    
    
      
        // this.borderBottom = ''
        this.backgroundColor = "transparent"
        this.color = "white"
        this.fontSize = "15px"

    }
}

export default InputTristeza