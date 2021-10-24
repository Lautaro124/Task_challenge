import express, {Request, Response} from "express"
import { getUser, postUser, putUser, getUserId } from '../functions'

const router = express()

router.get('/', async (req: Request, res: Response, next: any) => {

    const { email, password } = req.body
    try{ 
        let user = await getUser(email, password)

        res.json(user)
    }
    catch(err){

        next(err)
    }
})

router.get('/:id', async (req: Request, res: Response, next: any) => {

    const id = req.params.id

    try{

        let user = await getUserId(id)

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