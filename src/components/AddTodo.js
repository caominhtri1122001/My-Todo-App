import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ""
    }
    render() {
        return (
            <form className="form-container" onSubmit={this.AddNewTodo}>
                <input type='text' 
                    placeholder="Add todo..." 
                    className="input-text"
                    value={this.state.title}
                    onChange={this.onInputChange}>
                </input>
                <input type='submit' value="Submit" className="input-submit"></input>
            </form>
        );
    }
    onInputChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    AddNewTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title:""
        })
    }
}

export default AddTodo