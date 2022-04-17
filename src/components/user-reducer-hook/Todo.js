import React from "react";
import { ACTIONS } from "./ReducerTodo";

const Todo = (props) => {
  const { todo, dispatch } = props;
  const handleToggle = () => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  };
  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
  };
  return (
    <>
      <div>
        <span style={{ color: todo.completed ? "red" : "#000" }}>
          {" "}
          {todo.name}{" "}
        </span>
        <button onClick={handleToggle}>Toggle</button>{" "}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default Todo;
