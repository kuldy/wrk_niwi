import React, { useState } from "react";
import UseStateCounter from "./UseStateCounter";

const StateHook = () => {
  const [a, setA] = useState(0);
  const handleA = () => {
    setA((a) => a + 1);
  };

  //passing a function for default state
  const [state, setState] = useState(() => {
    // console.log("callback function runs only ones");
    return 5;
  });
  const countInitial1 = () => {
    // console.log("this one runs all the time");
    return 6;
  };
  const countInitial2 = () => {
    // console.log("this one runs only one time");
    return 7;
  };
  const [state1, setState1] = useState(countInitial1());
  const [state2, setState2] = useState(countInitial2);

  // setState(class) vs setState functional
  const initialState = {
    name: "kullu",
    age: 21,
    married: true,
  };
  const [details, setDetails] = useState(initialState);
  const handleChangeMartialStatus = () => {
    setDetails((details) => ({
      ...details,
      age: 25,
      married: !details.married,
    }));
  };

  //updating nested state
  const initialnestedState = {
    name: "ramu",
    age: 34,
    address: {
      city: "kld",
      pin: "272175",
    },
  };

  const [nestedState, setNestedState] = useState(initialnestedState);
  const handleChangeAddress = () => {
    setNestedState((prevNestedState) => ({
      ...prevNestedState,
      address: { ...prevNestedState.address, city: "gkp" },
    }));
  };

  return (
    <>
      {/* {a == 0
        ? console.log("initial render")
        : console.log("re-render clicked")} */}
      <hr />
      <div>Use State Hook</div>
      <p>
        1- It will be written at the top level of functional component means it
        cannot go inside if block, loops function etc
      </p>
      <p>
        when ever state changes the component containig that hook(state)
        re-renders
        <button onClick={handleA}>Re-render</button>
      </p>

      <br />
      <UseStateCounter />
      <p>
        2- there are two ways to pass the state to react usestate. 1-
        object/numbers 2-functions
      </p>
      <p>
        3- useState updates the state slightly diffrent than the setState of
        class componnets. setState of class overrides(merges) the property with
        the existing state while in setState of functional it overrides the
        value we pass with existing state. so we need to spread the existing
        state first and after that we mention the property with changes.
        <button onClick={handleChangeMartialStatus}>Change Details</button>
        {/* {console.log("personal details", details)} */}
      </p>
      <div>
        <p>Class: setState({"{property: updated_value}"})</p>
        <p>
          Functional: setState(state {"=>"} (
          {"{...state, property: updated_value}"}
          ))
        </p>
      </div>
      <p>
        4- updating a state with nested objects{" "}
        <button onClick={handleChangeAddress}>change address</button>
        {/* {console.log("nested state is ", nestedState)} */}
      </p>
      <p>
        5- tip instead of using a hook with complex state, use multiple hooks
        with simplyfied states
      </p>
    </>
  );
};

export default StateHook;
