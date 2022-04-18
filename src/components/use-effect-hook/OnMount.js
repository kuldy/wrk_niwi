import React, { useEffect, useState } from "react";

const OnMount = () => {
  const [a, setA] = useState(true);
  useEffect(() => {
    console.log("componet did mount runs only one");
  }, []);
  const handleChangeState = () => {
    setA(!a);
  };
  return (
    <>
      <p>
        2- use effect can be used as component did mount of class component when
        initialized with empty dependency array. So the function inside it runs
        only once. And it dont runs even if the component re-renders{" "}
        <button onClick={handleChangeState}>Change State</button>
      </p>
    </>
  );
};

export default OnMount;
