import express, { Application, Request, Response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import UserRoute from './Routes/user/routes'
import TaskRoute from './Routes/task/routes'
import bodyParser from "body-parser"
import cookieparser from 'cookie-parser'
import argon2 from 'argon2'

dotenv.config()

const cors = (req: Request, res: Response, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}

const conect = async (): Promise<void>  => {
    const url: string | undefined = process.env.URL? process.env.URL :'mongodb+srv://chucho:Malditapaloma1@portafolio.t6haw.mongodb.net/ChallengeTest'
    
    await mongoose.connect(`${url}`)
}

export default function App(port: String | Number){
    
    const app: Application = express()
    
    conect().then(()=> console.log('Data base conected')).catch( err => console.log(err))
    
    app.set('port', port || 3001)
    

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(morgan('dev'))
    app.use(cookieparser())
    app.use(cors)

    app.use('/User', UserRoute)
    app.use('/Task', TaskRoute)

    app.listen( app.get('port'), () => console.log('listening on port', port))
}