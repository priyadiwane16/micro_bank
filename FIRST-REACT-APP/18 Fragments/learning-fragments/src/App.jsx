import List from "./component/list";
import FoodList from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import FoodItems from "./component/FoodItems";
import Container from "./component/Container.jsx";
import "./App.css";
import FoodInput from "./component/FoodInput.jsx";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h3 className="heading">healthy Breakfast options</h3> <br />
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <h6>* Tip :-</h6>
        <p>
          This is healthy food option and drink some ajwain jeera water to
          improve diagesion , thank you
        </p>
      </Container>
    </>
  );
}

export default App;
