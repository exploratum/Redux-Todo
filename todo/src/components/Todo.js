import React from 'react'
import { connect } from 'react-redux'
import { toggleComplete, deleteTodo } from '../actions'



const Todo = (props) => {

    //Check the completed state in the store and strike through todo accordingly
    const lineThrough = () => {
        if (props.todo.completed)
            return 'strike-through';
        else
            return '';
    }
    
    //toggle todo completed status in the store when clicked
    const handleClick = () => {
        props.toggleComplete(props.todo.value)
    }

    const deleteTodo = (event) => {
        event.preventDefault();
        props.deleteTodo(props.todo.value);
    }

    return (
        <div className='todo' onClick={handleClick} >
            <p className={`${lineThrough()}`}>{props.todo.value}</p>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}


export default connect(null, {toggleComplete, deleteTodo}) (Todo);