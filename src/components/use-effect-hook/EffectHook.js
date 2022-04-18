import React, { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling";
import OnMount from "./OnMount";
import RenderOnStateChange from "./RenderOnStateChange";
import WindowsResizeEvent from "./WindowsEvent";

const EffectHook = () => {
  const [remove, setRemov] = useState(false);
  const handleRemove = () => {
    setRemov(!remove);
  };
  return (
    <>
      <hr />
      <div>Use Effect Hook</div>
      <RenderOnStateChange />
      <OnMount />
      <ApiCalling />
      {remove ? <WindowsResizeEvent /> : <p>the component is removed</p>}
      <button onClick={handleRemove}>Remove/Insert</button>
    </>
  );
};

export default EffectHook;
