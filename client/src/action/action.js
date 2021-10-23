import { URL,GET_TASK, POST_TASK, PUT_TASK, GET_USER, POST_USER, PUT_USER } from'./constrain'
import axios from 'axios'

export const getTask = async () => {

    const task = await axios.get(`${URL}Task`)

    return {
        type: GET_TASK,
        payload: task.data
    }
}