import "./App.css";
import { useState } from "react";
import StateWithArrayObj from "./component/StateWithArrayObj";
import Example2 from "./component/Example2";
import LazyLoading from "./component/LazyLoading";
import LazyInitialisation from "./component/LazyInitialisation";
import UseEffect from "./component/UseEffect";
import CleanUpUseEffect from "./component/CleanUpUseEffect";
import APIFetchUseEffect from "./component/APIFetchUseEffect";
import OptimizeUseEffect from "./component/OptimizeUseEffect";
import UseRef from "./component/UseRef";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <center>
        <h3>Button clicked - {count} times</h3>
        <button
          onClick={() => {
            setCount((pre) => pre + 1);

            setCount((pre) => pre + 1);
          }}
        >
          Click
        </button>
        <br />
        <StateWithArrayObj /> <br />
        <br />
        <Example2></Example2>
        <br /> <br />
        <LazyLoading></LazyLoading>
        <br />
        <br />
        <LazyInitialisation></LazyInitialisation>
        <br />
        <br />
        <UseEffect></UseEffect> <br />
        <br />
        <CleanUpUseEffect></CleanUpUseEffect> <br />
        <br />
        <APIFetchUseEffect></APIFetchUseEffect> <br />
        <br />
        <OptimizeUseEffect /> <br />
        <br />
        <UseRef></UseRef>
      </center>
    </>
  );
}

export default App;
