import AppName from "./component/AppName";
import TodoInput from "./component/TodoInput";
import TodoItem1 from "./component/TodoItem1";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";

function App() {
  return (
    <center>
      <AppName></AppName>
      <TodoInput></TodoInput>
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </center>
  );
}

export default App;
