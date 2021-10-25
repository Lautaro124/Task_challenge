import { TaskModel, UserModel } from '../Modules/modules'
import { validationEmail, validationUrl, validatePassword } from './validates'
import argon2 from 'argon2'

export const getTask = async () => {
  
    let model = await TaskModel.find().lean()
    
    return model
}

export const postTask = async (name: string, img: string, status: Boolean, reference?: string) => {

    let urlValidate: Boolean = validationUrl(img)

    if(urlValidate){

        if(reference){

            await TaskModel.create({name, img, status, reference})
        
            return {name, img, status, reference}
        }
        else{ 

            await TaskModel.create({name, img, status})
        
            return {name, img, status}
        }
    }
    else{
        return 'Parametros incorrectos'
    }
}

export const putTask = async (idTask: string, name: string, img: string, status: string | boolean , reference: any ) => {

    let urlValidate: Boolean = validationUrl(img)

    if(urlValidate){
        
        await TaskModel.findByIdAndUpdate(idTask, {name, img, status, reference})

        return {name, img, status, reference}
    }
    else{ 

        return 'Parametros incorrectos'
    }
}

export const getUser = async (email: string, password: string)=> {

    let user = await UserModel.findOne({ email }).lean()

    let validate = await validatePassword(password, user);

    if(validate) {

        return {...user, password}
    }
    return 'usuario no encontrado'
}

export const getUserId = async () => {

    let user = await UserModel.find().lean()

    return user
}

export const postUser = async (firstName: string, lastName: string ,email: string, password: string) => {

    let emailValidate= validationEmail(email)

    if(emailValidate){

        console.log('aqui')
        let hash = await argon2.hash(password);

        await UserModel.create({firstName, lastName, email, password: hash})

        return {firstName, lastName, email, password: hash}
    }
}

export const putUser = async (idUser: string, firstName: string, lastName: string, email: string, password: string) => {

    let emailValidate= validationEmail(email)

    if(emailValidate){
        
        let hash = await argon2.hash(password);

        await TaskModel.findByIdAndUpdate(idUser, {firstName, lastName, email, password: hash})
        
        return {firstName, lastName, email, password: hash}
    }
    else{ 

        return 'Parametros incorrectos'
    }
}