import React, { useEffect, useState, useRef } from "react";

const RefFirstUseCase = () => {
  const [company, setCompany] = useState("");
  const countRef = useRef(1);

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  useEffect(() => {
    countRef.current = countRef.current + 1;
  }, [company]);

  return (
    <>
      {console.log("component is re-rendering")}
      <br />
      <div>First Use Case: Page re-rendered {countRef.current} times</div>

      <input
        type="text"
        value={company}
        placeholder="Company"
        onChange={(e) => handleCompany(e)}
      />
    </>
  );
};

export default RefFirstUseCase;
