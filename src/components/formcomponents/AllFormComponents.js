import React from "react";
import AppInput from "./AppInput";

const AllFormComponents = () => {
  return (
    <>
      <hr />
      <AppInput
        name={"firstName"}
        label={"Enter Name"}
        className={"input"}
        placeholder={"First Name"}
      />
    </>
  );
};

export default AllFormComponents;
