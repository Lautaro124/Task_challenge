import {  GET_TASK_PENDING, GET_TASK_COMPLETED, GET_USER_ID, POST_TASK, PUT_TASK, GET_USER, POST_USER, LOG_OUT } from'../action/constrain'

const initialState = {
    Task: [],
    Task_complete: [],
    Task_pending: [],
    User: {},
    Users: []
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

        case GET_USER_ID:

            return {
                ...state,
                Users: action.payload
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
            localStorage.user = JSON.stringify(action.payload)
            return {
                ...state,
                User: action.payload
            }
        

        case POST_USER:
            localStorage.user = JSON.stringify(action.payload)
            return {
                ...state,
                User: action.payload
            }
        
        case LOG_OUT: 
            localStorage.clear()
            return {
                ...state,
                User: {}
            }
            
        default:
            return state
    }
}