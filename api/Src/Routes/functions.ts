import { TaskModel, UserModel } from '../Modules/modules'
import { validationEmail, validationUser, validationUrl } from './validates'
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

export const getUser = async (id: string)=> {

    let user = UserModel.findOne({_id: id}).lean()

    return user
}

export const postUser = async (firstName: string, lastName: string ,email: string, img: string, password: string) => {

    let emailValidate= validationEmail(email)
    let imgValidate = validationUrl(img)

    if(emailValidate && imgValidate){

        let hash = await argon2.hash(password);

        await UserModel.create({firstName, lastName, email, img, password: hash})

        return {firstName, lastName, email, img, password: hash}
    }
    else{
        return 'Parametros incorrectos'
    }
}