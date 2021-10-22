import express, {Request, Response} from "express"
import { getUser, postUser, putUser } from '../functions'

const router = express()

router.get('/:id', async (req: Request, res: Response, next: any) => {

    try{ 
        let user = await getUser(req.params.id)

        res.json(user)
    }
    catch(err){

        next(err)
    }
})

router.post('/', async (req: Request, res: Response, next: any) => {

    const {firstName, lastName, email, img, password}= req.body

    try{ 
        let user = await postUser(firstName, lastName, email, img, password)

        res.json(user)
    }
    catch(err){
        next(err)
    }
})

router.put('/:id', async (req: Request, res: Response, next: any) => {

    const { firstName, lastName, email, img, password } = req.body

    const idUser = req.params.id

    try{

        let user = await putUser(idUser, firstName, lastName, email, img, password)

        res.json(user)
    }
    catch(err){
        next(err)
    }
})

export default router