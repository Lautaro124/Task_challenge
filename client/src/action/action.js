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
    TASK_EDIT
 } from'./constrain'
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
        const task = await axios.post(`${URL}/Task`, {name, img: url, description})

        return dispatch({
            type: POST_TASK,
            payload: task.data
        })
    }
}
export const putTask = (idTask, change) => {

    return async function (dispatch) {

        try{

            const task = await axios.put(`${URL}/Task/${idTask}`, {...change})

            return dispatch({
                type: PUT_TASK,
                payload: task.data,
            })

        }
        catch(err){

            console.log(err)
        }
    }
}

export const getUser = (email, password) => {

    return async function (dispatch){

        try{

            const user = await axios.get(`${URL}/User/${email}/${password}`)

            return dispatch({
                type: GET_USER,
                payload: user.data
            })
        }
        catch(err){
            console.log(err)
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
    
            return dispatch({
                type: POST_USER,
                payload: user.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const logOut = () => {

    return function (dispatch){

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