import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import Display from "./components/Display.jsx";

function App() {
  const [calval, setCalVal] = useState(" ");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal(" ");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalVal(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayvalue={calval} />
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
