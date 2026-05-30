import AppName from "./component/AppName";
import TodoInput from "./component/TodoInput";
import TodoItems from "./component/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Goto College",
      date: "4/10/2024",
    },
    {
      name: "Buy Milk",
      date: "4/10/2024",
    },
    {
      name: "Like",
      date: "right now",
    },
    {
      name: "Wtite Notes",
      date: "4/10/2024",
    },
    {
      name: "Buy Food",
      date: "4/10/2024",
    },
  ];

  return (
    <center>
      <AppName></AppName>
      <TodoInput></TodoInput>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
