import "./App.css";
import AllFormComponents from "./components/formcomponents/AllFormComponents";
import Formikk from "./components/formik/Formikk";
import RefHook from "./components/use-ref-hook/RefHook";
import ReducerHook from "./components/user-reducer-hook/ReducerHook";

function App() {
  return (
    <div className="App">
      <h1>hello react</h1>
      <Formikk />
      <AllFormComponents />
      <RefHook />
      <ReducerHook />
    </div>
  );
}

export default App;
