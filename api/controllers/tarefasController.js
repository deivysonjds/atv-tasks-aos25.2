import Tarefa from "../models/Tarefa.js";

const tarefasList = [];

function criarTarefa(descricao, concluida){
    try {
        let novaTarefa = new Tarefa(descricao, concluida)
        tarefasList.push(novaTarefa)
        return novaTarefa;
    } catch (error) {
        throw error
    }
}

function listarTarefas(){
    return tarefasList;
}

function mostrarTarefaPeloId(objectId){
    return tarefasList.find(tarefa => objectId === tarefa.objectId) || null;
}

function deletarTarefaPorId(objectId){
    let index = tarefasList.findIndex(tarefa => objectId === tarefa.objectId);
    if(index > -1){
        tarefasList.splice(index,1)
        return true
    }
    return false
}

function modificarTarefa(objectId, novaTarefa){
    let tarefa = tarefasList.find(tarefa => objectId === tarefa.objectId);
    if (tarefa===null){
        throw new Error('Tarefa não localizada');
    }
    console.log(novaTarefa);
    
    if (novaTarefa.concluida !== undefined) tarefa.concluida = novaTarefa.concluida
    if (novaTarefa.descricao !== undefined) tarefa.descricao = novaTarefa.descricao
    
    return tarefa

}

export {
    criarTarefa,
    listarTarefas,
    mostrarTarefaPeloId,
    deletarTarefaPorId,
    modificarTarefa
};
