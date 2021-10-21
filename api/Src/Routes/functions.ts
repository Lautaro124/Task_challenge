import { TaskModel, UserModel } from '../Modules/modules'
import { validationEmail, validationUser, validationUrl } from './validates'

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

    return 'No pase por aca'
}

export const putTask = async (id: string, body: Object) => {

}
