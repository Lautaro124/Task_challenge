import express, { Application } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


const conect = async (): Promise<void>  => {
    const url: string | undefined = process.env.URL
    
    await mongoose.connect(`${url}`)
}

export default function App(port: String | Number){
    
    const app: Application = express()
    
    conect().catch( err => console.log(err))


    app.set('port', port || 3001)
    app.listen( app.get('port'), () => console.log('listening on port', port))
}