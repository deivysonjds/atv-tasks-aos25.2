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
    let index = tarefasList.findIndex(tarefa => objectId === tarefa.objectId);
    if (index === -1){
        throw new Error('Tarefa não localizada');
    }

    if (novaTarefa.concluida !== undefined) tarefasList[index].concluida = novaTarefa.concluida
    if (novaTarefa.descricao !== undefined) tarefasList[index].descricao = novaTarefa.descricao
    
    return tarefasList[index]

}

export {
    criarTarefa,
    listarTarefas,
    mostrarTarefaPeloId,
    deletarTarefaPorId,
    modificarTarefa
};
