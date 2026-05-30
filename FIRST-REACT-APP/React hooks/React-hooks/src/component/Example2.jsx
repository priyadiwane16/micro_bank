import { useState } from "react";

function Example2() {
  const [task, setTask] = useState(["Java", "HTML", "CSS", "JAvaScript"]);
  const handleAdd = () => {
    setTask([...task, "react", "DotNet"]);
  };
  return (
    <>
      {task.map((value) => {
        return <li>{value}</li>;
      })}
      <br></br> <br />
      <button onClick={handleAdd}>Add Task</button>
    </>
  );
}
export default Example2;
