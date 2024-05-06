import ConjuntoTristeza from "./tristeza/ConjntoTristeza"


class ConjuntoClasse{
    criarConjunto(tipo){
        const convercaoTipo = tipo.toLowerCase()
        if(convercaoTipo == 'tristeza'){
            return new ConjuntoTristeza
        }
    }
}
export default ConjuntoClasse 