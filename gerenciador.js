const tarefa = require("./tarefa.js")

class gerenciadorDeTarefas {
    constructor() {
        this._tarefas = []
    }

    get tarefas() {
        return this._tarefas
    }

    set tarefas(tarefa) {
        if (tarefa) {
            this._tarefas.push(tarefa)
        } else {
            console.log("A tarefa deve ser uma instância da classe Tarefa")
        }
    }

    cadastrarTarefa(tarefa) {
        this.tarefas = tarefa
    }

    listarTarefas() {
        return this.tarefas.map(tarefa => tarefa.toString()).join("\n")
    }

    buscarTarefaPorTitulo(titulo) {
        return this.tarefas.find(tarefa => tarefa.titulo === titulo) || "Tarefa não encontrada"
    }

    buscarTarefaPorStatus(status) {
        return this.tarefas.find(tarefa => tarefa.status === status) || "Tarefa não encontrada"
    }

    buscarTarefaPorPrazo(prazo) {
        return this.tarefas.find(tarefa => tarefa.prazo === prazo) || "Tarefa não encontrada"
    }

    removerTarefa(titulo) {
        let index = this.tarefas.findIndex(tarefa => tarefa.titulo === titulo)
        if (index !== -1) {
            this.tarefas.splice(index, 1)
            return "Tarefa removida"
        }
        return "Tarefa não encontrada ou inexistente"
    }

    alterarStatus(titulo, novoStatus) {
        let tarefa = this.buscarTarefaPorTitulo(titulo)
        let statusPermitidos = ["pendente", "concluida", "em andamento"]
        if (typeof tarefa === "object" && statusPermitidos.includes(novoStatus)){
            tarefa.status = novoStatus
            return "Status atualizado"
        }
        return "Tarefa não encontrada ou status não permitido"
    }

    alterarPrazo(titulo, novoPrazo) {
        let tarefa = this.buscarTarefaPorTitulo(titulo)
        if (typeof tarefa === "object") {
            tarefa.prazoVenc = novoPrazo
            return "Prazo atualizado"
        }
        return "Tarefa não encontrada"
    }
}

module.exports = gerenciadorDeTarefas

let gerenciador = new gerenciadorDeTarefas()

let tarefa1 = new tarefa("POO", "herança", "Tarefa sobre herança", "23/12/2024", "em andamento")
gerenciador.cadastrarTarefa(tarefa1)

let tarefaBuscada = gerenciador.buscarTarefaPorTitulo("herança")
console.assert(tarefaBuscada.titulo === "herança", "Erro: tarefa não encontrada")

let tarefaInexistente = gerenciador.buscarTarefaPorTitulo("Banco de Dados")
console.assert(tarefaInexistente === "Tarefa não encontrada", "Erro: resposta incorreta")

let remover = gerenciador.removerTarefa("herança")
console.assert(remover === "Tarefa removida", "Erro: tarefa não removida")
console.assert(gerenciador.tarefas.length === 0, "Erro:tarefa não removida")

tarefa1 = new tarefa("POO", "herança", "Tarefa sobre herança", "23/12/2024", "em andamento")
gerenciador.cadastrarTarefa(tarefa1)

let altStatus = gerenciador.alterarStatus("herança", "concluida")
console.assert(altStatus === "Status atualizado", "Erro: status não foi alterado")
console.assert(tarefa1.status === "concluida", "Erro:status não foi atualizado")

let statusInvalido = gerenciador.alterarStatus("herança", "completo")
console.assert(statusInvalido === "Tarefa não encontrada ou status não permitido", "Erro:status invalido foi aceito")

let alterarPrazo = gerenciador.alterarPrazo("herança", "24/12/2024")
console.assert(alterarPrazo === "Prazo atualizado", "Erro: o prazo não foi alterado")
console.assert(tarefa1.prazoVenc === "24/12/2024", "Erro: prazo da tarefa não foi atualizado")

let resultadoInexistente = gerenciador.alterarPrazo("Banco de Dados", "25/12/2024")
console.assert(resultadoInexistente === "Tarefa não encontrada", "Erro: A tarefa inexistente foi encontrada ao tentar alterar o prazo")