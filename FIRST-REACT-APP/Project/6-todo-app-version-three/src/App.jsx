import AppName from "./component/AppName";
import TodoInput from "./component/TodoInput";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center>
      <AppName></AppName>
      <TodoInput onNewItem={handleNewItem}></TodoInput>
      {todoItems?.length === 0 && (
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      )}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
