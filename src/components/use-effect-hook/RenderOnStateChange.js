import React, { useEffect, useState } from "react";

const RenderOnStateChange = () => {
  const [a, setA] = useState(true);
  // console.log("page rendering");

  useEffect(() => {
    console.log("code inside use effect executed");
  });

  const handleClickToRender = () => {
    setA(!a);
  };

  return (
    <>
      <p>
        1- it runs each time as page renderes if dependency array is not
        specified <button onClick={handleClickToRender}>click to render</button>
      </p>
    </>
  );
};

export default RenderOnStateChange;
