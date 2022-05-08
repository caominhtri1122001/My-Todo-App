import React , {useState} from "react";

function AddTodo (props) {
    const [title, setTitle] = useState("");

    const onInputChange = (e) => {
        setTitle(e.target.value)
    }
    const AddNewTodo = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle("");
    }

    return (
        <form className="form-container" onSubmit={AddNewTodo}>
            <input type='text' 
                placeholder="Add todo..." 
                className="input-text"
                value={title}
                onChange={onInputChange}>
            </input>
            <input type='submit' value="Submit" className="input-submit"></input>
        </form>
    );
}

export default AddTodo