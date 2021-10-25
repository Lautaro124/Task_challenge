import express, { Request, Response } from "express"
import { getTask, postTask, putTask, getUserId } from '../functions'

const router = express()

router.use(express.json());

router.get('/pending', async (req: Request, res: Response, next: any) => {

    try{
        let task = await getTask()

        let arrFilter = task.filter( e => e.status === false)

        res.json(arrFilter)
    }
    catch(err){
        
        next(err)
    }
})

router.get('/completed', async (req: Request, res: Response, next: any) => {

    try{
        let task = await getTask()

        let arrFilter = task.filter( e => e.status === true)

        res.json(arrFilter)
    }
    catch(err){
        
        next(err)
    }
})

router.post('/', async (req: Request, res: Response, next: any) => {
    
    const { name, img, reference } = req.body

    try{
        console.log({ name, img, reference })

        let task = await postTask(name, img, false, reference)

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