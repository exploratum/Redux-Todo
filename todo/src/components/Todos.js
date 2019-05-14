import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo, addTodo } from '../actions'
import Todo from './Todo'



class Todos extends React.Component {

    state = {
        value: '',
        completed: false
    }

    componentDidMount() {
        console.log(this.props.todos)
    }

    handleInput = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state)
        this.setState({value: ''})
        }

    render() {
        return (
            <>
                <div className="todos">
                    {this.props.todos.map(todo => <Todo todo={todo} key={todo.value} />)}
                </div>
                <form onSubmit={this.handleSubmit} >
                    add todo: 
                    <input type="text" 
                        value={this.state.value} 
                        onChange={this.handleInput}
                    />

                    <button>submit</button>
                </form>
            </>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps, {deleteTodo, addTodo}) (Todos)