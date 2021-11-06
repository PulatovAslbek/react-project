import React from "react";
import "./TodoItem.css";

function Todo(props) {

  const { content, id } = props;

  return (
      <>
      <p>{content}</p>
      <button className="delete-button" onClick={() => props.delete(id)}>Delete</button>
    </>
  );
}

export default Todo;
