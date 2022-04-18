import "./App.css";
import AllFormComponents from "./components/formcomponents/AllFormComponents";
import Formikk from "./components/formik/Formikk";
import EffectHook from "./components/use-effect-hook/EffectHook";
import RefHook from "./components/use-ref-hook/RefHook";
import StateHook from "./components/use-state-hook/StateHook";
import ReducerHook from "./components/user-reducer-hook/ReducerHook";

function App() {
  return (
    <div className="App">
      <h1>hello react</h1>
      <Formikk />
      <AllFormComponents />
      <RefHook />
      <ReducerHook />
      <StateHook />
      <EffectHook />
    </div>
  );
}

export default App;
