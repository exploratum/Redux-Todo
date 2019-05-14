export const DELETE = 'DELETE';
export const deleteTodo = (value) => {
    return {
        type: DELETE,
        payload: value
    }
}

export const ADD = 'ADD';
export const addTodo = (todo) => {
    return {
        type: ADD,
        payload: todo
    }
}

export const TOGGLE = 'TOGGLE'
export const toggleComplete = (value) => {
    return {
        type: TOGGLE,
        payload: value
    }
}