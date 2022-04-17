import React, { useReducer } from "react";
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT: {
      // return { count: state.count + 1 };
      let count = state.count + 1;
      return { ...state, count };
    }
    case ACTIONS.DECREMENT: {
      // return { count: state.count - 1 };
      let count = state.count - 1;
      return { ...state, count };
    }
    default:
      return state;
  }
};

const ReducerCounter = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState); //for handeling complex state
  const handleIncrement = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const handleDecriment = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <>
      <div>Counter Example</div>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <span>{state.count}</span>{" "}
      <button onClick={handleDecriment}>Decriment</button>
    </>
  );
};

export default ReducerCounter;
