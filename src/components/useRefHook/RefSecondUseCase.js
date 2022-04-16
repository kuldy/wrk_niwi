import React, { useState, useEffect, useRef } from "react";

const RefSecondUseCase = () => {
  const [company, setCompany] = useState("");
  const countRef = useRef();

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  useEffect(() => {
    countRef.current = company;
  }, [company]);

  return (
    <>
      <br />
      <div>Second Use Case: it Can hold the previous value of a state</div>
      <div>current value: {company}</div>
      <div>previous value: {countRef.current}</div>
      <input
        type="text"
        value={company}
        placeholder="Company"
        onChange={(e) => handleCompany(e)}
      />
    </>
  );
};

export default RefSecondUseCase;
