import React, { useEffect, useState } from "react";

const WindowsResizeEvent = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("this block equivalent to componentwillunmount");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <br />
      <p>Getting the current width of window on resize {width}</p>
    </>
  );
};

export default WindowsResizeEvent;
