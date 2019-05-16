
import {ADD, TOGGLE, DELETE, DELETEALLCOMPLETED} from '../actions'

const initialState = {
    todos:[{value: "Call for dental appointment", completed: false}]
}

export default (state=initialState, action) => {
    switch(action.type) {

        //Add new todo
        case ADD: 
            return {
                todos:[...state.todos, action.payload]
            }
        
        // Toggle targeted todo completed status 
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

        case DELETE:
        return {
            todos: state.todos.filter( todo => todo.value !== action.payload)
        }

        case DELETEALLCOMPLETED:
            return {
                todos: state.todos.filter(todo => !todo.completed)
            }


        default:
            return state
    }
}