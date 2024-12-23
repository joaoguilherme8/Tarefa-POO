const tarefa = require("./tarefa")

class tarefaTeorica extends tarefa {
    constructor(disciplina, titulo, descricao, prazoVenc, status, numerodepaginas) {
        super(disciplina, titulo, descricao, prazoVenc, status)
        this.numerodepaginas = numerodepaginas
    }
    
    toString() {
        return `${super.toString()}\nNúmero de páginas: ${this.numerodepaginas}`
    }
}

module.exports = tarefaTeorica

//TESTES UNITARIOS
let tarefaTeorica1 = new tarefaTeorica("geografia", "planices", "atividade de geografia", "12/12/12", "pendente", "32")
console.assert(tarefaTeorica1.disciplina === "geografia", "erro disciplina")
console.assert(tarefaTeorica1.titulo === "planices", "erro titulo")
console.assert(tarefaTeorica1.descricao === "atividade de geografia", "erro descrição")
console.assert(tarefaTeorica1.prazoVenc === "12/12/12", "erro prazo")
console.assert(tarefaTeorica1.status === "pendente", "erro status")
console.assert(tarefaTeorica1.numerodepaginas === "32", "erro numero de páginas")