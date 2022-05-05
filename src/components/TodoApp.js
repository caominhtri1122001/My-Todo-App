import React from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development enviroment",
                completed: true,
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false,
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false,
            },
        ]
    }

    render() {
    return (
        <div className="container">
            <Header/>
            <AddTodo addTodo={this.addTodo}/>
            <Todos 
                todos={this.state.todos} 
                handleChange={this.handleCheckboxChange}
                handleDelete={this.deleteTodo}
            />
        </div>
        );
    }

    handleCheckboxChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if( todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    deleteTodo = (id) => {
        console.log("deleted", id);
        this.state.todos.splice(id-1,1)
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    }
    addTodo = title =>{
        const newTodo = {
            id: 4,
            title: title,
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos,newTodo]
        })  
    }
}
export default TodoApp;