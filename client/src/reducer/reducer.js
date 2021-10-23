import {  GET_TASK, POST_TASK, PUT_TASK, GET_USER, POST_USER, PUT_USER } from'../action/constrain'

const initialState = {
    Tasks: [],
    User: {},
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case GET_TASK:
            return {
                ...state,
                Tasks: action.payload
            }

        case POST_TASK:
            return {
                ...state,
                Tasks: [...state.Tasks, action.payload]
            }
            
        case PUT_TASK:
            return {
                ...state,
                Taks: state.Taks.map(e => {

                    if(e.id === action.payload.id) {

                        return action.payload
                    }else {
                        return e
                    }
                })
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