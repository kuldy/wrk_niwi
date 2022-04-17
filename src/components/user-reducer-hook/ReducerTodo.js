import React, { useReducer, useState } from "react";
import Todo from "./Todo";
export const ACTIONS = {
  ADDTODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return [...todos, action.payload];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const ReducerTodo = () => {
  const [name, setName] = useState("");
  const initialState = [];
  const [todos, dispatch] = useReducer(reducer, initialState); //for handeling complex state

  const handleTodo = (e) => {
    setName(e.target.value);
  };

  const makeTodo = (name) => {
    return { id: Date.now(), name: name, completed: false };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADDTODO, payload: makeTodo(name) });
    setName("");
  };
  return (
    <>
      {/* {console.log(todos)} */}
      <div>Todo Example</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleTodo} />
      </form>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
};

export default ReducerTodo;
