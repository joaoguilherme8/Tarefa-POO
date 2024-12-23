const tarefa = require("./tarefa")

class tarefaRevisao extends tarefa {
    constructor(disciplina, titulo, descricao, prazoVenc, status, assuntos) {
        super(disciplina, titulo, descricao, prazoVenc, status)
        this.assuntos = assuntos
    }
    
    toString() {
        return `${super.toString()}\nAssuntos: ${this.assuntos}`
    }
}

module.exports = tarefaRevisao

//TESTES UNITARIOS
let tarefaRevisao1 = new tarefaRevisao("geografia", "planices", "atividade de geografia", "12/12/12", "pendente", "relevos")
console.assert(tarefaRevisao1.disciplina === "geografia", "erro disciplina")
console.assert(tarefaRevisao1.titulo === "planices", "erro titulo")
console.assert(tarefaRevisao1.descricao === "atividade de geografia", "erro descrição")
console.assert(tarefaRevisao1.prazoVenc === "12/12/12", "erro prazo")
console.assert(tarefaRevisao1.status === "pendente", "erro status")
console.assert(tarefaRevisao1.assuntos === "relevos", "erro assuntos")