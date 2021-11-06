import React from "react";
import "./Form.css";

const Form = ({ userInput, onInputChange, addItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
  <>
    <div>
      <h1 className="todo-header"> Todo List</h1>
    </div>
       
    <form className="input" onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={onInputChange} className="form-control" />
        <button onClick={addItem} className="btn btn-primary">Add</button>
    </form>
  </>
  );
};

export default Form;
