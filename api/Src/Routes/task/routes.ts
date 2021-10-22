import express, { Request, Response } from "express"
import { getTask, postTask, putTask } from '../functions'

const router = express()

router.use(express.json());

router.get('/', async (req: Request, res: Response, next: any) => {

    try{
        let task = await getTask()

        res.json(task)
    }
    catch(err){
        
        next(err)
    }
})


router.post('/', async (req: Request, res: Response, next: any) => {
    
    const { name, img, status, reference } = req.body

    try{

        let task = await postTask(name, img, status, reference)

        res.json(task)
    }
    catch(err){

        next(err)
    }
})

router.put('/:id', async (req: Request, res: Response, next: any) => {

    const idTask = req.params.id
    const { name, img, status, reference } = req.body

    try {
        let task = await putTask( idTask, name, img, status, reference )

        res.json(task)
    }
    catch(err){

        next(err)
    }
})


export default router