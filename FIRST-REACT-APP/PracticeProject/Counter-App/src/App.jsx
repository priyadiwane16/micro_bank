import { useState } from "react";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";

function App() {
  const [count, setCount] = useState(0);

  const increament = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <div className={styles.buttonContainer}>
        <h4>Counter :{count}</h4>
        <button onClick={increament} type="button" className="btn btn-success">
          increament
        </button>

        <button onClick={decreament} type="button" className="btn btn-danger">
          Decreament
        </button>

        <button onClick={reset} type="button" className="btn btn-info">
          Reset
        </button>
      </div>
      <br />
      <br />
      <div>
        <h1> Welcome, Happy Shopping</h1>
        <Cart></Cart>
      </div>
    </>
  );
}

export default App;
