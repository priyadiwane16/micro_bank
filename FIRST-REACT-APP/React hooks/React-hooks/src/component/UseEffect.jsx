import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);
  useEffect(() => {
    return console.log("learning useeffect");
  }, [number]); // dependency Array useEffect [number]

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increament</button>
      <br />
      <br />
      <div>{number}</div>
      <button onClick={() => setNumber(number - 1)}>decreament</button>
    </>
  );
}
export default UseEffect;
