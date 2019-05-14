
import {ADD, TOGGLE} from '../actions'

const initialState = {
    todos:[]
}

export default (state=initialState, action) => {
    switch(action.type) {
        case ADD: 
            return {
                todos:[...state.todos, action.payload]
            }

        case TOGGLE:
            return {
                todos: state.todos.map( todo => {
                        if(todo.value === action.payload)
                            return {
                                ...todo, completed: !todo.completed
                            }
                        else
                            return todo;
                        }
                        
                    )
            }
        

        default:
            return state
    }
}