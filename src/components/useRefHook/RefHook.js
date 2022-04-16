import React from "react";
import RefFirstUseCase from "./RefFirstUseCase";
import RefSecondUseCase from "./RefSecondUseCase";
import RefThirdUseCase from "./RefThirdUseCase";

const RefHook = () => {
  return (
    <>
      <hr />
      <div>useRef hook</div>
      <RefFirstUseCase />
      <RefSecondUseCase />
      <RefThirdUseCase />
    </>
  );
};

export default RefHook;
