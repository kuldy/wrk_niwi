import React, { useState, useEffect, useRef } from "react";

const RefThirdUseCase = () => {
  const [company, setCompany] = useState("");
  const countRef = useRef();

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleFocus = () => {
    countRef.current.focus();
  };

  const handleValue = () => {
    console.log(countRef.current.value);
  };

  return (
    <>
      <br />
      <div>Third Use Case: </div>
      <div>
        1- it is used to get the value of input field{" "}
        <button onClick={handleValue}>Get Value</button>
      </div>
      <div>
        2- it can be used to focus on an input field by some event{" "}
        <button onClick={handleFocus}>Focus</button>
      </div>
      <input
        ref={countRef}
        type="text"
        placeholder="Company"
        onChange={(e) => handleCompany(e)}
      />
    </>
  );
};

export default RefThirdUseCase;
