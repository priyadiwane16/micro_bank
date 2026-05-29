import { useState } from "react";
import { BiListPlus } from "react-icons/bi";

function TodoInput({ onNewItem }) {
  const [todoName, setDodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handNameChange = (event) => {
    setDodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtenClicked = () => {
    onNewItem(todoName, todoDate);
    setDodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success todo-button"
            onClick={handleAddButtenClicked}
          >
            <BiListPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoInput;
