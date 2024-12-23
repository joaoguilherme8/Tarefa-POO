class tarefa {
    constructor(disciplina, titulo, descricao, prazoVenc, status) {
        this.disciplina = disciplina
        this.titulo = titulo
        this.descricao = descricao
        this.prazoVenc = prazoVenc
        this.status = status
    }

    toString() {
        return `Tarefa: ${this.titulo} (Disciplina: ${this.disciplina})\nDescrição: ${this.descricao}\nPrazo: ${this.prazoVenc}\nStatus: ${this.status}`
    }
}

module.exports = tarefa

// TESTES UNITARIOS
let tarefa1 = new tarefa("geografia", "planices", "atividade de geografia", "12/12/12", "pendente")
console.assert(tarefa1.disciplina === "geografia", "erro disciplina")
console.assert(tarefa1.titulo === "planices", "erro titulo")
console.assert(tarefa1.descricao === "atividade de geografia", "erro descrição")
console.assert(tarefa1.prazoVenc === "12/12/12", "erro prazo")
console.assert(tarefa1.status === "pendente", "erro status")