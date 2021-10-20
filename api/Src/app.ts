import express, { Application } from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app: Application = express()


export default function App(port: String | Number){

    app.set('port',process.env.URL || port || 3001)

    app.listen( app.get('port'), () => console.log('listening on port'))
}