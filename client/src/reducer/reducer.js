import {  GET_TASK_PENDING, GET_TASK_COMPLETED, POST_TASK, PUT_TASK, GET_USER, POST_USER, PUT_USER } from'../action/constrain'

const initialState = {
    Task: [],
    Task_complete: [],
    Task_pending: [],
    User: {},
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case GET_TASK_COMPLETED: 
            return{
                ...state,
                Task_complete: action.payload
            }

        case GET_TASK_PENDING:
            return {
                ...state,
                Task_pending: action.payload
            }

        case POST_TASK:
            return {
                ...state,
                Tasks: [...state.Tasks, action.payload]
            }
            
        case PUT_TASK:

            if(action.payload.status === true){

                
                return {
                    ...state,
                    Taks: state.Task_complete.map(e => {
    
                        if(e.name === action.payload.name) {
    
                            return action.payload
                        }else {
                            return e
                        }
                    })
                }
            }else{

                return {
                    ...state,
                    Taks: state.Task_pending.map(e => {
    
                        if(e.name === action.payload.name) {
    
                            return action.payload
                        }else {
                            return e
                        }
                    })
                }
            }
        
        case GET_USER: 
            return {
                ...state,
                User: action.payload
            }
        

        case POST_USER:
            return {
                ...state,
                User: action.payload
            }
        
        case PUT_USER: 
            return {
                ...state,
                User: action.payload
            }
            
        default:
            return state
    }
}