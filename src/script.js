const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

let listaItens = []

function adicionarNovaTarefa() {
    listaItens.push(input.value)

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    listaItens.forEach(tarefas)

 novaLi = novaLi +`
        <li class="task">
        <img src="../src/img/verificado.png" alt="check-na-tarefa">
        <p>${tarefas}</p>
        <img src="./img/circulo.png" alt="excluir-tarefa">
    </li>`

}

button.addEventListener('click', adicionarNovaTarefa)
