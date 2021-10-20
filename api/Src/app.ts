import express, { Application } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { TaskModel } from './Modules/modules'

dotenv.config()


const conect = async (): Promise<void>  => {
    const url: string | undefined = process.env.URL
    
    await mongoose.connect(`${url}`)
}

export default function App(port: String | Number){
    
    const app: Application = express()
    
    conect().then(()=> console.log('Data base conected')).catch( err => console.log(err))

    app.set('port', port || 3001)
    app.listen( app.get('port'), () => console.log('listening on port', port))
}