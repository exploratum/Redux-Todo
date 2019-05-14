import React from 'react'
import { connect } from 'react-redux'
import { toggleComplete } from '../actions'



const Todo = (props) => {

    //Check the completed state in the store and strike through accordingly
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

    return (
        <div className={`todo ${lineThrough()}`} onClick={handleClick} >
            {props.todo.value}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos
//     }
// }


export default connect(null, {toggleComplete}) (Todo);