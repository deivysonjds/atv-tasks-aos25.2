import { Router } from "express";
import {
    criarTarefa,
    listarTarefas,
    mostrarTarefaPeloId,
    deletarTarefaPorId,
    modificarTarefa} from '../controllers/tarefasController.js'

const router = Router();

router.get("/", (req, res)=>{
    return res.status(200).json(listarTarefas)
})

router.get("/:objectId", (req, res)=>{
    const objectId = req.params.objectId
    let tarefa = mostrarTarefaPeloId(objectId)
    if (tarefa === null) return res.status(404).send("Tarefa não localizado");
    return res.status(200).json(tarefa)
})

router.post("/", (req, res)=>{
    const {descricao, concluida} = req.body
    if (descricao===undefined) return res.status(400).send("Descrição não informada")
    
    try {
        let tarefa = criarTarefa(descricao, concluida);
        return res.status(201).json(tarefa);
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.delete("/:objectId", (req, res)=>{
    const objectId = req.params.objectId

    let deletado = deletarTarefaPorId(objectId)
    if (!deletado){
        return res.status(404).send("Tarefa não encontrada")
    }
    res.status(200)
})

router.put("/:objectId", (req, res)=>{
    const objectId = req.params.objectId
    const data = req.body

    try {
        let tarefa = modificarTarefa(objectId, data);
        return res.status(200).send(tarefa)
    } catch (error) {
        return res.status(404).send("Tarefa não localizada")
    }
})

export default router;