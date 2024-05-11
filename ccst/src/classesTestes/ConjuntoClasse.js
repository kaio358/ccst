import ConjuntoTristeza from "./tristeza/ConjntoTristeza"
// toda vez que criar um arquivo com nome Conjunto em uma pasta, importe para este arquivo e crie um if com esse conjunto

class ConjuntoClasse{
    criarConjunto(tipo){
        const convercaoTipo = tipo.toLowerCase()
        if(convercaoTipo == 'tristeza'){
            return new ConjuntoTristeza()
        }
        else if(convercaoTipo == 'claro'){
            
        }
    }
}
export default ConjuntoClasse 