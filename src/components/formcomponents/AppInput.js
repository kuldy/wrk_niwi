import React from "react";

const AppInput = ({ label, name, ...props }) => {
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input type="text" name={name} {...props} />;
    </>
  );
};

export default AppInput;
