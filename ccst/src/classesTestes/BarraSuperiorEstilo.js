class BarrarSuperiorEstilo{
    constructor(backgroundColor, boxShadow){
        this.backgroundColor = backgroundColor
        this.boxShadow = boxShadow
        
        

    }
    getBackgroundColor(){
        return this.backgroundColor
    }
    getBoxShadow(){
        return this.boxShadow
    }
    setBackgroundColor(backgroundColor){
        this.backgroundColor = backgroundColor
    }
    setBoxShadow(boxShadow){
        this.boxShadow = boxShadow
    }

}

export default BarrarSuperiorEstilo