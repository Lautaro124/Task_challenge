import {  
    GET_TASK_PENDING, 
    GET_TASK_COMPLETED, 
    GET_USER_ID, 
    POST_TASK, 
    PUT_TASK, 
    GET_USER, 
    POST_USER, 
    LOG_OUT,
    LOGIN_AUTO,
    TASK_EDIT
} from'../action/constrain'

const initialState = {
    Task_complete: [],
    Task_pending: [],
    User: {},
    Users: [],
    Task: {}
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
                Task_pending: [...state.Task_pending, action.payload]
            }
            
        case PUT_TASK:

            if(action.payload.status === true){

                return {
                    ...state,
                    Task_complete: state.Task_complete.map(e => {
    
                        if(e.name === action.payload.name) {
    
                            return {...action.payload}
                        }else {
                            return e
                        }
                    })
                }
            }else{

                return {
                    ...state,
                    Task_pending: state.Task_pending.map(e => {
    
                        if(e.name === action.payload.name) {
    
                            return {...action.payload}
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
            
        case LOGIN_AUTO:
            return {
                ...state,
                User: action.payload
            }
        
        case TASK_EDIT:
            return {
                ...state,
                Task: action.payload
            }

        default:
            return state
    }
}