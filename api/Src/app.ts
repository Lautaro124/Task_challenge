import express, { Application } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import UserRoute from './Routes/user/routes'
import TaskRoute from './Routes/task/routes'


dotenv.config()


const conect = async (): Promise<void>  => {
    const url: string | undefined = process.env.URL
    
    await mongoose.connect(`${url}`)
}

export default function App(port: String | Number){
    
    const app: Application = express()
    
    conect().then(()=> console.log('Data base conected')).catch( err => console.log(err))
    
    app.set('port', port || 3001)
    
    app.use('/User', UserRoute)
    app.use('/Task', TaskRoute)
    app.use(morgan('dev'))

    app.listen( app.get('port'), () => console.log('listening on port', port))
}