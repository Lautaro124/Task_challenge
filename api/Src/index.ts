import App from './app'
import express from 'express'

import UserRoute from './Routes/user/routes'
import TaskRoute from './Routes/task/routes'


async function main () {
    
    await App(3001)
}

main()
const router = express.Router()

router.use('/user',UserRoute)
router.use('/task',TaskRoute)