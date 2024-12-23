const tarefa = require("./tarefa")

class tarefaPratica extends tarefa {
    constructor(disciplina, titulo, descricao, prazoVenc, status, qtdExercicios) {
        super(disciplina, titulo, descricao, prazoVenc, status)
        this.qtdExercicios = qtdExercicios
    }

    toString() {
        return `${super.toString()}\nQuantidade de exercícios: ${this.qtdExercicios}`
    }
}

module.exports = tarefaPratica

//TESTES UNITARIOS
let tarefaPratica1 = new tarefaPratica("geografia", "planices", "atividade de geografia", "12/12/12", "pendente", "3")
console.assert(tarefaPratica1.disciplina === "geografia", "erro disciplina")
console.assert(tarefaPratica1.titulo === "planices", "erro titulo")
console.assert(tarefaPratica1.descricao === "atividade de geografia", "erro descrição")
console.assert(tarefaPratica1.prazoVenc === "12/12/12", "erro prazo")
console.assert(tarefaPratica1.status === "pendente", "erro status")
console.assert(tarefaPratica1.qtdExercicios === "3", "erro qts exercicios")