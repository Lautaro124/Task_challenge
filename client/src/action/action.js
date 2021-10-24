import { URL,GET_TASK_PENDING, GET_TASK_COMPLETED, GET_USER_ID, POST_TASK, PUT_TASK, GET_USER, POST_USER, PUT_USER } from'./constrain'
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

export const getUserId = (id) => {

    return async function (dispatch){

        try{

            const user = await axios.get(`${URL}/User/${id}`)
    
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