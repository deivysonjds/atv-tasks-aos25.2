import {v4 as uuidv4} from 'uuid'

export default class Tarefa{
    constructor(descricao, concluida){
        this.objectId = uuidv4();
        this.descricao = descricao;
        this.conluida = concluida;
    }
}