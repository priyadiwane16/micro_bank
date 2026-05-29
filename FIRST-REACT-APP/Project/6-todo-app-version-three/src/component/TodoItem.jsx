//import styles from "./TodoItem.module.css";
import { MdDeleteOutline } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className={"row todo-row "}>
        <div className="col-4 "> {todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
