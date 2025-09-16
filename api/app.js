import express from 'express';
import router from './routes/tarefasRoutes.js';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', router)

app.listen(port, ()=>{
    console.log(`Server is running in http://localhost:${port}`);
    
})