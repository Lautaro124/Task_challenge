import { 
    URL,GET_TASK_PENDING, 
    GET_TASK_COMPLETED, 
    GET_USER_ID, 
    POST_TASK, 
    PUT_TASK, 
    GET_USER, 
    POST_USER, 
    LOG_OUT, 
    LOGIN_AUTO,
    TASK_EDIT,
    TASK_CHECK
} from'./constrain'
import swal from 'sweetalert'
import axios from 'axios'

export const getTaskCompleted = () => {

    return async function (dispatch){

        try{

            const task = await axios.get(`${URL}/Task/completed`)
    
            return dispatch ({
                type: GET_TASK_COMPLETED,
                payload: task.data
            })
        }
        catch (err) {

            console.log(err)
        }
    }
}

export const getTaskPending = () => {

    return async function (dispatch){

        try{

            const task = await axios.get(`${URL}/Task/pending`)
    
            return dispatch ({
                type: GET_TASK_PENDING,
                payload: task.data
            })
        }
        catch (err) {

            console.log(err)
        }
    }
}

export const postTask = (name, url, description) => {

    return async function (dispatch){

        try{
            
            const task = await axios.post(`${URL}/Task`, {name, img: url, description})
            const  incompleteTask = await axios.get(`${URL}/Task/pending`)
            const completeTask = await axios.get(`${URL}/Task/completed`)

            const tasks_incomplete = incompleteTask.data.map(e => {
                if(e._id === task.data._id){
                    return task.data
                }
                else{
                    return e
                }
            })

            swal({ 
                title: 'Tarea creada',
                text: 'Tarea creada exitosamente',
                icon: 'success',
                button: 'Aceptar'
            })
            return dispatch({
                type: POST_TASK,
                payload: {
                    tasks_complete: completeTask.data,
                    tasks_incomplete,
                }
            })
        }
        catch(err) {
            swal({ 
                title: 'Tarea no creada',
                text: err.message,
                icon: 'error',
                button: 'Aceptar'
            })
        }
    }
}


export const checktask = (idTask, change) => {

    return async function (dispatch){

        try{
            
            const task = await axios.put(`${URL}/Task/${idTask}`, {...change})
            const  incompleteTask = await axios.get(`${URL}/Task/pending`)
            const completeTask = await axios.get(`${URL}/Task/completed`)

            const tasks_complete = completeTask.data.map(e => {
                if(e._id === task.data._id){
                    return task.data
                }
                else{
                    return e
                }
            })
            swal({ 
                title: 'Tarea creada',
                text: 'Tarea creada exitosamente',
                icon: 'success',
                button: 'Aceptar'
            })
            return dispatch({
                type: TASK_CHECK,
                payload: {
                    tasks_complete,
                    tasks_incomplete: incompleteTask.data
                }
            })
        }
        catch(err) {
            swal({ 
                title: 'Tarea no creada',
                text: err.message,
                icon: 'error',
                button: 'Aceptar'
            })
        }
    }
}
export const putTask = (idTask, change) => {

    return async function (dispatch) {

        try{
            
            const task = await axios.put(`${URL}/Task/${idTask}`, {...change})
            const  incompleteTask = await axios.get(`${URL}/Task/pending`)
            const completeTask = await axios.get(`${URL}/Task/completed`)

            const tasks_complete = completeTask.data.map(e => {
                if(e._id === task.data._id){
                    return task.data
                }
                else{
                    return e
                }
            })
            swal({ 
                title: 'Tarea creada',
                text: 'Tarea creada exitosamente',
                icon: 'success',
                button: 'Aceptar'
            })
            return dispatch({
                type: PUT_TASK,
                payload: {
                    tasks_complete,
                    tasks_incomplete: incompleteTask.data
                }
            })
        }
        catch(err){

            swal({ 
                title: 'Tarea no cambiada',
                text: err.message,
                icon: 'error',
                button: 'Aceptar'
            })
        }
    }
}

export const getUser = (email, password) => {

    return async function (dispatch){

        try{

            const user = await axios.get(`${URL}/User/${email}/${password}`)

            swal({ 
                title: 'Te logueaste',
                text: 'Espero que la pases bien en mi pagina',
                icon: 'success',
                button: 'Aceptar'
            })

            return dispatch({
                type: GET_USER,
                payload: user.data
            })
        }
        catch(err){
            swal({ 
                title: 'Email o contraseña incorrectos',
                text: err.message,
                icon: 'error',
                button: 'Aceptar'
            })
        }
    }
}

export const getUserAll = () => {

    return async function (dispatch){

        try{

            const user = await axios.get(`${URL}/User`)
    
            return dispatch ({
                type: GET_USER_ID,
                payload: user.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const postUser = (firstName, lastName, email, password) => {

    return async function (dispatch){

        try{
            const user = await axios.post(`${URL}/User`, {firstName, lastName, email, password})
    
            swal({ 
                title: 'Registrado :D',
                text: 'Bienvenido, ten linda estadia aqui',
                icon: 'success',
                button: 'Aceptar'
            })

            return dispatch({
                type: POST_USER,
                payload: user.data
            })
        }
        catch(err){
            swal({ 
                title: 'No te haz registrado',
                text: err.message,
                icon: 'error',
                button: 'Aceptar'
            })
        }
    }
}

export const logOut = () => {

    return function (dispatch){

        swal({ 
            title: 'Te deslogueaste',
            text: 'Noo, no te vallas :,c',
            icon: 'warning',
            button: 'Aceptar'
        })

        return dispatch({
            type: LOG_OUT
        })
    }
}

export const autoLogin = (user) => {

    return function (dispatch) {

        return dispatch({
            type: LOGIN_AUTO,
            payload: user
        })
    }
}

export const taskEdit = (task) => {

    return function (dispatch) {

        return dispatch({
            type: TASK_EDIT,
            payload: task
        })
    }
}