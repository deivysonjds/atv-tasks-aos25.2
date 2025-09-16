import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    res.send("todas as tasks")
})

router.get("/:id", (req, res)=>{
    const id = req.params.id
    res.send(`task ${id}`)
})

router.post("/", (req, res)=>{
    const data = req.body
    res.send(`new task ${data}`)
})

router.delete("/:id", (req, res)=>{
    const id = req.params.id
    res.send(`delete task ${id}`)
})

router.put("/:id", (req, res)=>{
    const id = req.params.id
    const data = req.body
    res.send(`put task ${id} - body ${data}`)
})

export default router;