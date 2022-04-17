import React from "react";
import ReducerCounter from "./ReducerCounter";
import ReducerTodo from "./ReducerTodo";

const ReducerHook = () => {
  return (
    <>
      <hr />
      <div>Usereducer hook</div>
      <br />
      <ReducerCounter />
      <br />
      <ReducerTodo />
    </>
  );
};

export default ReducerHook;
