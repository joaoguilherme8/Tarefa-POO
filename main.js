const prompt = require("prompt-sync")()
const tarefa = require("./tarefa.js")
const tarefaPratica = require("./tarefapratica.js")
const tarefaRevisao = require("./tarefarevisao.js")
const tarefaTeorica = require("./tarefateorica.js")
const gerenciadorDeTarefas = require("./gerenciador.js")

let gerenciador = new gerenciadorDeTarefas()

function cadastrarTarefa() {
    let categoria = prompt("Categoria de tarefa (teorica, pratica, revisao): ")
    let titulo = prompt("Titulo: ")
    let descricao = prompt("Descrição: ")
    let prazo = prompt("Prazo: ")
    let disciplina = prompt("Disciplina: ")
    let status = prompt("Status (pendente, concluida ou em andamento): ")

    let novaTarefa = ""

    if (categoria === "teorica") {
        let numerodepaginas = parseInt(prompt("Número de páginas: "))
        novaTarefa = new tarefaTeorica(disciplina, titulo, descricao, prazo, status, numerodepaginas)
    } else if (categoria === "pratica") {
        let qtdExercicios = parseInt(prompt("Quantidade de exercicios: "))
        novaTarefa = new tarefaPratica(disciplina, titulo, descricao, prazo, status, qtdExercicios)
    } else if (categoria === "revisao") {
        let assuntos = prompt("assuntos: ")
        novaTarefa = new tarefaRevisao(disciplina, titulo, descricao, prazo, status, assuntos)
    } else {
        return console.log("categoria inválida")
    }
    gerenciador.cadastrarTarefa(novaTarefa)
    console.log("Tarefa adicionada com sucesso!")
}

function listarTarefas() {
    console.log("----Lista de Tarefas----")
    console.log(gerenciador.listarTarefas())
}

function buscarTarefa() {
    let busca = prompt("Pelo que voce deseja buscar a tarefa? (Titulo, Prazo ou Status): ")

    if(busca === "Titulo"){
        let buscartitulo = prompt("Digite o titulo: ")
        console.log(gerenciador.buscarTarefaPorTitulo(buscartitulo))
    } else if(busca === "Status"){
        let buscarstatus = prompt("Digite o status: ")
        console.log(gerenciador.buscarTarefaPorStatus(buscarstatus))
    } else if(busca === "Prazo"){
        let buscarprazo = prompt("Digite o prazo: ")
        console.log(gerenciador.buscarTarefaPorStatus(buscarprazo))
    } else {
       return console.log("Busca inválida")
    }
}

function removerTarefa() {
    let removerTitulo = prompt("Digite o título da tarefa a ser removida: ")
    console.log(gerenciador.removerTarefa(removerTitulo))
}

function sair() {
    console.log("Saindo...")
    process.exit()
}

function alterarPrazo() {
    let titulo = prompt("Digite o título da tarefa para atualizar o prazo: ")
    let novoPrazo = prompt("Digite o novo prazo: ")
    console.log(gerenciador.alterarPrazo(titulo, novoPrazo))
}

function alterarStatus() {
    let titulo = prompt("Digite o título da tarefa para alterar o status: ")
    let novoStatus = prompt("Digite o novo status (pendente, concluida, em andamento): ")
    console.log(gerenciador.alterarStatus(titulo, novoStatus))
}

function menu() {
    console.log("1. Cadastrar tarefa")
    console.log("2. Listar tarefas")
    console.log("3. Buscar tarefa por Titulo/Prazo/Status")
    console.log("4. Remover tarefa")
    console.log("5. Atualizar prazo")
    console.log("6. Alterar status")
    console.log("7. Sair")

    const escolha = prompt("Escolha uma opção: ")

    if (escolha == 1) {
        cadastrarTarefa()
    }
    else if (escolha == 2) {
        listarTarefas()
    }
    else if (escolha == 3) {
        buscarTarefa()
    }
    else if (escolha == 4) {
        removerTarefa()
    }
    else if (escolha == 5) {
        alterarPrazo()
    }
    else if (escolha == 6) {
        alterarStatus()
    }
    else if (escolha == 7) {
        sair()
    }
    else {
        console.log("Ação invalida")
    }

    menu()
}

menu()