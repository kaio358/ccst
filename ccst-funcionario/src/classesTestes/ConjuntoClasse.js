import ConjuntoTristeza from "./tristeza/ConjntoTristeza"
import ConjuntoClaro from "./claro/ConjuntoClaro"
// toda vez que criar um arquivo com nome Conjunto em uma pasta, importe para este arquivo e crie um if com esse conjunto

class ConjuntoClasse{
    criarConjunto(tipo){
        const convercaoTipo = tipo.toLowerCase()
        if(convercaoTipo == 'tristeza'){
            return new ConjuntoTristeza()
        }
        else if(convercaoTipo == 'claro'){
            return new ConjuntoClaro()
        }
    }
}
export default ConjuntoClasse 