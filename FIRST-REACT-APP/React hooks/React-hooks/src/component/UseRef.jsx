import { useRef, useState } from "react";
import "../App.css";

function UseRef() {
  const inputRef = useRef();
  const [name, setName] = useState("Priya");
  const handleReset = () => {
    setName("");
    inputRef.current.focus();
  };
  const handleChange = () => {
    inputRef.current.style.color = "red";
  };

  return (
    <>
      <div className="display">
        <input
          ref={inputRef}
          type="text"
          value={name}
          placeholder="Enter something.."
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleChange}>Change Input</button>
      </div>
    </>
  );
}
export default UseRef;
